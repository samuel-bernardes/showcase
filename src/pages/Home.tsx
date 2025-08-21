import { samuelHome } from '../assets';
import { projects } from '../mocks';
import { ProjectCard } from '../components';
import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation('home');

	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 dark:from-gray-900/20">
			<div className="mx-auto max-w-7xl py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 sm:px-8">
				<div className="px-6 lg:px-0">
					<div className="mx-auto max-w-2xl">
						<div className="max-w-lg">
							<div className="flex items-center gap-3">
								<span className="text-6xl font-bold text-gray-900 dark:text-white">
									Samuel Bernardes
								</span>
							</div>

							<p className="mt-8 text-lg font-medium text-pretty text-gray-600 dark:text-gray-300 sm:text-xl/8">
								{t("introduction")}
							</p>

							<div className="mt-10 flex items-center gap-x-6">
								<a
									href="https://drive.google.com/file/d/1Z9nk60HwYXIewjMQqOoUQseH8bndWf8b/view?usp=sharing"
									target="_blank"
									className="rounded-md bg-violet-600 dark:bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-violet-500 dark:hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
								>
									{t("downloadResume")}
								</a>
								<a
									href="https://github.com/samuel-bernardes"
									target="_blank"
									className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
								>
									{t("viewGithub")}
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen relative">
					<div className="relative h-full w-full overflow-hidden rounded-sm">
						<img
							src={samuelHome}
							className="w-full h-[760px] object-cover object-center scale-110 lg:scale-125 transform-gpu transition-transform duration-500 ease-in-out hover:scale-105"
							alt={t("imageAlt")}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-white/10 dark:via-gray-900/10 to-transparent pointer-events-none"></div>
					</div>
				</div>
			</div>

			<div className="px-6 pb-24 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl font-bold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
						{t("featuredProjects")}
					</h2>
					<p className="mx-auto mt-6 text-lg/relaxed text-pretty text-gray-600 dark:text-gray-300">
						{t("projectsDescription")}
					</p>
				</div>

				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard project={project} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;