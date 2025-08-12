import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router';
import { logoBlack, logoWhite } from '../../assets';

interface IHeaderProps {
	colorMode: 'light' | 'dark';
	setColorMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Sobre', href: '/sobre' },
	{ name: 'Contato', href: '/contato' },
];

function Header({ colorMode, setColorMode }: IHeaderProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleColorMode = () => {
		setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<header className="bg-gray-100 dark:bg-gray-900 dark:border-gray-800">
			<nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<img
							src={colorMode === 'light' ? logoBlack : logoWhite}
							alt="logo"
							className="h-16"
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:items-center lg:space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className="text-base font-medium text-gray-900 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
							>
								{item.name}
							</Link>
						))}

						{/* Theme Toggle */}
						<button
							onClick={toggleColorMode}
							className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
						>
							{colorMode === 'light' ? (
								<MoonIcon className="h-5 w-5 text-violet-600" />
							) : (
								<SunIcon className="h-5 w-5 text-yellow-400" />
							)}
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
						>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</div>
			</nav>

			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-800/10">
					<div className="flex items-center justify-between">
						<Link
							to="/"
							className="-m-1.5 p-1.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<img src={logoBlack} alt="logo" className="h-12" />
						</Link>
						<div className="flex items-center space-x-4">
							<button
								onClick={toggleColorMode}
								className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
								aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
							>
								{colorMode === 'light' ? (
									<MoonIcon className="h-5 w-5 text-violet-600" />
								) : (
									<SunIcon className="h-5 w-5 text-yellow-400" />
								)}
							</button>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
							>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-800">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}

export default Header;
