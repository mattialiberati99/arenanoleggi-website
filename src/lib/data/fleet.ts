/**
 * Dati DEMO della flotta e dei servizi — segnaposto per impostare il sito.
 * Prezzi "a partire da", modelli e foto sono di esempio, da sostituire con dati reali.
 */
import { photos } from '$lib/images';

export type VehicleCategory =
	| 'city'
	| 'berlina'
	| 'suv'
	| 'wagon'
	| 'van'
	| 'minibus'
	| 'machinery';

export type Vehicle = {
	id: string;
	name: string;
	category: VehicleCategory;
	categoryLabel: string;
	image: string; // id Unsplash (vedi images.ts)
	fromPrice: number; // €/giorno "a partire da"
	priceUnit: 'giorno' | 'ora';
	seats: number;
	doors?: number;
	transmission: 'Manuale' | 'Automatico';
	fuel: 'Benzina' | 'Diesel' | 'Ibrida' | 'Elettrica' | 'GPL';
	luggage?: number;
	highlight?: string;
	available?: boolean;
};

export const vehicles: Vehicle[] = [
	{
		id: 'fiat-500',
		name: 'Fiat 500',
		category: 'city',
		categoryLabel: 'City car',
		image: photos.cityCar,
		fromPrice: 29,
		priceUnit: 'giorno',
		seats: 4,
		doors: 3,
		transmission: 'Manuale',
		fuel: 'Ibrida',
		luggage: 1,
		highlight: 'Ideale per la città',
		available: true
	},
	{
		id: 'vw-golf',
		name: 'Volkswagen Golf',
		category: 'berlina',
		categoryLabel: 'Berlina',
		image: photos.sedan,
		fromPrice: 45,
		priceUnit: 'giorno',
		seats: 5,
		doors: 5,
		transmission: 'Automatico',
		fuel: 'Diesel',
		luggage: 3,
		highlight: 'Comfort e consumi',
		available: true
	},
	{
		id: 'audi-q3',
		name: 'Audi Q3',
		category: 'suv',
		categoryLabel: 'SUV',
		image: photos.suv,
		fromPrice: 69,
		priceUnit: 'giorno',
		seats: 5,
		doors: 5,
		transmission: 'Automatico',
		fuel: 'Ibrida',
		luggage: 4,
		highlight: 'Premium',
		available: true
	},
	{
		id: 'skoda-octavia-wagon',
		name: 'Škoda Octavia Wagon',
		category: 'wagon',
		categoryLabel: 'Station wagon',
		image: photos.wagon,
		fromPrice: 52,
		priceUnit: 'giorno',
		seats: 5,
		doors: 5,
		transmission: 'Automatico',
		fuel: 'Diesel',
		luggage: 5,
		highlight: 'Tanto spazio',
		available: true
	},
	{
		id: 'ford-transit',
		name: 'Ford Transit',
		category: 'van',
		categoryLabel: 'Furgone',
		image: photos.van,
		fromPrice: 59,
		priceUnit: 'giorno',
		seats: 3,
		transmission: 'Manuale',
		fuel: 'Diesel',
		luggage: 12,
		highlight: 'Fino a 15 m³',
		available: true
	},
	{
		id: 'mercedes-vito-9',
		name: 'Mercedes Vito 9 posti',
		category: 'minibus',
		categoryLabel: '9 posti',
		image: photos.passengerVan,
		fromPrice: 89,
		priceUnit: 'giorno',
		seats: 9,
		transmission: 'Automatico',
		fuel: 'Diesel',
		luggage: 6,
		highlight: 'Gruppi e famiglie',
		available: true
	}
];

export type Service = {
	id: string;
	slug: string;
	title: string;
	tagline: string;
	description: string;
	lead: string; // intro estesa per la pagina servizio
	image: string; // id Unsplash
	features: string[];
	includes: string[];
	cats: VehicleCategory[]; // categorie veicoli da mostrare nella pagina
	fromPrice?: number;
	priceUnit?: string;
	icon: 'car' | 'van' | 'minibus' | 'machinery' | 'parking';
	featured?: boolean;
};

