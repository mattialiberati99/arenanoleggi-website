/**
 * Dati aziendali ufficiali di Arena Noleggi S.r.l.
 * Fonte: Visura ordinaria CCIAA Verona (doc. T646777906, 14/04/2026).
 * Usati in footer, pagine legali (privacy/cookie), structured data SEO e contatti.
 *
 * NOTA: il telefono è provvisorio (referente) e gli orari non sono ancora definiti.
 */
export const company = {
	legalName: 'Arena Noleggi S.r.l.',
	brandName: 'Arena Noleggi',
	tagline: 'Autonoleggio · Verona e provincia',

	// Identificativi legali
	vat: '05189400236', // Partita IVA
	taxCode: '05189400236', // Codice Fiscale
	rea: 'VR-477417',
	shareCapital: '€ 20.000,00 i.v.',
	legalForm: 'Società a responsabilità limitata',
	director: 'Emanuele Zanetti', // Amministratore Unico / Legale rappresentante

	// Sede legale
	address: {
		street: 'Via Antonio Canova 19',
		locality: 'Loc. Asparetto',
		city: 'Cerea',
		province: 'VR',
		postalCode: '37053',
		country: 'IT',
		countryName: 'Italia'
	},

	// Contatti
	pec: 'arenanoleggisrl@legalmail.it',
	email: 'arenanoleggiosrl@libero.it',
	phone: '+39 377 486 5256', // numero provvisorio (referente)
	whatsapp: '+39 377 486 5256',

	// Web / social (PLACEHOLDER)
	domain: 'arenanoleggi.it',
	url: 'https://www.arenanoleggi.it',

	// Area di servizio
	serviceArea: ['Verona', 'Provincia di Verona', 'Cerea', 'Legnago', 'Bovolone', 'Villafranca'],

	get fullAddress() {
		return `${this.address.street}, ${this.address.postalCode} ${this.address.city} (${this.address.province})`;
	}
} as const;

export type Company = typeof company;
