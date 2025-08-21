import { socialNavigation } from '../../mocks';
import { useTranslation } from 'react-i18next';

function Footer() {
	const { t } = useTranslation('footer');

	return (
		<footer className="bg-gray-100 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{socialNavigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-sm text-gray-500 dark:text-gray-400">
						© {t('copyright', { year: new Date().getFullYear() })}
					</p>
					<p className="mt-1 text-center text-xs text-gray-400 dark:text-gray-500">
						{t('madeWith')}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;