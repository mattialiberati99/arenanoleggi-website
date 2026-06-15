<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';

	const KEY = 'an-cookie-consent';

	let visible = $state(false);
	let expanded = $state(false);
	let analytics = $state(true);
	let marketing = $state(false);

	function apply(a: boolean, m: boolean) {
		window.gtag?.('consent', 'update', {
			analytics_storage: a ? 'granted' : 'denied',
			ad_storage: m ? 'granted' : 'denied',
			ad_user_data: m ? 'granted' : 'denied',
			ad_personalization: m ? 'granted' : 'denied'
		});
	}

	function persist(a: boolean, m: boolean) {
		try {
			localStorage.setItem(KEY, JSON.stringify({ analytics: a, marketing: m, ts: Date.now() }));
		} catch {
			/* localStorage non disponibile */
		}
	}

	function decide(a: boolean, m: boolean) {
		apply(a, m);
		persist(a, m);
		visible = false;
		expanded = false;
	}

	const acceptAll = () => decide(true, true);
	const rejectAll = () => decide(false, false);
	const savePrefs = () => decide(analytics, marketing);

	function openPreferences() {
		try {
			const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
			if (saved) {
				analytics = !!saved.analytics;
				marketing = !!saved.marketing;
			}
		} catch {
			/* ignora */
		}
		expanded = true;
		visible = true;
	}

	onMount(() => {
		let saved = null;
		try {
			saved = JSON.parse(localStorage.getItem(KEY) || 'null');
		} catch {
			/* ignora */
		}
		if (!saved) visible = true;
		window.addEventListener('open-cookie-preferences', openPreferences);
		return () => window.removeEventListener('open-cookie-preferences', openPreferences);
	});
</script>

{#if visible}
	<div class="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
		<div
			class="an-enter mx-auto max-w-2xl rounded-2xl border border-sand-200 bg-white/95 p-5 shadow-2xl shadow-ink/20 backdrop-blur-md sm:p-6"
			role="dialog"
			aria-modal="false"
			aria-label="Preferenze cookie"
		>
			<div class="flex items-start gap-3">
				<span
					class="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
				>
					<Icon name="shield" size={18} />
				</span>
				<div>
					<h2 class="font-display text-lg font-semibold text-ink">Rispettiamo la tua privacy</h2>
					<p class="mt-1 text-sm leading-relaxed text-sand-600">
						Usiamo cookie tecnici necessari e, con il tuo consenso, cookie di analisi e marketing.
						Dettagli nella
						<a href={resolve('/cookie')} class="font-medium text-brand-600 underline"
							>Cookie Policy</a
						>.
					</p>
				</div>
			</div>

			{#if expanded}
				<div class="mt-4 space-y-2">
					<div class="flex items-center justify-between rounded-xl bg-sand-50 px-4 py-3">
						<div>
							<p class="text-sm font-medium text-ink">Necessari</p>
							<p class="text-xs text-sand-500">Indispensabili per il funzionamento del sito.</p>
						</div>
						<span class="text-xs font-semibold text-sand-400">Sempre attivi</span>
					</div>
					<label
						class="flex cursor-pointer items-center justify-between rounded-xl bg-sand-50 px-4 py-3"
					>
						<div>
							<p class="text-sm font-medium text-ink">Analitici</p>
							<p class="text-xs text-sand-500">
								Statistiche anonime di utilizzo (Google Analytics).
							</p>
						</div>
						<input
							type="checkbox"
							bind:checked={analytics}
							class="size-5 rounded border-sand-300 text-brand-600 focus:ring-brand-500"
						/>
					</label>
					<label
						class="flex cursor-pointer items-center justify-between rounded-xl bg-sand-50 px-4 py-3"
					>
						<div>
							<p class="text-sm font-medium text-ink">Marketing</p>
							<p class="text-xs text-sand-500">Misurazione campagne e annunci personalizzati.</p>
						</div>
						<input
							type="checkbox"
							bind:checked={marketing}
							class="size-5 rounded border-sand-300 text-brand-600 focus:ring-brand-500"
						/>
					</label>
				</div>
			{/if}

			<div class="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
				{#if expanded}
					<Button variant="outline" size="sm" onclick={savePrefs}>Salva preferenze</Button>
				{:else}
					<Button variant="ghost" size="sm" onclick={() => (expanded = true)}>Personalizza</Button>
				{/if}
				<Button variant="outline" size="sm" onclick={rejectAll}>Solo necessari</Button>
				<Button size="sm" onclick={acceptAll}>Accetta tutto</Button>
			</div>
		</div>
	</div>
{/if}
