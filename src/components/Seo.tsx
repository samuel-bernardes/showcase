import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SITE_URL = 'https://www.samuelbernardes.engineer';
const DEFAULT_TITLE = 'Samuel Bernardes';
const DEFAULT_DESCRIPTION =
	'Portfólio de Samuel Bernardes, engenheiro e desenvolvedor de software com projetos em React, React Native, TypeScript e soluções web e mobile.';

const routeMetadata: Record<
	string,
	{
		title: string;
		description: string;
	}
> = {
	'/': {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
	},
	'/sobre': {
		title: 'Samuel Bernardes | Sobre',
		description:
			'Conheça a trajetória, interesses e experiência de Samuel Bernardes em engenharia e desenvolvimento de software.',
	},
	'/contato': {
		title: 'Samuel Bernardes | Contato',
		description:
			'Entre em contato com Samuel Bernardes para oportunidades, parcerias e projetos de software.',
	},
};

function setMeta(
	selector: string,
	attribute: 'name' | 'property',
	key: string,
	value: string
) {
	const element = document.querySelector<HTMLMetaElement>(selector);

	if (element) {
		element.setAttribute('content', value);
		return;
	}

	const meta = document.createElement('meta');
	meta.setAttribute(attribute, key);
	meta.setAttribute('content', value);
	document.head.appendChild(meta);
}

function Seo() {
	const { pathname } = useLocation();

	useEffect(() => {
		const metadata =
			routeMetadata[pathname] ??
			(pathname.startsWith('/projetos/')
				? {
						title: 'Samuel Bernardes | Projetos',
						description:
							'Detalhes dos projetos desenvolvidos por Samuel Bernardes em software web e mobile.',
					}
				: {
						title: DEFAULT_TITLE,
						description: DEFAULT_DESCRIPTION,
					});

		const canonicalUrl = `${SITE_URL}${pathname}`;

		document.title = metadata.title;

		const canonicalLink =
			document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
			document.createElement('link');

		canonicalLink.setAttribute('rel', 'canonical');
		canonicalLink.setAttribute('href', canonicalUrl);

		if (!canonicalLink.parentNode) {
			document.head.appendChild(canonicalLink);
		}

		setMeta(
			'meta[name="description"]',
			'name',
			'description',
			metadata.description
		);
		setMeta(
			'meta[property="og:title"]',
			'property',
			'og:title',
			metadata.title
		);
		setMeta(
			'meta[property="og:description"]',
			'property',
			'og:description',
			metadata.description
		);
		setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
		setMeta(
			'meta[name="twitter:title"]',
			'name',
			'twitter:title',
			metadata.title
		);
		setMeta(
			'meta[name="twitter:description"]',
			'name',
			'twitter:description',
			metadata.description
		);
	}, [pathname]);

	return null;
}

export default Seo;
