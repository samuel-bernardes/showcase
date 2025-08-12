import { useState } from 'react';
import { Outlet } from 'react-router';
import classNames from '../utils/TailwindClassname';
import Header from './ui/Header';
import Footer from './ui/Footer';
/* import Header from './Header';
import Footer from './Footer'; */

function MainLayout() {
	const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');

	return (
		<div
			className={classNames(
				colorMode == 'dark' ? 'dark' : 'light',
				'min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900'
			)}
		>
			<Header setColorMode={setColorMode} colorMode={colorMode} />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
