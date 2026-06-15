<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		label: string;
		id: string;
		hint?: string;
		required?: boolean;
		class?: string;
		children: Snippet;
	};

	let { label, id, hint, required = false, class: className = '', children }: Props = $props();
</script>

<div class={className}>
	<label for={id} class="mb-1.5 block text-sm font-medium text-ink">
		{label}{#if required}<span class="text-brand-600">&nbsp;*</span>{/if}
	</label>
	{@render children()}
	{#if hint}
		<p class="mt-1 text-xs text-sand-500">{hint}</p>
	{/if}
</div>
