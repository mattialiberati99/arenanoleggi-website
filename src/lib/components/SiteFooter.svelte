<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { company } from '$lib/company';
	import { services } from '$lib/data/fleet';

	const year = 2026;
</script>

<footer class="relative overflow-hidden bg-ink text-sand-300">
	<!-- arco watermark -->
	<div class="pointer-events-none absolute -top-24 -right-16 opacity-[0.06]">
		<Logo variant="mark" size={360} mono class="text-sand-50" />
	</div>

	<div class="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
		<div class="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
			<!-- brand -->
			<div>
				<Logo size={46} mono class="text-sand-50" />
				<p class="mt-5 max-w-xs text-sm leading-relaxed text-sand-400">
					Autonoleggio a Verona e provincia: auto, furgoni, minibus 9 posti, macchinari edili e
					parcheggio aeroporto con navetta.
				</p>
				<div class="mt-6 flex gap-3">
					<a
						href="tel:{company.phone.replace(/\s/g, '')}"
						class="flex size-10 items-center justify-center rounded-full bg-white/5 text-sand-200 transition-colors hover:bg-brand-600 hover:text-white"
						aria-label="Telefono"
					>
						<Icon name="phone" size={18} />
					</a>
					<a
						href="mailto:{company.email}"
						class="flex size-10 items-center justify-center rounded-full bg-white/5 text-sand-200 transition-colors hover:bg-brand-600 hover:text-white"
						aria-label="Email"
					>
						<Icon name="mail" size={18} />
					</a>
					<a
						href="#contatti"
						class="flex size-10 items-center justify-center rounded-full bg-white/5 text-sand-200 transition-colors hover:bg-leaf-500 hover:text-white"
						aria-label="WhatsApp"
					>
						<Icon name="whatsapp" size={18} />
					</a>
				</div>
			</div>

			<!-- servizi -->
			<div>
				<h3 class="font-display text-sm font-semibold tracking-wide text-sand-100">Servizi</h3>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each services as s (s.id)}
						<li>
							<a
								href={resolve(`/servizi/${s.slug}`)}
								class="text-sand-400 transition-colors hover:text-white">{s.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<!-- azienda -->
			<div>
				<h3 class="font-display text-sm font-semibold tracking-wide text-sand-100">Azienda</h3>
				<ul class="mt-4 space-y-2.5 text-sm">
					<li>
						<a href="#perche" class="text-sand-400 transition-colors hover:text-white"
							>Perché Arena</a
						>
					</li>
					<li>
						<a href="#contatti" class="text-sand-400 transition-colors hover:text-white">Contatti</a
						>
					</li>
					<li>
						<a href={resolve('/privacy')} class="text-sand-400 transition-colors hover:text-white"
							>Privacy Policy</a
						>
					</li>
					<li>
						<a href={resolve('/cookie')} class="text-sand-400 transition-colors hover:text-white"
							>Cookie Policy</a
						>
					</li>
					<li>
						<button
							type="button"
							class="text-sand-400 transition-colors hover:text-white"
							onclick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
						>
							Preferenze cookie
						</button>
					</li>
				</ul>
			</div>

			<!-- contatti -->
			<div>
				<h3 class="font-display text-sm font-semibold tracking-wide text-sand-100">Dove siamo</h3>
				<ul class="mt-4 space-y-3 text-sm text-sand-400">
					<li class="flex gap-2.5">
						<Icon name="map-pin" size={18} class="mt-0.5 shrink-0 text-brand-400" />
						<span
							>{company.address.street}<br />{company.address.postalCode}
							{company.address.city} ({company.address.province})</span
						>
					</li>
					<li class="flex gap-2.5">
						<Icon name="phone" size={18} class="shrink-0 text-brand-400" />
						<span>{company.phone}</span>
					</li>
					<li class="flex gap-2.5">
						<Icon name="mail" size={18} class="shrink-0 text-brand-400" />
						<span>{company.email}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- riga legale -->
		<div class="mt-14 border-t border-white/10 pt-6">
			<p class="text-xs leading-relaxed text-sand-500">
				{company.legalName} · Sede legale: {company.fullAddress} · P.IVA/C.F. {company.vat} · REA
				{company.rea} · Capitale sociale {company.shareCapital} · PEC {company.pec}
			</p>
			<p class="mt-3 text-xs text-sand-500">
				© {year}
				{company.legalName}. Tutti i diritti riservati.
			</p>
		</div>
	</div>
</footer>
