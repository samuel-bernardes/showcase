import { samuelEmilly, samuelGoat, samuelMineirao } from '../assets';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

function Galery() {
	const { t } = useTranslation('gallery');

	return (
		<div className="block space-y-4 sm:space-y-0 sm:grid grid-cols-3 gap-4">
			<Reveal className="text-center space-y-2" delay={80}>
				<img
					src={samuelMineirao}
					alt={t('mineirao.alt')}
					className="rounded-lg object-cover h-64 object-center w-full hover:scale-105 transition-transform duration-500"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					{t('mineirao.caption')}
				</span>
			</Reveal>
			<Reveal className="text-center space-y-2" delay={160}>
				<img
					src={samuelGoat}
					alt={t('goat.alt')}
					className="rounded-lg object-cover object-center h-64 w-full hover:scale-105 transition-transform duration-500"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					{t('goat.caption')}
				</span>
			</Reveal>
			<Reveal className="text-center space-y-2" delay={240}>
				<img
					src={samuelEmilly}
					alt={t('emilly.alt')}
					className="rounded-lg object-cover h-64 w-full hover:scale-105 transition-transform duration-500"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					{t('emilly.caption')}
				</span>
			</Reveal>
		</div>
	);
}

export default Galery;
