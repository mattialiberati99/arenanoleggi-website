<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import { company } from '$lib/company';

	let scrolled = $state(false);
	let open = $state(false);

	const links = [
		{ slug: 'noleggio-auto', label: 'Auto' },
		{ slug: 'noleggio-furgoni', label: 'Furgoni' },
		{ slug: 'noleggio-9-posti', label: '9 posti' },
		{ slug: 'noleggio-macchinari-edili', label: 'Macchinari' },
		{ slug: 'parcheggio-aeroporto', label: 'Parcheggio aeroporto' }
	];

	const tel = `tel:${company.phone.replace(/\s/g, '')}`;

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300
		{scrolled
		? 'border-b border-sand-200/70 bg-sand-50/90 py-2 shadow-sm shadow-sand-900/5 backdrop-blur-md'
		: 'border-b border-white/10 py-4'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
		<a
			href={resolve('/')}
			class="transition-transform hover:scale-[1.02]"
			aria-label="Arena Noleggi — home"
		>
			<Logo size={scrolled ? 38 : 42} mono={!scrolled} class={scrolled ? '' : 'text-white'} />
		</a>

		<!-- nav desktop -->
		<nav class="hidden items-center gap-1 lg:flex">
			{#each links as link (link.slug)}
				<a
					href={resolve(`/servizi/${link.slug}`)}
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors {scrolled
						? 'text-sand-700 hover:bg-sand-100 hover:text-ink'
						: 'text-sand-100 hover:bg-white/10 hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- azioni -->
		<div class="hidden items-center gap-3 lg:flex">
			<a
				href={tel}
				class="flex items-center gap-2 text-sm font-semibold transition-colors {scrolled
					? 'text-ink hover:text-brand-600'
					: 'text-white hover:text-gold-400'}"
			>
				<Icon name="phone" size={16} />
				Chiama
			</a>
			<Button href="#contatti" size="sm">Richiedi preventivo</Button>
		</div>

		<!-- toggle mobile -->
		<button
			class="flex size-10 items-center justify-center rounded-full transition-colors lg:hidden {scrolled
				? 'text-ink hover:bg-sand-100'
				: 'text-white hover:bg-white/10'}"
			aria-label={open ? 'Chiudi menu' : 'Apri menu'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			>
				{#if open}
					<path d="M6 6l12 12M18 6l-12 12" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- menu mobile -->
	{#if open}
		<nav
			class="mx-4 mt-2 rounded-2xl border border-sand-200 bg-sand-50 p-3 shadow-lg shadow-sand-900/10 lg:hidden"
		>
			{#each links as link (link.slug)}
				<a
					href={resolve(`/servizi/${link.slug}`)}
					class="block rounded-xl px-4 py-3 font-medium text-ink transition-colors hover:bg-sand-100"
					onclick={() => (open = false)}
				>
					{link.label}
				</a>
			{/each}
			<div class="mt-2 px-1">
				<Button href="#contatti" class="w-full" onclick={() => (open = false)}
					>Richiedi preventivo</Button
				>
			</div>
		</nav>
	{/if}
</header>
