<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { company } from '$lib/company';
</script>

<Seo
	title={`Privacy Policy · ${company.brandName}`}
	description={`Informativa sul trattamento dei dati personali di ${company.legalName}.`}
/>

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
		<strong class="text-ink">Bozza.</strong> Testo di base da far verificare a un consulente legale prima
		della pubblicazione.
	</div>

	<div
		class="prose prose-sand max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-brand-600"
	>
		<h1>Privacy Policy</h1>
		<p>
			Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (“GDPR”), la presente informativa
			descrive le modalità di trattamento dei dati personali degli utenti che consultano questo sito
			e che inviano richieste tramite i moduli di contatto.
		</p>

		<h2>Titolare del trattamento</h2>
		<p>
			{company.legalName}<br />
			{company.fullAddress}<br />
			P.IVA/C.F. {company.vat} · REA {company.rea}<br />
			PEC: {company.pec} · Email: {company.email}
		</p>

		<h2>Tipologie di dati trattati</h2>
		<ul>
			<li>
				<strong>Dati di contatto</strong> conferiti volontariamente (nome, email, telefono, messaggio)
				per rispondere alle richieste di preventivo/informazioni.
			</li>
			<li>
				<strong>Dati di navigazione</strong> raccolti automaticamente (indirizzo IP, browser, pagine visitate)
				per il funzionamento e la sicurezza del sito.
			</li>
			<li>
				<strong>Cookie e tecnologie simili</strong>, come descritto nella
				<a href={resolve('/cookie')}>Cookie Policy</a>.
			</li>
		</ul>

		<h2>Finalità e basi giuridiche</h2>
		<ul>
			<li>
				Riscontro alle richieste e gestione del rapporto pre-contrattuale e contrattuale (art. 6.1.b
				GDPR).
			</li>
			<li>Adempimenti di legge, fiscali e contabili (art. 6.1.c GDPR).</li>
			<li>Sicurezza del sito e legittimo interesse del Titolare (art. 6.1.f GDPR).</li>
		</ul>

		<h2>Conservazione dei dati</h2>
		<p>
			I dati sono conservati per il tempo strettamente necessario alle finalità indicate e nel
			rispetto dei termini di legge (in genere 10 anni per i documenti contabili).
		</p>

		<h2>Comunicazione dei dati</h2>
		<p>
			I dati possono essere trattati da soggetti che svolgono attività per conto del Titolare
			(hosting, gestionali, assicurazioni, consulenti), nominati responsabili del trattamento ove
			previsto. I dati non sono diffusi.
		</p>

		<h2>Diritti dell’interessato</h2>
		<p>
			L’utente può esercitare i diritti di accesso, rettifica, cancellazione, limitazione,
			portabilità e opposizione (artt. 15-22 GDPR) scrivendo a {company.email}. È inoltre possibile
			proporre reclamo all’Autorità Garante per la protezione dei dati personali.
		</p>

		<p><em>Ultimo aggiornamento: 2026.</em></p>
	</div>
</main>

<SiteFooter />
