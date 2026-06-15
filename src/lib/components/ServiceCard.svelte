<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Service } from '$lib/data/fleet';
	import { img } from '$lib/images';
	import Icon from './Icon.svelte';

	type Props = {
		service: Service;
	};

	let { service }: Props = $props();
</script>

<a
	href={resolve(`/servizi/${service.slug}`)}
	class="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-ink shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sand-900/20"
>
	<img
		src={img(service.image, 700)}
		alt={service.title}
		loading="lazy"
		class="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5"></div>

	<div class="relative p-6">
		<div
			class="mb-3 flex size-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur"
		>
			<Icon name={service.icon} size={24} />
		</div>
		<h3 class="font-display text-xl font-semibold text-white">{service.title}</h3>
		<p class="mt-1 text-sm text-sand-300">{service.tagline}</p>

		<div class="mt-4 flex items-center justify-between">
			{#if service.fromPrice}
				<p class="text-sm text-sand-300">
					da <span class="font-display text-lg font-semibold text-white">€{service.fromPrice}</span>
					<span class="text-xs">{service.priceUnit}</span>
				</p>
			{:else}
				<span class="text-sm text-sand-300">Su preventivo</span>
			{/if}
			<span
				class="inline-flex size-9 items-center justify-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:translate-x-1"
			>
				<Icon name="arrow-right" size={18} />
			</span>
		</div>
	</div>
</a>
