import { createAdminApiClient } from '@shopify/admin-api-client';
import type { PageServerLoad } from './$types';
import { API_VERSION, SHOPIFY_ACCESS_TOKEN } from '$env/static/private';
import { fail } from '@sveltejs/kit';

// TODO: get the specific order data back from the shopfiy API
// Note: We could probably pass this via the URL, but this will be easier to manage right now
export const load: PageServerLoad = async ({ params }) => {
	try {
		const client = createAdminApiClient({
			storeDomain: 'boardgametables.myshopify.com',
			accessToken: SHOPIFY_ACCESS_TOKEN!,
			apiVersion: API_VERSION!
		});

		const query = `
		query {
			order(id: "gid://shopify/Order/${params.slug}") {
				id
				name
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
			}
		}
		`;

		const response = await client.request(query);
		const { data, errors } = response;

		if (errors) {
			console.error('Error fetching data', errors);
			return fail(500, { error: 'Error fetching shipping information for order' });
		}

		return {
			currentAddress: data
		};
	} catch (error) {
		console.error('Shopify API error: ', error);
		return fail(500, { error: 'Failed to fetch order shipping information, please try again ' });
	}
};

// TODO: implement a form action to update the address on the form

// Extra: invalidate this route on update success to show the updated address data to the user
