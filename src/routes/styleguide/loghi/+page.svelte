<script lang="ts">
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
	import Badge from '$lib/components/Badge.svelte';
</script>

<svelte:head>
	<title>Concept logo · Arena Noleggi</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- ===================== MARK SNIPPETS ===================== -->

<!-- A · Arco + strada in prospettiva (attuale) -->
{#snippet markRoad(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
		<path
			d="M12 54 L12 28 A20 20 0 0 1 52 28 L52 54"
			stroke="currentColor"
			stroke-width="6.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path d="M22 54 L42 54 L36 26 L28 26 Z" fill="currentColor" opacity="0.22" />
		<path
			d="M32 53 L32 27"
			stroke="currentColor"
			stroke-width="2.6"
			stroke-linecap="round"
			stroke-dasharray="0.2 5.4"
			opacity="0.9"
		/>
	</svg>
{/snippet}

<!-- B · Monogramma "A" come arco -->
{#snippet markMonogram(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
		<path
			d="M16 52 L26 18 A9 9 0 0 1 38 18 L48 52"
			stroke="currentColor"
			stroke-width="6.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path d="M23 39 L41 39" stroke="currentColor" stroke-width="6.8" stroke-linecap="round" />
	</svg>
{/snippet}

<!-- C · Archi concentrici (anfiteatro) -->
{#snippet markTiers(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
		<path
			d="M9 52 L9 31 A23 23 0 0 1 55 31 L55 52"
			stroke="currentColor"
			stroke-width="4.6"
			stroke-linecap="round"
		/>
		<path
			d="M18 52 L18 33 A14 14 0 0 1 46 33 L46 52"
			stroke="currentColor"
			stroke-width="4.6"
			stroke-linecap="round"
			opacity="0.75"
		/>
		<path
			d="M27 52 L27 37 A5 5 0 0 1 37 37 L37 52"
			stroke="currentColor"
			stroke-width="4.6"
			stroke-linecap="round"
			opacity="0.5"
		/>
		<path d="M7 52 L57 52" stroke="currentColor" stroke-width="4.6" stroke-linecap="round" />
	</svg>
{/snippet}

<!-- D · Arco + chevron (movimento / "passa e parti") -->
{#snippet markChevron(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
		<path
			d="M15 52 L15 31 A17 17 0 0 1 49 31 L49 52"
			stroke="currentColor"
			stroke-width="6"
			stroke-linecap="round"
			stroke-linejoin="round"
			opacity="0.45"
		/>
		<path
			d="M26 28 L37 39 L26 50"
			stroke="currentColor"
			stroke-width="6.4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}

<!-- ===================== WORDMARK ===================== -->
{#snippet wordmark(scale: number)}
	<span class="font-display tracking-tight" style="font-size: {scale}px; line-height: 1;">
		<span class="font-semibold">Arena</span><span class="font-normal"> Noleggi</span>
	</span>
{/snippet}

<!-- ===================== CONCEPT BLOCK ===================== -->
{#snippet concept(id: string, name: string, desc: string, mark: Snippet<[number]>)}
	<div class="overflow-hidden rounded-3xl border border-sand-200 bg-white">
		<div class="flex items-center justify-between border-b border-sand-100 px-6 py-4">
			<div class="flex items-center gap-3">
				<span class="font-display text-lg font-semibold text-ink">{id}</span>
				<h3 class="text-sm text-sand-600">{name}</h3>
			</div>
			<!-- anteprima favicon -->
			<div class="flex size-9 items-center justify-center rounded-lg bg-brand-600 text-white">
				{@render mark(20)}
			</div>
		</div>

		<!-- su chiaro -->
		<div class="flex items-center gap-4 px-6 py-8">
			<span class="text-brand-600">{@render mark(56)}</span>
			<span class="text-ink">{@render wordmark(28)}</span>
		</div>

		<!-- su scuro -->
		<div class="flex items-center gap-4 bg-ink px-6 py-8">
			<span class="text-sand-50">{@render mark(56)}</span>
			<span class="text-sand-50">{@render wordmark(28)}</span>
		</div>

		<p class="px-6 py-4 text-sm leading-relaxed text-sand-700">{desc}</p>
	</div>
{/snippet}

<div class="min-h-screen bg-sand-50">
	<header class="border-b border-sand-200/70 bg-sand-50/80 backdrop-blur-md">
		<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
			<Logo size={32} />
			<div class="flex items-center gap-3">
				<Badge variant="gold">Concept logo</Badge>
				<a href={resolve('/styleguide')} class="text-sm text-sand-600 hover:text-ink"
					>← Brand guidelines</a
				>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-5xl px-6 py-16">
		<p class="mb-3 text-xs font-semibold tracking-[0.25em] text-brand-600 uppercase">
			Scelta del marchio
		</p>
		<h1 class="max-w-2xl font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
			Quattro direzioni per il logo
		</h1>
		<p class="mt-5 max-w-2xl text-lg text-pretty text-sand-700">
			Stesso wordmark (Fraunces), quattro simboli diversi tutti legati all'Arena di Verona. Ognuno è
			mostrato su chiaro, su scuro e in formato favicon. Dimmi quale preferisci (o quale mix) e lo
			rifinisco e applico a tutto il sito.
		</p>

		<div class="mt-12 grid gap-6 lg:grid-cols-2">
			{@render concept(
				'A',
				'Arco + strada',
				'Un arco dell’Arena con una strada in prospettiva che fugge verso l’interno. Racconta luogo (Arena) e viaggio (noleggio) insieme. Più narrativo e caldo.',
				markRoad
			)}
			{@render concept(
				'B',
				'Monogramma “A” arco',
				'La lettera A costruita come un arco con la traversa. Iconico, geometrico, molto riconoscibile anche piccolissimo. Il più “logo da marchio”.',
				markMonogram
			)}
			{@render concept(
				'C',
				'Archi concentrici',
				'I tre ordini di arcate dell’anfiteatro, stilizzati e concentrici. Sapore architettonico e premium, da “azienda solida”. Ottimo per timbri ed emblemi.',
				markTiers
			)}
			{@render concept(
				'D',
				'Arco + chevron',
				'Un arco con dentro un chevron che punta avanti: movimento, “entra e parti”. Il più dinamico e moderno, adatto a un brand di mobilità.',
				markChevron
			)}
		</div>

		<div class="mt-12 rounded-2xl border border-sand-200 bg-white p-6">
			<h2 class="text-lg text-ink">Come scegliere</h2>
			<ul class="mt-3 space-y-2 text-sm text-sand-700">
				<li>
					<strong class="text-ink">A</strong> — se vuoi calore e racconto (consigliato per il tono “locale”).
				</li>
				<li>
					<strong class="text-ink">B</strong> — se vuoi il massimo della riconoscibilità e semplicità.
				</li>
				<li><strong class="text-ink">C</strong> — se punti su immagine premium/istituzionale.</li>
				<li><strong class="text-ink">D</strong> — se vuoi energia e modernità/mobilità.</li>
			</ul>
		</div>
	</main>
</div>
