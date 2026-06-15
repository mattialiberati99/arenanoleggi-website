<script lang="ts">
	import { resolve } from '$app/paths';
	import Field from './Field.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import { services } from '$lib/data/fleet';

	type Props = {
		/** servizio preselezionato nella tendina */
		preselect?: string;
	};
	let { preselect }: Props = $props();

	let submitted = $state(false);
	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
	}

	const inputCls =
		'w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-ink placeholder:text-sand-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none';
</script>

<div class="rounded-3xl border border-sand-200 bg-white p-6 shadow-xl shadow-sand-900/5 sm:p-8">
	{#if submitted}
		<div class="flex h-full min-h-72 flex-col items-center justify-center text-center">
			<div
				class="flex size-16 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600"
			>
				<Icon name="check" size={32} />
			</div>
			<h3 class="mt-5 font-display text-2xl text-ink">Richiesta inviata!</h3>
			<p class="mt-2 max-w-sm text-sand-600">
				Grazie, ti ricontattiamo al più presto. (Demo: il modulo non è ancora collegato a un
				backend.)
			</p>
			<button
				class="mt-5 text-sm font-medium text-brand-600 hover:underline"
				onclick={() => (submitted = false)}
			>
				Invia un’altra richiesta
			</button>
		</div>
	{:else}
		<form class="grid gap-5 sm:grid-cols-2" onsubmit={handleSubmit}>
			<Field id="cf-nome" label="Nome e cognome" required>
				<input id="cf-nome" required class={inputCls} placeholder="Mario Rossi" />
			</Field>
			<Field id="cf-tel" label="Telefono" required>
				<input id="cf-tel" required type="tel" class={inputCls} placeholder="+39 …" />
			</Field>
			<Field id="cf-email" label="Email" class="sm:col-span-2">
				<input id="cf-email" type="email" class={inputCls} placeholder="mario@esempio.it" />
			</Field>
			<Field id="cf-serv" label="Servizio">
				<select id="cf-serv" class={inputCls}>
					{#each services as s (s.id)}
						<option selected={s.slug === preselect}>{s.title}</option>
					{/each}
				</select>
			</Field>
			<Field id="cf-data" label="Data ritiro">
				<input id="cf-data" type="date" class={inputCls} />
			</Field>
			<Field id="cf-msg" label="Messaggio" class="sm:col-span-2">
				<textarea id="cf-msg" rows="3" class={inputCls} placeholder="Date, esigenze, domande…"
				></textarea>
			</Field>
			<div class="sm:col-span-2">
				<Button type="submit" size="lg" class="w-full">
					Invia richiesta <Icon name="arrow-right" size={18} />
				</Button>
				<p class="mt-3 text-center text-xs text-sand-500">
					Inviando accetti la <a href={resolve('/privacy')} class="underline hover:text-ink"
						>Privacy Policy</a
					>.
				</p>
			</div>
		</form>
	{/if}
</div>
