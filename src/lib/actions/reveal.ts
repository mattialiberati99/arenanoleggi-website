import type { Action } from 'svelte/action';

type RevealOptions = {
	/** ritardo della transizione in ms (per effetto scaglionato) */
	delay?: number;
	/** soglia di intersezione 0..1 */
	threshold?: number;
};

/**
 * Action di scroll-reveal: aggiunge `.is-visible` quando l'elemento entra
 * nel viewport. Va abbinata alla classe `.an-reveal` (vedi layout.css).
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const { delay = 0, threshold = 0.12 } = options ?? {};

	node.classList.add('an-reveal');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
