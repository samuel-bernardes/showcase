import { samuelEmilly, samuelGoat, samuelMineirao } from '../assets';

function Galery() {
	return (
		<div className="block space-y-4 sm:space-y-0 sm:grid grid-cols-3 gap-4">
			<div className="text-center space-y-2">
				<img
					src={samuelMineirao}
					alt="Futebol"
					className="rounded-lg object-cover h-64 object-center w-full hover:scale-105 transition-transform"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					Estádio Mineirão - 2024
				</span>
			</div>
			<div className="text-center space-y-2">
				<img
					src={samuelGoat}
					alt="Lan house"
					className="rounded-lg object-cover object-center h-64 w-full hover:scale-105 transition-transform"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					Goat Gaming - 2024
				</span>
			</div>
			<div className="text-center space-y-2">
				<img
					src={samuelEmilly}
					alt="Samuel lendo"
					className="rounded-lg object-cover h-64 w-full hover:scale-105 transition-transform"
				/>
				<span className="text-gray-600 dark:text-gray-300">
					Deadpool e Wolverine - 2024
				</span>
			</div>
		</div>
	);
}

export default Galery;
