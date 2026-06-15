import { locales, localizeHref, baseLocale } from '$lib/paraglide/runtime';
import { services } from '$lib/data/fleet';
import { SITE_URL } from '$lib/seo';

/** Pagine indicizzabili (percorsi base, senza prefisso lingua). */
const paths = ['/', ...services.map((s) => `/servizi/${s.slug}`), '/privacy', '/cookie'];

export const prerender = true;

export function GET() {
	const urls = paths
		.map((p) => {
			const alternates = locales
				.map(
					(l) =>
						`<xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localizeHref(p, { locale: l })}"/>`
				)
				.join('');
			const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localizeHref(p, { locale: baseLocale })}"/>`;
			const loc = `${SITE_URL}${localizeHref(p, { locale: baseLocale })}`;
			const priority = p === '/' ? '1.0' : '0.8';
			return `<url><loc>${loc}</loc>${alternates}${xDefault}<changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
