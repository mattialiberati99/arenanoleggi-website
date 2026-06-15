<script lang="ts">
	/** Icone in stile linea (currentColor). Aggiungere voci a `paths` quando serve. */
	type IconName =
		| 'car'
		| 'van'
		| 'minibus'
		| 'machinery'
		| 'parking'
		| 'users'
		| 'gear'
		| 'fuel'
		| 'luggage'
		| 'door'
		| 'arrow-right'
		| 'check'
		| 'phone'
		| 'mail'
		| 'whatsapp'
		| 'map-pin'
		| 'calendar'
		| 'shield'
		| 'clock'
		| 'star'
		| 'globe'
		| 'chevron-down';

	type Props = {
		name: IconName;
		size?: number;
		class?: string;
		strokeWidth?: number;
	};

	let { name, size = 24, class: className = '', strokeWidth = 1.75 }: Props = $props();

	const paths: Record<IconName, string> = {
		car: 'M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14m-14 0v4m14-4v4M5 17h2m10 0h2M7.5 13.5h.01M16.5 13.5h.01',
		van: 'M3 7h11v10H3zM14 10h3.5l2.5 3v4H14zM6 17a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z',
		minibus:
			'M4 6h16v9H4zM4 15h16M7 18a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm7 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM8 6v9M12 6v9M16 6v9',
		machinery:
			'M3 18h7v-3H4l2-5h4l3 4 5 1v3h-2M10 18h11M6.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
		parking: 'M6 20V4h6a4 4 0 0 1 0 8H6m0 0',
		users:
			'M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm13 9v-1a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75',
		gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
		fuel: 'M3 22h12V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18zM15 9h2.5A1.5 1.5 0 0 1 19 10.5V17a2 2 0 0 0 2 2 2 2 0 0 0 2-2V8l-4-4M6 7h6',
		luggage:
			'M8 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M5 5h14a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1zM9 9v9m6-9v9',
		door: 'M13 4h3a1 1 0 0 1 1 1v15M3 21h14M6 21V4a1 1 0 0 1 .8-.98l5-1A1 1 0 0 1 13 3v18M9.5 12v.5',
		'arrow-right': 'M5 12h14M13 6l6 6-6 6',
		check: 'M20 6 9 17l-5-5',
		phone:
			'M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
		mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7',
		whatsapp:
			'M3 21l1.65-4.8a8 8 0 1 1 3.4 3.42L3 21zM9 8.5c.2 1 .7 2 1.5 2.8.8.8 1.8 1.3 2.8 1.5l1-1.3 1.7.7c.1 1-.6 1.8-1.6 1.8a6 6 0 0 1-5.6-5.6c0-1 .8-1.7 1.8-1.6l.7 1.7-1.3 1z',
		'map-pin': 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
		calendar:
			'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
		shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
		clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
		star: 'M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 17.8 5.4 21.2 6.7 14.2 1.7 9.4l7-.9z',
		globe:
			'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.5 9h17M3.5 15h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',
		'chevron-down': 'M6 9l6 6 6-6'
	};
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	class={className}
>
	<path d={paths[name]} />
</svg>
