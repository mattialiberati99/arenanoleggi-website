<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import Button from '$lib/components/Button.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import CarCard from '$lib/components/CarCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { img } from '$lib/images';
	import { services } from '$lib/data/fleet';
	import { company } from '$lib/company';

	let { data } = $props();
	const service = $derived(data.service);
	const related = $derived(data.related);
	const others = $derived(services.filter((s) => s.slug !== service.slug));
</script>

<svelte:head>
	<title>{service.title} a Verona · {company.brandName}</title>
	<meta name="description" content={service.description} />
</svelte:head>

<div id="top"></div>
<SiteHeader />

<main>
	<!-- HERO -->
	<section class="relative min-h-[70vh] overflow-hidden bg-ink pt-28 pb-16 sm:pt-36">
		<img
			src={img(service.image, 1800)}
			alt={service.title}
			class="absolute inset-0 h-full w-full object-cover opacity-55"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent"></div>

		<div class="relative mx-auto flex max-w-7xl flex-col justify-end px-5 sm:px-8">
			<nav class="mb-6 flex items-center gap-2 text-sm text-sand-300">
				<a href={resolve('/')} class="hover:text-white">Home</a>
				<span>/</span>
				<span class="text-sand-400">Servizi</span>
			</nav>
			<div class="an-enter" style="animation-delay:0ms">
				<Badge variant="gold"><Icon name={service.icon} size={14} /> {service.tagline}</Badge>
			</div>
			<h1
				class="an-enter mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl"
				style="animation-delay:80ms"
			>
				{service.title}
			</h1>
			<p
				class="an-enter mt-6 max-w-2xl text-lg text-pretty text-sand-200"
				style="animation-delay:160ms"
			>
				{service.lead}
			</p>
			<div class="an-enter mt-8 flex flex-wrap items-center gap-5" style="animation-delay:240ms">
				<Button href="#contatti" size="lg"
					>Richiedi preventivo <Icon name="arrow-right" size={18} /></Button
				>
				{#if service.fromPrice}
					<span class="text-sand-200">
						a partire da
						<span class="font-display text-2xl font-semibold text-white">€{service.fromPrice}</span>
						<span class="text-sm text-sand-300">{service.priceUnit}</span>
					</span>
				{/if}
			</div>
		</div>
	</section>

	<!-- VANTAGGI -->
	<section class="py-20 lg:py-24">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
				<div use:reveal>
					<SectionHeading eyebrow="Perché sceglierci" title="Tutto incluso, senza sorprese" />
					<ul class="mt-8 space-y-4">
						{#each service.features as f (f)}
							<li class="flex items-start gap-3">
								<span
									class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600"
								>
									<Icon name="check" size={15} />
								</span>
								<span class="text-sand-800">{f}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div use:reveal={{ delay: 120 }} class="rounded-3xl border border-sand-200 bg-sand-50 p-8">
					<h3 class="font-display text-xl text-ink">Nel noleggio trovi</h3>
					<ul class="mt-5 space-y-3">
						{#each service.includes as inc (inc)}
							<li
								class="flex items-center gap-3 border-b border-sand-200 pb-3 text-sand-700 last:border-0 last:pb-0"
							>
								<Icon name="shield" size={18} class="text-brand-600" />
								{inc}
							</li>
						{/each}
					</ul>
					<div class="mt-6">
						<Button href="#contatti" class="w-full">Chiedi disponibilità</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- VEICOLI CORRELATI -->
	{#if related.length}
		<section class="bg-sand-100/60 py-20 lg:py-24">
			<div class="mx-auto max-w-7xl px-5 sm:px-8">
				<div use:reveal>
					<SectionHeading
						eyebrow="La flotta"
						title="Modelli disponibili"
						description="Prezzi “a partire da”. Richiedi un preventivo per le tue date."
					/>
				</div>
				<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each related as vehicle, i (vehicle.id)}
						<div use:reveal={{ delay: (i % 3) * 100 }}>
							<CarCard {vehicle} href="#contatti" />
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CONTATTI -->
	<section id="contatti" class="scroll-mt-24 py-20 lg:py-24">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
				<div use:reveal>
					<SectionHeading
						eyebrow="Contatti"
						title="Richiedi un preventivo"
						description={`Parlaci della tua esigenza di ${service.title.toLowerCase()}: ti rispondiamo con disponibilità e prezzo.`}
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
					</ul>
				</div>
				<div use:reveal={{ delay: 120 }}>
					<ContactForm preselect={service.slug} />
				</div>
			</div>
		</div>
	</section>

	<!-- ALTRI SERVIZI -->
	<section class="bg-sand-100/60 py-20 lg:py-24">
		<div class="mx-auto max-w-7xl px-5 sm:px-8">
			<div use:reveal>
				<SectionHeading eyebrow="Esplora" title="Altri servizi" />
			</div>
			<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each others as s, i (s.id)}
					<div use:reveal={{ delay: (i % 4) * 90 }}>
						<ServiceCard service={s} />
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<SiteFooter />
