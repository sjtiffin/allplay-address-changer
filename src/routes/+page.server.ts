import type { Actions } from './$types';
import { createAdminApiClient } from '@shopify/admin-api-client';
import { SHOPIFY_ACCESS_TOKEN, API_VERSION, RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email) {
			return fail(400, { error: 'Email is required' });
		}

		try {
			const client = createAdminApiClient({
				storeDomain: 'boardgametables.myshopify.com',
				accessToken: SHOPIFY_ACCESS_TOKEN!,
				apiVersion: API_VERSION!
			});

			const query = `
			query {
  				orders(first: 250, query: "email:${email}") {
    				edges {
      					node {
        					id
        					name
        					email
        					createdAt
        					shippingAddress {
          					name
          					address1
          					address2
          					city
          					province
          					zip
          					country
          					phone
        				}
				        lineItems(first: 250) {
				          edges {
				            node {
				              title
				              quantity
				            }
				          }
				        }
				        fulfillments {
				          createdAt
				          inTransitAt
				          trackingInfo {
				            company
				            number
				            url
				          }
				        }
				      }
				    }
				  }
				}
			`;

			const response = await client.request(query);
			const { data, errors } = response;

			if (errors) {
				console.error('Error fetching data', errors);
				return fail(500, { error: 'Admin API query failed' });
			}

			const orders = data.orders.edges.map((edge: any) => {
				const node = edge.node;
				const { lineItems, fulfillments, ...orderData } = node;
				return {
					...orderData,
					lineItems: lineItems.edges.map((liEdge: any) => liEdge.node),
					fulfillments: fulfillments
				};
			});

			if (orders.length === 0) {
				return fail(400, { incorrect: true });
			}

			// Build HTML email content as a single table
			let html = '<h1>Your Orders</h1>';
			html += '<table border="1" style="border-collapse: collapse; width: 100%;">';
			html +=
				'<tr><th style="padding: 8px;">Order</th><th style="padding: 8px;">Email</th><th style="padding: 8px;">Name</th><th style="padding: 8px;">Shipping Address</th><th style="padding: 8px;">Items</th><th style="padding: 8px;">Fulfillments</th></tr>';

			orders.forEach((order: any) => {
				// Customer Name and Shipping Address
				const addr = order.shippingAddress;
				const customerName = addr?.name || 'N/A';
				const addressStr = addr
					? `${addr.address1 || ''} ${addr.address2 || ''} ${addr.city || ''}, ${addr.province || ''} ${addr.zip || ''} ${addr.country || ''}`.trim()
					: 'N/A';

				// Line Items
				const itemsStr = order.lineItems
					.map((item: any) => `${item.title} (Qty: ${item.quantity})`)
					.join('<br>');

				// Fulfillments
				const fulfillStr = order.fulfillments
					.map((f: any) => {
						const tracking =
							f.trackingInfo && f.trackingInfo.length > 0
								? f.trackingInfo
										.map(
											(t: any) =>
												`${t.company}: ${t.number} (${t.url ? `<a href="${t.url}">Track</a>` : 'No URL'})`
										)
										.join(', ')
								: 'No tracking';
						return `Created: ${new Date(f.createdAt).toLocaleString()}, In Transit: ${f.inTransitAt ? new Date(f.inTransitAt).toLocaleString() : 'N/A'}, Tracking: ${tracking}`;
					})
					.join('<br>');

				html += `<tr><td style="padding: 8px;">${order.name}</td><td style="padding: 8px;">${order.email}</td><td style="padding: 8px;">${customerName}</td><td style="padding: 8px;">${addressStr}</td><td style="padding: 8px;">${itemsStr || 'N/A'}</td><td style="padding: 8px;">${fulfillStr || 'N/A'}</td></tr>`;
			});

			html += '</table>';

			const resend = new Resend(RESEND_API_KEY);

			const { error } = await resend.emails.send({
				from: 'Sara Tiffin <sara@sjtiffin.dev>',
				to: email as string,
				subject: 'Your Order Information',
				html: html
			});

			if (error) {
				console.error('Resend error:', error);
				return fail(500, { error: 'Error sending email' });
			}
		} catch (error) {
			console.error('Shopify API error: ', error);
			return fail(500, { error: 'Failed to fetch orders, please try again' });
		}
	}
} satisfies Actions;
