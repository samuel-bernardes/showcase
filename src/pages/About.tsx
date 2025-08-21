import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import {
	CodeSnippet,
	Galery,
	HobbiesGrid,
	ProfileCard,
	Timeline,
} from '../components';
import { useTranslation } from 'react-i18next';

function About() {
	const { t } = useTranslation('about');

	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 dark:from-gray-900/20">
			<div className="max-w-7xl py-12 sm:py-24 mx-auto px-4 sm:px-8">
				<div className="flex flex-col items-center gap-8 sm:items-start sm:flex-row sm:gap-12">
					{/* Profile Card - Centralizado em mobile, alinhado à esquerda em desktop */}
					<div className="sm:h-full">
						<div className="h-full flex items-center justify-center sm:block">
							<ProfileCard />
						</div>
					</div>

					{/* Conteúdo do lado direito */}
					<div className="flex flex-col gap-6 w-full max-w-2xl">
						<h1 className="font-bold text-4xl sm:text-5xl text-gray-900 dark:text-gray-100 text-center sm:text-left">
							{t('mainTitle.part1')}{' '}
							<span className="text-violet-600 dark:text-violet-400">
								{t('mainTitle.part2')}
							</span>
						</h1>

						<p className="text-gray-600 dark:text-gray-300 text-center sm:text-left">
							{t('description')}
						</p>

						{/* Estatísticas - Grid em mobile, flex em desktop */}
						<div className="grid grid-cols-2 gap-4 sm:flex sm:gap-8 text-gray-900 dark:text-gray-100">
							<div className="text-center sm:text-left">
								<h4 className="text-5xl sm:text-6xl">+4</h4>
								<span className="text-sm sm:text-base">
									{t('stats.yearsExperience')}
								</span>
							</div>
							<div className="text-center sm:text-left">
								<h4 className="text-5xl sm:text-6xl">+10</h4>
								<span className="text-sm sm:text-base">
									{t('stats.projectsCompleted')}
								</span>
							</div>
							<div className="col-span-2 text-center sm:text-left sm:col-auto">
								<h4 className="text-5xl sm:text-6xl">+25</h4>
								<span className="text-sm sm:text-base">
									{t('stats.toolsUsed')}
								</span>
							</div>
						</div>

						{/* CodeSnippet - Ajuste de padding */}
						<div className="mt-4 px-0 sm:px-6 lg:px-0">
							<CodeSnippet />
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
				<div className="mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
					{/* Left Column - Personal Story */}
					<div className="w-full lg:w-1/2 space-y-8">
						<div>
							<h2 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-100">
								{t('personalStory.title.part1')}{' '}
								<span className="text-violet-600 dark:text-violet-400">
									{t('personalStory.title.part2')}
								</span>{' '}
								{t('personalStory.title.part3')}
							</h2>
							<p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">
								{t('personalStory.subtitle')}
							</p>
						</div>

						{/* Hobbies Grid */}
						<HobbiesGrid />

						{/* Personal Photo Carousel */}
					</div>

					{/* Right Column - Music & Timeline */}
					<div className="w-full lg:w-1/2 space-y-8">
						{/* Spotify Player */}
						<div className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-6 rounded-xl">
							<div className="flex items-center gap-3 mb-4">
								<MusicalNoteIcon className="w-8 h-8 text-violet-400" />
								<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
									{t('musicSection.title')}
								</h3>
							</div>
							<p className="text-gray-600 dark:text-gray-300 mb-4">
								{t('musicSection.description')}
							</p>
							<iframe
								style={{
									borderRadius: '12px',
									boxShadow:
										'0 4px 20px oklch(43.2% 0.232 292.759)',
								}}
								src="https://open.spotify.com/embed/playlist/3eNP3ew8y27LB6ukiI7bJo?utm_source=generator&theme=0"
								width="100%"
								height="152"
								frameBorder="0"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
								className="mt-4"
							></iframe>
						</div>

						{/* Personal Timeline */}
						<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
								{t('timelineSection.title')}
							</h3>
							<Timeline />
						</div>
					</div>
				</div>
				<div className="mt-12">
					<Galery />
				</div>
			</div>
		</div>
	);
}

export default About;