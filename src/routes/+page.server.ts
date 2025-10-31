import type { Actions } from './$types';
import { createAdminApiClient } from '@shopify/admin-api-client';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import { API_VERSION } from '$env/static/private';
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
				storeDomain: env.SHOPIFY_STORE_DOMAIN!,
				accessToken: env.SHOPIFY_ACCESS_TOKEN!,
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

			const resend = new Resend(env.RESEND_API_KEY);

			const { error } = await resend.emails.send({
				from: 'Sara Tiffin <sjtiffin.dev>',
				to: ['sarajtiffin@gmail.com'],
				subject: 'Hello!',
				html: '<p>Hello!</p>'
			});

			if (error) {
				return fail(500, { error: 'Error sending email' });
			}
			console.log(orders);
		} catch (error) {
			console.error('Shopify API error: ', error);
			return fail(500, { error: 'Failed to fetch orders, please try again' });
		}
	}
} satisfies Actions;
