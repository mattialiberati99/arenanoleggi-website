<script lang="ts">
	import { page } from '$app/state';
	import {
		locales,
		localizeHref,
		deLocalizeUrl,
		getLocale,
		baseLocale
	} from '$lib/paraglide/runtime';
	import { SITE_URL, DEFAULT_OG_IMAGE, ogLocaleMap } from '$lib/seo';
	import { company } from '$lib/company';

	type Props = {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article';
		noindex?: boolean;
		/** oggetto/array JSON-LD da iniettare */
		jsonLd?: unknown;
	};

	let {
		title,
		description,
		image = DEFAULT_OG_IMAGE,
		type = 'website',
		noindex = false,
		jsonLd
	}: Props = $props();

	// Percorso de-localizzato (senza prefisso lingua) per costruire canonical + alternate
	const basePath = $derived(deLocalizeUrl(page.url).pathname);
	const canonical = $derived(SITE_URL + localizeHref(basePath, { locale: getLocale() }));
	const alternates = $derived(
		locales.map((l) => ({ hreflang: l, href: SITE_URL + localizeHref(basePath, { locale: l }) }))
	);
	const xDefault = $derived(SITE_URL + localizeHref(basePath, { locale: baseLocale }));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<meta name="robots" content="index, follow" />
	{/if}

	<link rel="canonical" href={canonical} />
	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={xDefault} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={company.brandName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={ogLocaleMap[getLocale()] ?? 'it_IT'} />
	{#each locales.filter((l) => l !== getLocale()) as l (l)}
		<meta property="og:locale:alternate" content={ogLocaleMap[l]} />
	{/each}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if jsonLd}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD costruito da dati interni, nessun input utente -->
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + `script>`}
	{/if}
</svelte:head>
