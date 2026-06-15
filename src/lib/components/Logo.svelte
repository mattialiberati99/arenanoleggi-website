<script lang="ts">
	/**
	 * Logo Arena Noleggi — l'Anfiteatro Arena di Verona stilizzato.
	 * Facciata su due ordini di arcate + il frammento più alto ("l'Ala") a sinistra
	 * + podio a gradoni. Su placca con gradiente Rosso Verona, filetto e cornice oro.
	 */
	type Props = {
		variant?: 'lockup' | 'mark';
		/** altezza dell'emblema in px */
		size?: number;
		/** monocromatico (eredita currentColor) — per sfondi scuri / stampa */
		mono?: boolean;
		tagline?: boolean;
		class?: string;
	};

	let {
		variant = 'lockup',
		size = 44,
		mono = false,
		tagline = true,
		class: className = ''
	}: Props = $props();

	const uid = $props.id();
	const gradId = `an-tile-${uid}`;
	const shadeId = `an-shade-${uid}`;

	const stone = $derived(mono ? 'currentColor' : '#faf6ef');
	const goldc = $derived(mono ? 'currentColor' : '#e3a93f');

	// Dimensioni del wordmark legate alla grandezza dell'emblema
	const wordSize = $derived(size * 0.62);
	const tagSize = $derived(size * 0.215);
	const tagGap = $derived(size * 0.26);

	// Facciata: blocco esterno + archi (fori) su due ordini, fill-rule evenodd
	const facade =
		'M10 16 H38 V35 H10 Z' +
		// ordine inferiore
		'M12.75 35 L12.75 29 A2.25 2.25 0 0 1 17.25 29 L17.25 35 Z' +
		'M18.75 35 L18.75 29 A2.25 2.25 0 0 1 23.25 29 L23.25 35 Z' +
		'M24.75 35 L24.75 29 A2.25 2.25 0 0 1 29.25 29 L29.25 35 Z' +
		'M30.75 35 L30.75 29 A2.25 2.25 0 0 1 35.25 29 L35.25 35 Z' +
		// ordine superiore
		'M12.75 24 L12.75 20 A2.25 2.25 0 0 1 17.25 20 L17.25 24 Z' +
		'M18.75 24 L18.75 20 A2.25 2.25 0 0 1 23.25 20 L23.25 24 Z' +
		'M24.75 24 L24.75 20 A2.25 2.25 0 0 1 29.25 20 L29.25 24 Z' +
		'M30.75 24 L30.75 20 A2.25 2.25 0 0 1 35.25 20 L35.25 24 Z';

	// "Ala": frammento più alto a sinistra, con due aperture sovrapposte
	const ala =
		'M9.5 7 H15.5 V16 H9.5 Z' +
		'M10.8 15 L10.8 12.3 A1.7 1.7 0 0 1 14.2 12.3 L14.2 15 Z' +
		'M11.3 11 L11.3 9.6 A1.2 1.2 0 0 1 13.7 9.6 L13.7 11 Z';
</script>

<span class="inline-flex items-center gap-3 {className}">
	<svg
		width={size}
		height={size}
		viewBox="0 0 48 48"
		fill="none"
		role="img"
		aria-label="Arena Noleggi"
		class="shrink-0"
	>
		{#if !mono}
			<defs>
				<linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stop-color="#b8431f" />
					<stop offset="0.55" stop-color="#8f3219" />
					<stop offset="1" stop-color="#561f12" />
				</linearGradient>
				<linearGradient id={shadeId} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stop-color="#ffffff" stop-opacity="0.18" />
					<stop offset="0.5" stop-color="#ffffff" stop-opacity="0" />
				</linearGradient>
			</defs>
			<rect width="48" height="48" rx="12" fill="url(#{gradId})" />
			<rect width="48" height="48" rx="12" fill="url(#{shadeId})" />
			<rect
				x="1.25"
				y="1.25"
				width="45.5"
				height="45.5"
				rx="10.75"
				fill="none"
				stroke="#e0a33b"
				stroke-opacity="0.55"
				stroke-width="1"
			/>
		{/if}

		<!-- facciata anfiteatro -->
		<path d={facade} fill={stone} fill-rule="evenodd" clip-rule="evenodd" />
		<!-- l'Ala -->
		<path d={ala} fill={stone} fill-rule="evenodd" clip-rule="evenodd" />
		<!-- cornice oro tra i due ordini -->
		<rect
			x="11"
			y="25"
			width="26"
			height="0.9"
			rx="0.4"
			fill={goldc}
			opacity={mono ? '0.55' : '1'}
		/>
		<!-- podio a gradoni -->
		<rect x="9" y="35" width="30" height="1.8" rx="0.5" fill={stone} />
		<rect x="7.5" y="36.8" width="33" height="2" rx="0.6" fill={stone} />
	</svg>

	{#if variant === 'lockup'}
		<span class="flex flex-col" style="line-height:1.05">
			<span
				class="font-display font-semibold tracking-[-0.01em] {mono ? 'text-current' : 'text-ink'}"
				style="font-size:{wordSize}px"
			>
				Arena Noleggi
			</span>
			{#if tagline}
				<span
					class="flex items-center font-semibold uppercase {mono
						? 'text-current opacity-70'
						: 'text-sand-500'}"
					style="font-size:{tagSize}px; letter-spacing:0.22em; margin-top:{tagGap}px; gap:{tagSize *
						0.55}px"
				>
					Autonoleggio
					<span
						class="inline-block rounded-full bg-gold-500"
						style="width:{tagSize * 0.45}px; height:{tagSize * 0.45}px"
					></span>
					Verona
				</span>
			{/if}
		</span>
	{/if}
</span>
