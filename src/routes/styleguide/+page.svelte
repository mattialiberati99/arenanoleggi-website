<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Button from '$lib/components/Button.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import CarCard from '$lib/components/CarCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import Field from '$lib/components/Field.svelte';
	import { vehicles, services } from '$lib/data/fleet';
	import { company } from '$lib/company';

	type Swatch = { shade: string; hex: string; dark?: boolean };

	const palettes: { name: string; role: string; swatches: Swatch[] }[] = [
		{
			name: 'Brand · Rosso Verona',
			role: 'Colore identitario. CTA, accenti, link, stati attivi.',
			swatches: [
				{ shade: '50', hex: '#fbf1ec' },
				{ shade: '100', hex: '#f6ddd2' },
				{ shade: '200', hex: '#edbba7' },
				{ shade: '300', hex: '#e2937a' },
				{ shade: '400', hex: '#d46a4a' },
				{ shade: '500', hex: '#c24e2c', dark: true },
				{ shade: '600', hex: '#a53e20', dark: true },
				{ shade: '700', hex: '#85331c', dark: true },
				{ shade: '800', hex: '#6a2c1b', dark: true },
				{ shade: '900', hex: '#57271a', dark: true }
			]
		},
		{
			name: 'Sand · Pietra veronese',
			role: 'Neutri caldi. Sfondi, bordi, testi secondari, superfici.',
			swatches: [
				{ shade: '50', hex: '#faf7f2' },
				{ shade: '100', hex: '#f2ece3' },
				{ shade: '200', hex: '#e6dcce' },
				{ shade: '300', hex: '#d3c4ae' },
				{ shade: '400', hex: '#b6a286' },
				{ shade: '500', hex: '#9a8466', dark: true },
				{ shade: '600', hex: '#7d6a50', dark: true },
				{ shade: '700', hex: '#635340', dark: true },
				{ shade: '800', hex: '#463b2e', dark: true },
				{ shade: '900', hex: '#2b241c', dark: true }
			]
		},
		{
			name: 'Gold · Accento premium',
			role: 'Usato con parsimonia: dettagli premium, badge, micro-accenti.',
			swatches: [
				{ shade: '400', hex: '#e0a33b' },
				{ shade: '500', hex: '#ce8a24', dark: true },
				{ shade: '600', hex: '#a86e1a', dark: true }
			]
		},
		{
			name: 'Semantici',
			role: 'Testo principale (Ink) e disponibilità (Leaf).',
			swatches: [
				{ shade: 'ink', hex: '#1e1813', dark: true },
				{ shade: 'leaf-500', hex: '#3f7d52', dark: true },
				{ shade: 'leaf-600', hex: '#2f6440', dark: true }
			]
		}
	];

	const typeScale = [
		{
			label: 'Display XL',
			cls: 'font-display text-6xl font-semibold tracking-tight',
			note: 'Fraunces · 60px / 600 · titoli hero'
		},
		{
			label: 'Display L',
			cls: 'font-display text-5xl font-semibold tracking-tight',
			note: 'Fraunces · 48px / 600'
		},
		{
			label: 'Heading 1',
			cls: 'font-display text-4xl font-semibold',
			note: 'Fraunces · 36px / 600'
		},
		{
			label: 'Heading 2',
			cls: 'font-display text-3xl font-semibold',
			note: 'Fraunces · 30px / 600'
		},
		{ label: 'Heading 3', cls: 'font-display text-2xl font-medium', note: 'Fraunces · 24px / 500' },
		{ label: 'Body large', cls: 'text-lg text-sand-700', note: 'Hanken Grotesk · 18px / 400' },
		{ label: 'Body', cls: 'text-base text-sand-700', note: 'Hanken Grotesk · 16px / 400' },
		{ label: 'Small / caption', cls: 'text-sm text-sand-500', note: 'Hanken Grotesk · 14px' }
	];

	const iconNames = [
		'car',
		'van',
		'minibus',
		'machinery',
		'parking',
		'users',
		'gear',
		'fuel',
		'luggage',
		'calendar',
		'map-pin',
		'phone',
		'mail',
		'whatsapp',
		'shield',
		'clock',
		'star',
		'check'
	] as const;

	const nav = [
		{ id: 'concept', label: 'Concept' },
		{ id: 'logo', label: 'Logo' },
		{ id: 'colori', label: 'Colori' },
		{ id: 'tipografia', label: 'Tipografia' },
		{ id: 'bottoni', label: 'Bottoni' },
		{ id: 'badge', label: 'Badge' },
		{ id: 'form', label: 'Form' },
		{ id: 'icone', label: 'Icone' },
		{ id: 'card-auto', label: 'Card auto' },
		{ id: 'card-servizi', label: 'Servizi' }
	];

	const inputCls =
		'w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-ink placeholder:text-sand-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none';
