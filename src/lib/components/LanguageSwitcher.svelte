<script lang="ts">
	import { locales, getLocale, setLocale, type Locale } from '$lib/paraglide/runtime';
	import Icon from './Icon.svelte';

	type Props = {
		/** stile chiaro per header trasparente su sfondo scuro */
		light?: boolean;
	};
	let { light = false }: Props = $props();

	let open = $state(false);
	const current = getLocale();

	const names: Record<string, string> = {
		it: 'Italiano',
		en: 'English',
		es: 'Español',
		de: 'Deutsch',
		fr: 'Français'
	};

	function choose(l: Locale) {
		open = false;
		if (l !== current) setLocale(l);
	}
</script>

<div class="relative">
	<button
		type="button"
		onclick={() => (open = !open)}
		aria-haspopup="listbox"
		aria-expanded={open}
		aria-label="Cambia lingua"
		class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors {light
			? 'text-sand-100 hover:bg-white/10 hover:text-white'
			: 'text-sand-700 hover:bg-sand-100 hover:text-ink'}"
	>
		<Icon name="globe" size={17} />
		<span class="uppercase">{current}</span>
		<Icon name="chevron-down" size={14} class="opacity-70" />
	</button>

	{#if open}
		<button
			class="fixed inset-0 z-40 cursor-default"
			aria-hidden="true"
			tabindex="-1"
			onclick={() => (open = false)}
		></button>
		<ul
			class="absolute right-0 z-50 mt-2 min-w-44 overflow-hidden rounded-xl border border-sand-200 bg-white py-1 shadow-xl shadow-sand-900/15"
			role="listbox"
		>
			{#each locales as l (l)}
				<li>
					<button
						type="button"
						role="option"
						aria-selected={l === current}
						onclick={() => choose(l)}
						class="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-sand-100 {l ===
						current
							? 'font-semibold text-ink'
							: 'text-sand-700'}"
					>
						<span class="flex items-center gap-2.5">
							<span class="w-6 text-xs font-semibold tracking-wide text-sand-400 uppercase"
								>{l}</span
							>
							{names[l]}
						</span>
						{#if l === current}
							<Icon name="check" size={16} class="text-brand-600" />
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
