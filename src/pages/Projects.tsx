import { projects } from '../mocks';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router';

export default function Projects() {
	const { id } = useParams();
	const project = projects.find((p) => p.id === parseInt(id as string));

	if (!project) {
		return (
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					Projeto não encontrado
				</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					O projeto solicitado não foi encontrado em nosso portfólio.
				</p>
			</div>
		);
	}

	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 dark:from-gray-900/20 mx-auto max-w-7xl px-6 py-24 sm:px-8">
			{/* Cabeçalho */}
			<div className="mb-8">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						{project.title}
					</h1>
					<div className="flex gap-3">
						<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500"
						>
							Ver projeto
							<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
						</a>
					</div>
				</div>
				<p className="mt-2 text-gray-500 dark:text-gray-400">
					{project.date}
				</p>
			</div>

			{/* Conteúdo Principal - Imagem e Descrição lado a lado */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
				{/* Imagem do Projeto (40% da largura em desktop) */}
				<div className="lg:col-span-1">
					<div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 h-full max-h-[600px]">
						<img
							src={project.imageUrl}
							alt={project.title}
							className="w-full h-full object-cover object-top"
						/>
					</div>
				</div>

				{/* Descrição (60% da largura em desktop) */}
				<div className="lg:col-span-1">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
						Sobre o projeto
					</h2>
					<p className="text-gray-600 dark:text-gray-300">
						{project.description}
					</p>
				</div>
			</div>

			{/* Features e Tecnologias */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Funcionalidades */}
				<div>
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
						Funcionalidades
					</h2>
					<ul className="space-y-3">
						{project.features.map((feature, index) => (
							<li key={index} className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="flex items-center justify-center h-5 w-5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
										<svg
											className="h-3 w-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
								</div>
								<p className="ml-3 text-gray-600 dark:text-gray-300">
									{feature}
								</p>
							</li>
						))}
					</ul>
				</div>

				{/* Tecnologias */}
				<div>
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
						Tecnologias utilizadas
					</h2>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
					Detalhes do projeto
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
							Status
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							{project.date.includes('Presente') ? (
								<span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
									Em andamento
								</span>
							) : (
								<span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
									Concluído
								</span>
							)}
						</p>
					</div>
					<div>
						<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
							Período
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							{project.date}
						</p>
					</div>
					<div>
						<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
							Categoria
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							{project.category}
						</p>
					</div>
					<div>
						<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
							Links
						</h3>
						<div className="flex flex-col space-y-2">
							<a
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 text-sm"
							>
								<ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1.5" />
								Acessar projeto
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
