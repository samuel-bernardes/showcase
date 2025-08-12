import { createBrowserRouter, RouterProvider } from 'react-router';
import { About, Contact, Home, Projects } from './pages';
import { MainLayout } from './components';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Componente para rolar ao topo em cada navegação
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function Routes() {
	const routes = [
		{ path: '/', element: <Home /> },
		{ path: '/sobre', element: <About /> },
		{ path: '/contato', element: <Contact /> },
		{ path: '/projetos/:id', element: <Projects /> },
	];

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<>
					<ScrollToTop />
					<MainLayout />
				</>
			),
			children: routes,
		},
		{
			path: '*',
			element: <>erro</>,
		},
	]);

	return <RouterProvider router={router} />;
}

export default Routes;
