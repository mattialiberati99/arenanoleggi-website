<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import Button from '$lib/components/Button.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import CarCard from '$lib/components/CarCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { localBusinessJsonLd } from '$lib/seo';
	import { reveal } from '$lib/actions/reveal';
	import { img, photos } from '$lib/images';
	import { vehicles, services } from '$lib/data/fleet';
	import { company } from '$lib/company';

	const filters = [
		{ key: 'all', label: 'Tutte', cats: [] as string[] },
		{ key: 'auto', label: 'Auto', cats: ['city', 'berlina', 'suv', 'wagon'] },
		{ key: 'van', label: 'Furgoni', cats: ['van'] },
		{ key: 'minibus', label: '9 posti', cats: ['minibus'] }
	];
	let active = $state('all');
	const visibleVehicles = $derived(
		active === 'all'
			? vehicles
			: vehicles.filter((v) => filters.find((f) => f.key === active)?.cats.includes(v.category))
	);

	const usp = [
		{
			icon: 'shield',
			title: 'Assicurazione inclusa',
			text: 'Copertura RCA e assistenza stradale su ogni noleggio.'
		},
		{
			icon: 'clock',
			title: 'Pronti in 2 minuti',
			text: 'Richiedi online, confermiamo noi. Ritiri e parti.'
		},
		{
			icon: 'map-pin',
			title: 'Verona e provincia',
			text: 'Consegna in città, in aeroporto e nei comuni limitrofi.'
		},
		{
			icon: 'star',
			title: 'Mezzi recenti',
			text: 'Flotta curata: auto, furgoni, 9 posti e macchinari.'
		}
	] as const;

	const steps = [
		{
			n: '01',
			title: 'Scegli il mezzo',
			text: 'Auto, furgone, 9 posti o macchinario: il prezzo “a partire da” è già in chiaro.'
		},
		{
			n: '02',
			title: 'Richiedi e conferma',
			text: 'Compili il modulo o ci chiami: rispondiamo con disponibilità e preventivo.'
		},
		{
			n: '03',
			title: 'Ritira e parti',
			text: 'Documenti pronti, mezzo igienizzato e pieno di servizi. Buon viaggio.'
		}
	];

	const darkInput =
		'w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white placeholder:text-sand-400 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none [color-scheme:dark]';
</script>

<Seo
	title="Arena Noleggi · Autonoleggio a Verona — auto, furgoni, 9 posti"
	description="Noleggio auto, furgoni, minibus 9 posti e macchinari edili a Verona e provincia. Prezzi chiari a partire da 29€/giorno, assicurazione inclusa e parcheggio aeroporto con navetta."
	jsonLd={localBusinessJsonLd()}
/>

<div id="top"></div>
<SiteHeader />

