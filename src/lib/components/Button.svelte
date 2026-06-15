<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		variant?: Variant;
		size?: Size;
		href?: string;
		class?: string;
		children: Snippet;
	} & HTMLButtonAttributes &
		HTMLAnchorAttributes;

	let {
		variant = 'primary',
		size = 'md',
		href,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 disabled:pointer-events-none disabled:opacity-50';

	const variants: Record<Variant, string> = {
		primary: 'bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:scale-[0.98]',
		secondary: 'bg-ink text-sand-50 hover:bg-sand-900 active:scale-[0.98]',
		outline: 'border border-sand-300 bg-transparent text-ink hover:border-ink hover:bg-sand-100',
		ghost: 'bg-transparent text-ink hover:bg-sand-100'
	};

	const sizes: Record<Size, string> = {
		sm: 'h-9 px-4 text-sm',
		md: 'h-11 px-6 text-[0.95rem]',
		lg: 'h-13 px-8 text-base'
	};

	let classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<!-- Primitiva generica: href può essere rotta interna, ancora #, tel:, mailto: o URL esterno -->
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} class={classes} {...rest}>
		{@render children()}
	</a>
{:else}
	<button class={classes} {...rest}>
		{@render children()}
	</button>
{/if}
