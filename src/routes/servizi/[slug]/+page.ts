import { error } from '@sveltejs/kit';
import { getService, vehicles } from '$lib/data/fleet';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const service = getService(params.slug);
	if (!service) error(404, 'Servizio non trovato');

	const related = vehicles.filter((v) => service.cats.includes(v.category));
	return { service, related };
};
