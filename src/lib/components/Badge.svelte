<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'brand' | 'neutral' | 'gold' | 'available';

	type Props = {
		variant?: Variant;
		class?: string;
		children: Snippet;
	};

	let { variant = 'neutral', class: className = '', children }: Props = $props();

	const variants: Record<Variant, string> = {
		brand: 'bg-brand-50 text-brand-700 ring-1 ring-brand-200',
		neutral: 'bg-sand-100 text-sand-700 ring-1 ring-sand-200',
		gold: 'bg-gold-400/15 text-gold-600 ring-1 ring-gold-400/40',
		available: 'bg-leaf-500/12 text-leaf-600 ring-1 ring-leaf-500/30'
	};
</script>

<span
	class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide {variants[
		variant
	]} {className}"
>
	{@render children()}
</span>
