/**
 * Foto DEMO da Unsplash (verificate, hotlink consentito).
 * Da sostituire con foto reali della flotta prima del go-live.
 * Si memorizza solo l'ID; l'URL si costruisce con img() alla larghezza voluta.
 */
export const img = (id: string, w = 1200, h?: number) =>
	`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=72`;

export const photos = {
	heroCar: '1568605117036-5fe5e7bab0b7',
	cityCar: '1533473359331-0135ef1b58bf',
	sedan: '1486496572940-2bb2341fdbdf',
	suv: '1565043666747-69f6646db940',
	wagon: '1485463611174-f302f6a5c1c9',
	coupe: '1517026575980-3e1e2dedeab4',
	carKeys: '1550355291-bbee04a92027',
	cargoVan: '1665521032636-e8d2f6927053',
	van: '1587813369290-091c9d432daf',
	passengerVan: '1620455800201-7f00aeef12ed',
	excavator: '1628645419184-26a1f2757340',
	machinery: '1580901369227-308f6f40bdeb',
	arena: '1544537041-a514f5918bd5',
	arenaNight: '1609858170613-7ba6b01a57d8',
	airport: '1542296332-2e4473faf563',
	airportHall: '1530521954074-e64f6810b32d'
} as const;
