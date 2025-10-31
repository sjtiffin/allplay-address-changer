import type { Actions } from './$types';
import { createAdminApiClient } from '@shopify/admin-api-client';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import { API_VERSION } from '$env/static/private';

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
				accessToken: env.SHOPIFY_ACCESS_TOKEN,
				apiVersion: API_VERSION
			});
		} catch (error) {
			console.error('Shopify API error: ', error);
			return fail(500, { error: 'Failed to fetch orders, please try again' });
		}
	}
} satisfies Actions;
