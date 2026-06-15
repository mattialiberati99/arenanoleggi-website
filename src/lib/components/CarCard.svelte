<script lang="ts">
	import type { Vehicle } from '$lib/data/fleet';
	import { img } from '$lib/images';
	import Icon from './Icon.svelte';
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';

	type Props = {
		vehicle: Vehicle;
		href?: string;
	};

	let { vehicle, href = '#richiedi' }: Props = $props();
</script>

<article
	class="group flex flex-col overflow-hidden rounded-2xl border border-sand-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sand-900/15"
>
	<!-- Foto -->
	<div class="relative aspect-[16/10] overflow-hidden bg-sand-200">
		<img
			src={img(vehicle.image, 800)}
			alt={vehicle.name}
			loading="lazy"
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"></div>
		<div class="absolute top-3 left-3">
			<Badge variant="brand">{vehicle.categoryLabel}</Badge>
		</div>
		{#if vehicle.available}
			<div class="absolute top-3 right-3">
				<span
					class="inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur"
				>
					<span class="size-1.5 rounded-full bg-leaf-500"></span> Disponibile
				</span>
			</div>
		{/if}
		<h3 class="absolute bottom-3 left-4 font-display text-2xl font-semibold text-white drop-shadow">
			{vehicle.name}
		</h3>
	</div>

	<!-- Corpo -->
	<div class="flex flex-1 flex-col p-5">
		{#if vehicle.highlight}
			<p class="text-sm font-medium text-brand-600">{vehicle.highlight}</p>
		{/if}

		<ul class="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-sand-700">
			<li class="flex items-center gap-2">
				<Icon name="users" size={16} class="text-sand-400" />{vehicle.seats} posti
			</li>
			<li class="flex items-center gap-2">
				<Icon name="gear" size={16} class="text-sand-400" />{vehicle.transmission}
			</li>
			<li class="flex items-center gap-2">
				<Icon name="fuel" size={16} class="text-sand-400" />{vehicle.fuel}
			</li>
			{#if vehicle.luggage}
				<li class="flex items-center gap-2">
					<Icon name="luggage" size={16} class="text-sand-400" />{vehicle.luggage} bagagli
				</li>
			{/if}
		</ul>

		<div class="mt-5 flex items-end justify-between border-t border-sand-100 pt-4">
			<div>
				<p class="text-xs text-sand-500">a partire da</p>
				<p class="font-display text-2xl font-semibold text-ink">
					€{vehicle.fromPrice}<span class="text-sm font-normal text-sand-500"
						>/{vehicle.priceUnit}</span
					>
				</p>
			</div>
			<Button {href} size="sm">Richiedi</Button>
		</div>
	</div>
</article>
