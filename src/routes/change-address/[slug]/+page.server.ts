import type { PageServerLoad } from './$types';

// TODO: get the specific order data back from the shopfiy API
// Note: We could probably pass this via the URL, but this will be easier to manage right now
export const load: PageServerLoad = async ({ params }) => {
	return {
		data: params.slug
	};
};

// TODO: implement a form action to update the address on the form

// Extra: invalidate this route on update success to show the updated address data to the user
