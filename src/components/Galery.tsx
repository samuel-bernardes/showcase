import { samuelEmilly, samuelGoat, samuelMineirao } from '../assets';
import { useTranslation } from 'react-i18next';

function Galery() {
	const { t } = useTranslation('gallery');

	return (
		<div className="block space-y-4 sm:space-y-0 sm:grid grid-cols-3 gap-4">
			<div className="text-center space-y-2">
				<img
					src={samuelMineirao}
					alt={t('mineirao.alt')}
					className="rounded-lg object-cover h-64 object-center w-full hover:scale-105 transition-transform"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					{t('mineirao.caption')}
				</span>
			</div>
			<div className="text-center space-y-2">
				<img
					src={samuelGoat}
					alt={t('goat.alt')}
					className="rounded-lg object-cover object-center h-64 w-full hover:scale-105 transition-transform"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					{t('goat.caption')}
				</span>
			</div>
			<div className="text-center space-y-2">
				<img
					src={samuelEmilly}
					alt={t('emilly.alt')}
					className="rounded-lg object-cover h-64 w-full hover:scale-105 transition-transform"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					{t('emilly.caption')}
				</span>
			</div>
		</div>
	);
}

export default Galery;