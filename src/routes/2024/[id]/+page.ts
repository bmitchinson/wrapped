export async function load({ params }) {
	// params.id will be the route parameter
	return {
		id: parseInt(params.id)
	};
}