</script>

<svelte:head>
	<title>Brand Guidelines · Arena Noleggi</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="min-h-screen bg-sand-50">
	<!-- Top bar -->
	<header class="sticky top-0 z-30 border-b border-sand-200/70 bg-sand-50/80 backdrop-blur-md">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
			<Logo size={34} />
			<div class="hidden items-center gap-2 sm:flex">
				<Badge variant="gold">Brand Guidelines</Badge>
				<span class="text-xs text-sand-500">v0.1 · interno</span>
			</div>
		</div>
		<nav class="border-t border-sand-200/70">
			<div class="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-2 text-sm">
				{#each nav as item (item.id)}
					<a
						href="#{item.id}"
						class="shrink-0 rounded-full px-3 py-1 text-sand-600 transition-colors hover:bg-sand-100 hover:text-ink"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</nav>
	</header>

	<main class="mx-auto max-w-6xl px-6 py-16">
		<!-- HERO -->
		<section class="mb-24">
			<p class="mb-4 text-xs font-semibold tracking-[0.25em] text-brand-600 uppercase">
				Sistema di design
			</p>
			<h1 class="max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
				Arena Noleggi —<br />identità e componenti
			</h1>
			<p class="mt-6 max-w-2xl text-lg text-pretty text-sand-700">
				Lo storybook del marchio: colori, tipografia e componenti riutilizzabili per costruire il
				sito di noleggio auto, furgoni, minibus, macchinari e servizi a Verona e provincia. Una base
				condivisa per decidere insieme la struttura.
			</p>
		</section>

		<!-- CONCEPT -->
		<section id="concept" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Concept</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Da dove nasce il marchio</h2>
			<div class="mt-8 grid gap-6 md:grid-cols-3">
				<div class="rounded-2xl border border-sand-200 bg-white p-6">
					<div
						class="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
					>
						<Icon name="map-pin" size={22} />
					</div>
					<h3 class="mt-4 text-xl text-ink">L'Arena di Verona</h3>
					<p class="mt-2 text-sm leading-relaxed text-sand-700">
						Il nome richiama l'anfiteatro romano e i suoi archi. Il simbolo è un arco con una strada
						in prospettiva: il luogo (Arena) e il viaggio (noleggio).
					</p>
				</div>
				<div class="rounded-2xl border border-sand-200 bg-white p-6">
					<div
						class="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
					>
						<Icon name="star" size={22} />
					</div>
					<h3 class="mt-4 text-xl text-ink">Il Rosso Verona</h3>
					<p class="mt-2 text-sm leading-relaxed text-sand-700">
						La palette parte dal terracotta del famoso marmo "Rosso Verona", abbinato a neutri caldi
						di pietra. Un colore di marca riconoscibile e diverso dai competitor.
					</p>
				</div>
				<div class="rounded-2xl border border-sand-200 bg-white p-6">
					<div
						class="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
					>
						<Icon name="shield" size={22} />
					</div>
					<h3 class="mt-4 text-xl text-ink">Tono di voce</h3>
					<p class="mt-2 text-sm leading-relaxed text-sand-700">
						Affidabile, locale, premium ma accessibile. Chiaro sui prezzi ("a partire da"),
						orientato all'azione: richiedi un preventivo, prenota, parti.
					</p>
				</div>
			</div>
		</section>

		<!-- LOGO -->
		<section id="logo" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Logo</p>
			<div class="flex flex-wrap items-end justify-between gap-4">
				<h2 class="text-3xl text-ink sm:text-4xl">Il marchio e le sue varianti</h2>
				<Button href="/styleguide/loghi" variant="outline" size="sm">
					Confronta 4 concept <Icon name="arrow-right" size={16} />
				</Button>
			</div>

			<div class="mt-8 grid gap-6 lg:grid-cols-2">
				<!-- Lockup chiaro -->
				<div
					class="flex flex-col items-center justify-center gap-6 rounded-2xl border border-sand-200 bg-white p-12"
				>
					<Logo size={64} tagline />
					<span class="text-xs text-sand-500">Lockup principale + tagline · su chiaro</span>
				</div>
				<!-- Lockup scuro / mono -->
				<div class="flex flex-col items-center justify-center gap-6 rounded-2xl bg-ink p-12">
					<div class="text-sand-50"><Logo size={64} mono tagline /></div>
					<span class="text-xs text-sand-400">Versione monocromatica · su scuro</span>
				</div>
				<!-- Solo simbolo -->
				<div
					class="flex items-center justify-center gap-10 rounded-2xl border border-sand-200 bg-white p-12"
				>
					<Logo variant="mark" size={72} />
					<Logo variant="mark" size={48} />
					<Logo variant="mark" size={32} />
					<div class="flex size-12 items-center justify-center rounded-xl bg-brand-600">
						<Logo variant="mark" size={28} mono class="text-white" />
					</div>
				</div>
				<!-- Wordmark -->
				<div
					class="flex items-center justify-center rounded-2xl border border-sand-200 bg-sand-100 p-12"
				>
					<Logo size={40} />
				</div>
			</div>
			<p class="mt-4 text-sm text-sand-600">
				Spazio di rispetto minimo attorno al logo pari all'altezza dell'arco. Non deformare, non
				ruotare, non cambiare i colori fuori dalla palette.
			</p>
		</section>

		<!-- COLORI -->
		<section id="colori" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Colori</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Palette</h2>

			<div class="mt-8 space-y-10">
				{#each palettes as palette (palette.name)}
					<div>
						<h3 class="text-lg text-ink">{palette.name}</h3>
						<p class="mb-3 text-sm text-sand-600">{palette.role}</p>
						<div class="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
							{#each palette.swatches as s (s.hex)}
								<div class="overflow-hidden rounded-xl border border-sand-200">
									<div class="flex h-16 items-end p-2" style="background-color: {s.hex}">
										<span
											class="text-[0.7rem] font-semibold {s.dark ? 'text-white/90' : 'text-ink/70'}"
										>
											{s.shade}
										</span>
									</div>
									<div class="bg-white px-2 py-1.5">
										<span class="text-[0.65rem] text-sand-500 uppercase">{s.hex}</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- TIPOGRAFIA -->
		<section id="tipografia" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Tipografia</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Caratteri e scala</h2>

			<div class="mt-8 grid gap-6 md:grid-cols-2">
				<div class="rounded-2xl border border-sand-200 bg-white p-8">
					<span class="text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase"
						>Display</span
					>
					<p class="mt-3 font-display text-6xl font-semibold text-ink">Fraunces</p>
					<p class="mt-2 font-display text-lg text-sand-700">
						Serif editoriale, caldo e italiano. Titoli e numeri di prezzo.
					</p>
					<p class="mt-4 font-display text-2xl text-sand-800">
						Aa Bb Cc · 0123456789 · € a partire da
					</p>
				</div>
				<div class="rounded-2xl border border-sand-200 bg-white p-8">
					<span class="text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Testo</span>
					<p class="mt-3 text-6xl font-bold text-ink">Hanken Grotesk</p>
					<p class="mt-2 text-lg text-sand-700">
						Grotesque pulito e leggibile. Corpo testo, UI, etichette.
					</p>
					<p class="mt-4 text-2xl text-sand-800">Aa Bb Cc · 0123456789 · noleggio a Verona</p>
				</div>
			</div>

			<div class="mt-6 divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
				{#each typeScale as t (t.label)}
					<div
						class="flex flex-col gap-1 px-8 py-5 sm:flex-row sm:items-baseline sm:justify-between"
					>
						<span class={t.cls}>Noleggia con Arena</span>
						<span class="shrink-0 text-xs text-sand-500">{t.note}</span>
					</div>
				{/each}
			</div>
		</section>

		<!-- BOTTONI -->
		<section id="bottoni" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Componenti</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Bottoni</h2>

			<div class="mt-8 space-y-8 rounded-2xl border border-sand-200 bg-white p-8">
				<div class="flex flex-wrap items-center gap-4">
					<Button variant="primary">Richiedi preventivo</Button>
					<Button variant="secondary">Prenota ora</Button>
					<Button variant="outline">Scopri di più</Button>
					<Button variant="ghost">Annulla</Button>
				</div>
				<div class="flex flex-wrap items-center gap-4">
					<Button size="sm">Small</Button>
					<Button size="md">Medium</Button>
					<Button size="lg">Large</Button>
					<Button disabled>Disabilitato</Button>
				</div>
				<div class="flex flex-wrap items-center gap-4">
					<Button>Richiedi <Icon name="arrow-right" size={18} /></Button>
					<Button variant="secondary"><Icon name="whatsapp" size={18} /> WhatsApp</Button>
					<Button variant="outline"><Icon name="phone" size={18} /> Chiama</Button>
				</div>
			</div>
		</section>

		<!-- BADGE -->
		<section id="badge" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Componenti</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Badge & tag</h2>
			<div class="mt-8 flex flex-wrap gap-3 rounded-2xl border border-sand-200 bg-white p-8">
				<Badge variant="brand">Offerta</Badge>
				<Badge variant="neutral">Berlina</Badge>
				<Badge variant="gold"><Icon name="star" size={14} /> Premium</Badge>
				<Badge variant="available"
					><span class="size-1.5 rounded-full bg-leaf-500"></span> Disponibile</Badge
				>
			</div>
		</section>

		<!-- FORM -->
		<section id="form" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Componenti</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Campi modulo</h2>
			<div class="mt-8 grid gap-6 rounded-2xl border border-sand-200 bg-white p-8 md:grid-cols-2">
				<Field id="nome" label="Nome e cognome" required>
					<input id="nome" type="text" placeholder="Mario Rossi" class={inputCls} />
				</Field>
				<Field id="email" label="Email" required>
					<input id="email" type="email" placeholder="mario@esempio.it" class={inputCls} />
				</Field>
				<Field id="servizio" label="Servizio">
					<select id="servizio" class={inputCls}>
						{#each services as s (s.id)}
							<option>{s.title}</option>
						{/each}
					</select>
				</Field>
				<Field id="data" label="Data ritiro" hint="Formato gg/mm/aaaa">
					<input id="data" type="date" class={inputCls} />
				</Field>
				<Field id="msg" label="Messaggio" class="md:col-span-2">
					<textarea id="msg" rows="3" placeholder="Raccontaci di cosa hai bisogno…" class={inputCls}
					></textarea>
				</Field>
				<div class="md:col-span-2">
					<Button>Invia richiesta <Icon name="arrow-right" size={18} /></Button>
				</div>
			</div>
		</section>

		<!-- ICONE -->
		<section id="icone" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Sistema</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Iconografia</h2>
			<div class="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-9">
				{#each iconNames as name (name)}
					<div
						class="flex flex-col items-center gap-2 rounded-xl border border-sand-200 bg-white p-4 text-ink"
					>
						<Icon {name} size={26} />
						<span class="text-[0.65rem] text-sand-500">{name}</span>
					</div>
				{/each}
			</div>
		</section>

		<!-- CARD AUTO -->
		<section id="card-auto" class="mb-24 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Componenti</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Card veicolo</h2>
			<p class="mt-2 max-w-2xl text-sand-600">
				Immagini segnaposto (al posto delle foto reali). Prezzo "a partire da", specifiche e CTA di
				richiesta.
			</p>
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each vehicles as vehicle (vehicle.id)}
					<CarCard {vehicle} />
				{/each}
			</div>
		</section>

		<!-- CARD SERVIZI -->
		<section id="card-servizi" class="mb-12 scroll-mt-32">
			<p class="mb-2 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Componenti</p>
			<h2 class="text-3xl text-ink sm:text-4xl">Card servizio</h2>
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each services as service (service.id)}
					<ServiceCard {service} />
				{/each}
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="border-t border-sand-200 bg-ink text-sand-300">
		<div class="mx-auto max-w-6xl px-6 py-12">
			<Logo size={36} mono class="text-sand-50" />
			<p class="mt-4 max-w-md text-sm text-sand-400">
				{company.legalName} · {company.fullAddress}<br />
				P.IVA {company.vat} · REA {company.rea} · Cap. soc. {company.shareCapital}
			</p>
			<p class="mt-6 text-xs text-sand-500">Documento interno di brand · non indicizzato.</p>
		</div>
	</footer>
</div>