<main>
	<!-- ============================ HERO ============================ -->
	<section class="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-28 pb-16">
		<img
			src={img(photos.heroCar, 2000)}
			alt="Auto a noleggio Arena Noleggi Verona"
			class="absolute inset-0 h-full w-full object-cover opacity-60"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"></div>
		<div
			class="pointer-events-none absolute -top-32 right-0 size-[34rem] rounded-full bg-brand-600/25 blur-3xl"
		></div>

		<div class="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
			<div class="max-w-3xl">
				<div class="an-enter" style="animation-delay:0ms">
					<Badge variant="gold">
						<span class="size-1.5 rounded-full bg-gold-400 an-pulse"></span>
						Nuovo autonoleggio a Verona
					</Badge>
				</div>
				<h1
					class="an-enter mt-6 font-display text-5xl leading-[1.02] font-semibold text-white sm:text-6xl lg:text-7xl"
					style="animation-delay:80ms"
				>
					Muoviti in libertà<br />a <span class="an-text-gradient">Verona</span>.
				</h1>
				<p
					class="an-enter mt-6 max-w-xl text-lg text-pretty text-sand-200"
					style="animation-delay:160ms"
				>
					Auto, furgoni, minibus 9 posti e mezzi da lavoro. Prezzi chiari a partire da
					<strong class="text-white">29€ al giorno</strong>, assicurazione inclusa e assistenza
					sempre.
				</p>

				<!-- barra di ricerca -->
				<div
					class="an-enter mt-9 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-md"
					style="animation-delay:240ms"
				>
					<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-end">
						<label class="block">
							<span class="mb-1 block px-1 text-xs font-medium text-sand-300">Luogo di ritiro</span>
							<input class={darkInput} placeholder="Verona / Aeroporto" />
						</label>
						<label class="block">
							<span class="mb-1 block px-1 text-xs font-medium text-sand-300">Ritiro</span>
							<input type="date" class={darkInput} />
						</label>
						<label class="block">
							<span class="mb-1 block px-1 text-xs font-medium text-sand-300">Riconsegna</span>
							<input type="date" class={darkInput} />
						</label>
						<Button href="#flotta" size="lg" class="w-full lg:w-auto"
							><Icon name="car" size={18} /> Cerca</Button
						>
					</div>
				</div>

				<ul
					class="an-enter mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand-200"
					style="animation-delay:320ms"
				>
					{#each ['Senza carta di credito', 'Km inclusi', 'Ritiro in aeroporto', 'Disdetta gratuita'] as t (t)}
						<li class="flex items-center gap-1.5">
							<Icon name="check" size={16} class="text-gold-400" />{t}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<!-- ============================ USP ============================ -->
	<section class="border-b border-sand-200 bg-white">
		<div class="mx-auto grid max-w-7xl gap-px bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
			{#each usp as item, i (item.title)}
				<div use:reveal={{ delay: i * 90 }} class="flex flex-col gap-3 bg-white p-7">
					<div
						class="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
					>
						<Icon name={item.icon} size={22} />
					</div>
					<h3 class="text-lg text-ink">{item.title}</h3>
					<p class="text-sm leading-relaxed text-sand-600">{item.text}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- ============================ FLOTTA ============================ -->
	<section id="flotta" class="scroll-mt-24 py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div use:reveal class="flex flex-wrap items-end justify-between gap-6">
				<SectionHeading
					eyebrow="La flotta"
					title="Scegli il mezzo, vedi subito il prezzo"
					description="Modelli recenti per ogni esigenza. I prezzi sono “a partire da”: richiedi un preventivo per le tue date."
				/>
				<div class="flex flex-wrap gap-2">
					{#each filters as f (f.key)}
						<button
							onclick={() => (active = f.key)}
							class="rounded-full px-4 py-2 text-sm font-medium transition-all
								{active === f.key
								? 'bg-ink text-sand-50 shadow-sm'
								: 'border border-sand-300 text-sand-700 hover:border-ink hover:bg-sand-100'}"
						>
							{f.label}
						</button>
					{/each}
				</div>
			</div>

			<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each visibleVehicles as vehicle, i (vehicle.id)}
					<div use:reveal={{ delay: (i % 3) * 100 }}>
						<CarCard {vehicle} href="#contatti" />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ============================ SERVIZI ============================ -->
	<section id="servizi" class="scroll-mt-24 bg-sand-100/60 py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div use:reveal>
				<SectionHeading
					eyebrow="Cosa noleggiamo"
					title="Un partner unico per ogni spostamento"
					description="Dalla city car al mezzo da cantiere. Apri ogni servizio per i dettagli."
				/>
			</div>
			<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				{#each services as service, i (service.id)}
					<div use:reveal={{ delay: (i % 5) * 90 }}>
						<ServiceCard {service} />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ============================ PARCHEGGIO AEROPORTO ============================ -->
	<section id="parcheggio" class="scroll-mt-24 py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div
				class="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-sand-50 sm:px-12 lg:py-20"
			>
				<img
					src={img(photos.airport, 1600)}
					alt="Aeroporto di Verona"
					class="absolute inset-0 h-full w-full object-cover opacity-30"
				/>
				<div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"></div>
				<div class="relative grid gap-10 lg:grid-cols-2 lg:items-center">
					<div use:reveal>
						<Badge variant="gold"
							><Icon name="parking" size={14} /> Aeroporto Verona Villafranca</Badge
						>
						<h2 class="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
							Parti sereno: parcheggi qui, ti portiamo noi al volo
						</h2>
						<p class="mt-5 max-w-lg text-pretty text-sand-300">
							Lascia l’auto nel nostro parcheggio sicuro e sali sulla navetta: ti accompagniamo in
							aeroporto e veniamo a riprenderti al rientro.
						</p>
						<div class="mt-8 flex flex-wrap items-center gap-4">
							<Button href="/servizi/parcheggio-aeroporto" size="lg"
								>Scopri il servizio <Icon name="arrow-right" size={18} /></Button
							>
							<span class="flex items-center gap-2 text-sand-300"
								><span class="font-display text-2xl font-semibold text-white">6€</span> / giorno</span
							>
						</div>
					</div>
					<div use:reveal={{ delay: 120 }} class="grid gap-4 sm:grid-cols-2">
						{#each [{ icon: 'shield', t: 'Parcheggio recintato e sorvegliato' }, { icon: 'car', t: 'Navetta da/per i terminal' }, { icon: 'clock', t: 'Su prenotazione, anche presto' }, { icon: 'check', t: 'Paghi solo i giorni di sosta' }] as f (f.t)}
							<div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
								<Icon name={f.icon as 'shield'} size={24} class="text-gold-400" />
								<p class="mt-3 text-sm text-sand-200">{f.t}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================ PERCHÉ / ARENA ============================ -->
	<section id="perche" class="relative overflow-hidden bg-ink py-20 lg:py-28">
		<img
			src={img(photos.arena, 1800)}
			alt="Arena di Verona"
			class="absolute inset-0 h-full w-full object-cover opacity-25"
		/>
		<div class="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/85 to-ink"></div>
		<div class="relative mx-auto max-w-7xl px-5 sm:px-8">
			<div use:reveal class="mx-auto max-w-2xl text-center">
				<p class="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">Come funziona</p>
				<h2 class="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
					Noleggiare con Arena è semplice
				</h2>
			</div>
			<div class="mt-14 grid gap-6 md:grid-cols-3">
				{#each steps as step, i (step.n)}
					<div
						use:reveal={{ delay: i * 110 }}
						class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
					>
						<span class="font-display text-5xl font-semibold text-brand-400">{step.n}</span>
						<h3 class="mt-4 text-xl text-white">{step.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-sand-300">{step.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ============================ CONTATTI ============================ -->
	<section id="contatti" class="scroll-mt-24 py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
				<div use:reveal>
					<SectionHeading
						eyebrow="Contatti"
						title="Richiedi un preventivo"
						description="Raccontaci di cosa hai bisogno: ti rispondiamo con disponibilità e prezzo per le tue date."
					/>
					<ul class="mt-8 space-y-5">
						<li class="flex items-start gap-4">
							<span
								class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
								><Icon name="map-pin" size={20} /></span
							>
							<div>
								<p class="font-medium text-ink">Dove siamo</p>
								<p class="text-sm text-sand-600">{company.fullAddress}</p>
							</div>
						</li>
						<li class="flex items-start gap-4">
							<span
								class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
								><Icon name="phone" size={20} /></span
							>
							<div>
								<p class="font-medium text-ink">Telefono / WhatsApp</p>
								<p class="text-sm text-sand-600">{company.phone}</p>
							</div>
						</li>
						<li class="flex items-start gap-4">
							<span
								class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
								><Icon name="mail" size={20} /></span
							>
							<div>
								<p class="font-medium text-ink">Email</p>
								<p class="text-sm text-sand-600">{company.email}</p>
							</div>
						</li>
					</ul>
				</div>
				<div use:reveal={{ delay: 120 }}>
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</main>

<SiteFooter />