export const services: Service[] = [
	{
		id: 'auto',
		slug: 'noleggio-auto',
		title: 'Noleggio auto',
		tagline: 'Breve, medio e lungo termine',
		description:
			'City car, berline e SUV per ogni esigenza: spostamenti in città, trasferte di lavoro o vacanze a Verona e dintorni.',
		lead: 'Dalla city car agile per il centro di Verona al SUV per la gita fuori porta: scegli il modello, vedi subito il prezzo e parti. Tariffe trasparenti, mezzi recenti e assistenza inclusa.',
		image: photos.heroCar,
		features: [
			'Auto recenti e igienizzate',
			'Chilometri inclusi nel pacchetto',
			'Assicurazione RCA e Kasko su richiesta',
			'Ritiro in sede, in città o in aeroporto'
		],
		includes: [
			'Assistenza stradale 24/7',
			'Secondo conducente su richiesta',
			'Seggiolini e accessori'
		],
		cats: ['city', 'berlina', 'suv', 'wagon'],
		fromPrice: 29,
		priceUnit: '€ / giorno',
		icon: 'car',
		featured: true
	},
	{
		id: 'furgoni',
		slug: 'noleggio-furgoni',
		title: 'Furgoni e veicoli commerciali',
		tagline: 'Per traslochi e trasporto merci',
		description:
			'Furgoni di diverse volumetrie per traslochi, consegne e lavoro. Disponibili a giornata o a lungo termine.',
		lead: 'Devi fare un trasloco, una consegna o ti serve un mezzo per lavoro? Abbiamo furgoni di diverse volumetrie, pronti all’uso, a giornata o a lungo termine con tariffe dedicate alle aziende.',
		image: photos.cargoVan,
		features: [
			'Volumetrie da 6 a 15 m³',
			'Patente B sufficiente',
			'Sponda idraulica su alcuni modelli',
			'Formule a giornata, settimana o mese'
		],
		includes: ['Assicurazione e assistenza', 'Chilometraggio dedicato', 'Fatturazione aziendale'],
		cats: ['van'],
		fromPrice: 59,
		priceUnit: '€ / giorno',
		icon: 'van'
	},
	{
		id: '9-posti',
		slug: 'noleggio-9-posti',
		title: 'Minibus 9 posti',
		tagline: 'Gruppi, famiglie ed eventi',
		description:
			'Veicoli a 9 posti comodi e sicuri per gite, eventi e trasferte di gruppo verso aeroporti e stazioni.',
		lead: 'Per gite, eventi, squadre sportive o trasferte di gruppo: i nostri minibus a 9 posti sono comodi, sicuri e si guidano con la normale patente B. Perfetti anche per i transfer da e per l’aeroporto.',
		image: photos.passengerVan,
		features: [
			'9 posti omologati e comodi',
			'Si guida con patente B',
			'Ampio bagagliaio',
			'Climatizzazione su tutta la cabina'
		],
		includes: ['Assicurazione completa', 'Transfer aeroporto su richiesta', 'Chilometri inclusi'],
		cats: ['minibus'],
		fromPrice: 89,
		priceUnit: '€ / giorno',
		icon: 'minibus'
	},
	{
		id: 'macchinari',
		slug: 'noleggio-macchinari-edili',
		title: 'Macchinari edili',
		tagline: 'Attrezzature per cantiere',
		description:
			'Macchine e attrezzature per edilizia, artigianato e agricoltura. Noleggio operativo flessibile per i tuoi lavori.',
		lead: 'Mini-escavatori, piattaforme, attrezzature e mezzi da cantiere per edilizia, artigianato e agricoltura. Noleggio operativo flessibile, con consegna in cantiere e assistenza tecnica.',
		image: photos.excavator,
		features: [
			'Mezzi revisionati e a norma',
			'Consegna e ritiro in cantiere',
			'Noleggio giornaliero o a lungo termine',
			'Assistenza tecnica dedicata'
		],
		includes: ['Trasporto su richiesta', 'Manutenzione inclusa', 'Preventivo su misura'],
		cats: [],
		priceUnit: 'Su preventivo',
		icon: 'machinery'
	},
	{
		id: 'parcheggio',
		slug: 'parcheggio-aeroporto',
		title: 'Parcheggio aeroporto + navetta',
		tagline: 'Lascia l’auto, pensiamo a tutto noi',
		description:
			'Parcheggio sicuro con servizio navetta da/per l’aeroporto di Verona Villafranca. Ti accompagniamo al volo e ti riportiamo all’auto.',
		lead: 'Parti sereno: lasci l’auto nel nostro parcheggio sorvegliato e ti accompagniamo in aeroporto con la navetta. Al rientro veniamo a riprenderti e ti riportiamo alla tua auto. Comodo, puntuale, senza stress.',
		image: photos.airport,
		features: [
			'Parcheggio recintato e sorvegliato',
			'Navetta da/per i terminal',
			'Servizio su prenotazione, anche presto',
			'Paghi solo i giorni di sosta'
		],
		includes: [
			'Transfer andata e ritorno',
			'Posto al coperto su richiesta',
			'Tariffe per soste lunghe'
		],
		cats: [],
		fromPrice: 6,
		priceUnit: '€ / giorno',
		icon: 'parking'
	}
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
