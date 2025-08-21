import { useTranslation } from 'react-i18next';

function Timeline() {
	const { t } = useTranslation('timeline');

	return (
		<div className="space-y-8">
			<div className="relative pl-8">
				<div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-violet-500 border-4 border-violet-200 dark:border-violet-900"></div>
				<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('2019.title')}
				</h4>
				<p className="mt-1 text-gray-600 dark:text-gray-400">
					{t('2019.description')}
				</p>
			</div>
			<div className="relative pl-8">
				<div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-violet-500 border-4 border-violet-200 dark:border-violet-900"></div>
				<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('2022.firstExperience.title')}
				</h4>
				<p className="mt-1 text-gray-600 dark:text-gray-400">
					{t('2022.firstExperience.description')}
				</p>
			</div>
			<div className="relative pl-8">
				<div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-violet-500 border-4 border-violet-200 dark:border-violet-900"></div>
				<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('2022.college.title')}
				</h4>
				<p className="mt-1 text-gray-600 dark:text-gray-400">
					{t('2022.college.description')}
				</p>
			</div>
			<div className="relative pl-8">
				<div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-violet-500 border-4 border-violet-200 dark:border-violet-900"></div>
				<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
					{t('2024.appPublication.title')}
				</h4>
				<p className="mt-1 text-gray-600 dark:text-gray-400">
					{t('2024.appPublication.description')}
				</p>
			</div>
		</div>
	);
}

export default Timeline;
