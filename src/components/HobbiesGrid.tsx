import {
	ComputerDesktopIcon,
	MusicalNoteIcon,
	RocketLaunchIcon,
	TrophyIcon,
} from '@heroicons/react/24/outline';

function HobbiesGrid() {
	return (
		<div className="grid grid-cols-2 gap-6">
			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<ComputerDesktopIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					Games
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Competitivo por natureza, amo jogos de estratégia e FPS.
					Dota 2 e Counter Strike são meus favoritos!
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<TrophyIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					Esporte
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Acredito que esportes ensinam disciplina e superação.
					Torcedor do Cruzeiro e palpiteiro nas horas vagas!
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<MusicalNoteIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					Música
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Minha playlist é uma fusão de estilos, do rock ao sertanejo
					amo apreciar uma boa música.
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all">
				<div className="bg-violet-100 dark:bg-violet-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<RocketLaunchIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
				</div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					Cultura pop
				</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Diretamente de Corvinal sou fã de super-herois, animes e
					outras sagas do multiverso pop.
				</p>
			</div>
		</div>
	);
}

export default HobbiesGrid;
