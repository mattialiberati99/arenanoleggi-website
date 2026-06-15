<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { company } from '$lib/company';
</script>

<svelte:head>
	<title>Cookie Policy · {company.brandName}</title>
	<meta name="description" content="Informativa sull'uso dei cookie su {company.url}." />
</svelte:head>

<header class="border-b border-sand-200 bg-sand-50">
	<div class="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
		<a href={resolve('/')} aria-label="Home"><Logo size={38} /></a>
		<a href={resolve('/')} class="text-sm text-sand-600 hover:text-ink">← Torna al sito</a>
	</div>
</header>

<main class="mx-auto max-w-3xl px-5 py-16">
	<div
		class="mb-8 rounded-xl border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-sm text-sand-700"
	>
		<strong class="text-ink">Bozza.</strong> Da completare in base agli strumenti effettivamente installati
		(analytics, mappe, social) e da far verificare a un consulente.
	</div>

	<div
		class="prose prose-sand max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-brand-600"
	>
		<h1>Cookie Policy</h1>
		<p>
			Questo sito utilizza cookie e tecnologie simili per garantirne il corretto funzionamento e,
			previo consenso, per finalità di misurazione e marketing.
		</p>

		<h2>Cosa sono i cookie</h2>
		<p>
			I cookie sono piccoli file di testo memorizzati dal browser. Possono essere “tecnici”
			(necessari) oppure “di profilazione/terze parti” (soggetti a consenso).
		</p>

		<h2>Categorie utilizzate</h2>
		<ul>
			<li>
				<strong>Cookie tecnici necessari</strong> — indispensabili per la navigazione e la sicurezza.
				Non richiedono consenso.
			</li>
			<li>
				<strong>Cookie analitici</strong> — per statistiche aggregate sull’uso del sito (attivati solo
				previo consenso o se anonimizzati).
			</li>
			<li>
				<strong>Cookie di terze parti</strong> — eventuali mappe, video o widget social, soggetti alle
				rispettive informative.
			</li>
		</ul>

		<h2>Gestione del consenso</h2>
		<p>
			Al primo accesso è possibile accettare, rifiutare o personalizzare i cookie non necessari. Le
			preferenze possono essere modificate in qualsiasi momento tramite le impostazioni del banner o
			del browser.
		</p>

		<h2>Titolare</h2>
		<p>
			{company.legalName} · {company.fullAddress} · Email: {company.email}. Per i dettagli sul
			trattamento dei dati personali consulta la <a href={resolve('/privacy')}>Privacy Policy</a>.
		</p>

		<p><em>Ultimo aggiornamento: 2026.</em></p>
	</div>
</main>

<SiteFooter />
