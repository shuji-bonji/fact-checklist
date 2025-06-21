import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load: PageLoad = ({ params }) => {
	return {
		id: params.id
	};
};