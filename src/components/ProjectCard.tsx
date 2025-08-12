import { Link } from 'react-router';
import type { projects } from '../mocks';

interface IProjectCardProps {
	project: (typeof projects)[number];
}

function ProjectCard(props: IProjectCardProps) {
	const { project } = props;

	return (
		<Link to={`/projetos/${project.id}`}>
			<article
				key={project.id}
				className="relative h-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 hover:scale-[1.02] transition-transform duration-300 group"
			>
				<img
					alt={`Captura do projeto ${project.title}`}
					src={project.imageUrl}
					className="absolute inset-0 -z-10 h-full w-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-500"
				/>

				{/* Overlay gradiente */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

				{/* Efeito de borda sutil */}
				<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

				{/* Metadados do projeto */}
				<div className="flex flex-wrap items-center gap-y-1 text-sm/6 text-gray-300">
					<div className="flex items-center gap-x-2">
						<span className="inline-flex items-center rounded-md bg-gray-800/80 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-700">
							{project.category}
						</span>
						<span className="text-gray-300">{project.date}</span>
					</div>
				</div>

				{/* Título e descrição */}
				<div className="mt-3">
					<h3 className="text-xl font-semibold text-white">
						<span className="absolute inset-0" />
						{project.title}
					</h3>
					<p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-300">
						{project.description}
					</p>
				</div>

				{/* Tecnologias utilizadas */}
				<div className="mt-4 flex flex-wrap gap-2">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center rounded-full bg-violet-900/50 px-2.5 py-0.5 text-xs font-medium text-violet-100"
						>
							{tech}
						</span>
					))}
				</div>
			</article>
		</Link>
	);
}

export default ProjectCard;
