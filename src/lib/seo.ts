/**
 * Configurazione SEO: URL canonico del sito, mappa locale→OG e dati strutturati.
 */
import { company } from './company';
import { img, photos } from './images';

export const SITE_URL = company.url.replace(/\/$/, '');

/** Immagine social di default (1200×630) */
export const DEFAULT_OG_IMAGE = img(photos.heroCar, 1200, 630);

/** locale Paraglide → og:locale */
export const ogLocaleMap: Record<string, string> = {
	it: 'it_IT',
	en: 'en_GB',
	es: 'es_ES',
	de: 'de_DE',
	fr: 'fr_FR'
};

/** Dati strutturati JSON-LD: autonoleggio locale (schema.org/AutoRental). */
export function localBusinessJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'AutoRental',
		'@id': `${SITE_URL}/#business`,
		name: company.legalName,
		alternateName: company.brandName,
		description:
			'Noleggio auto, furgoni, minibus 9 posti e macchinari edili a Verona e provincia. Parcheggio aeroporto con navetta.',
		url: SITE_URL,
		telephone: company.phone,
		email: company.email,
		image: DEFAULT_OG_IMAGE,
		priceRange: '€€',
		vatID: company.vat,
		address: {
			'@type': 'PostalAddress',
			streetAddress: company.address.street,
			addressLocality: company.address.city,
			postalCode: company.address.postalCode,
			addressRegion: company.address.province,
			addressCountry: company.address.country
		},
		areaServed: company.serviceArea.map((name) => ({ '@type': 'City', name })),
		sameAs: [] as string[]
	};
}

/** Dati strutturati per una pagina servizio (schema.org/Service). */
export function serviceJsonLd(title: string, description: string, url: string, price?: number) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: title,
		description,
		url,
		provider: { '@id': `${SITE_URL}/#business` },
		areaServed: company.serviceArea.map((name) => ({ '@type': 'City', name })),
		...(price
			? {
					offers: {
						'@type': 'Offer',
						price: String(price),
						priceCurrency: 'EUR',
						priceSpecification: {
							'@type': 'UnitPriceSpecification',
							price: String(price),
							priceCurrency: 'EUR',
							unitText: 'giorno'
						}
					}
				}
			: {})
	};
}
