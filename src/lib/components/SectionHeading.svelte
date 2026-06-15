<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
		class?: string;
	};

	let { eyebrow, title, description, align = 'left', class: className = '' }: Props = $props();
</script>

<div class="{align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} {className}">
	{#if eyebrow}
		<p class="mb-3 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">
			{eyebrow}
		</p>
	{/if}
	<h2 class="text-3xl text-balance text-ink sm:text-4xl">{title}</h2>
	{#if description}
		<p class="mt-4 text-lg text-pretty text-sand-700">{description}</p>
	{/if}
</div>
