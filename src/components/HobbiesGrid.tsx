import {
	ComputerDesktopIcon,
	MusicalNoteIcon,
	RocketLaunchIcon,
	TrophyIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

function HobbiesGrid() {
	const { t } = useTranslation('hobbies');

	return (
		<div className="grid grid-cols-2 gap-6">
			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<ComputerDesktopIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('games.title')}
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					{t('games.description')}
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<TrophyIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('sports.title')}
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					{t('sports.description')}
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<MusicalNoteIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('music.title')}
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					{t('music.description')}
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<RocketLaunchIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('popCulture.title')}
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					{t('popCulture.description')}
				</p>
			</div>
		</div>
	);
}

export default HobbiesGrid;