import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: 'div' | 'section';
}

function Reveal({
	children,
	className = '',
	delay = 0,
	as = 'div',
}: RevealProps) {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef<HTMLDivElement | HTMLElement | null>(null);

	useEffect(() => {
		const element = elementRef.current;

		if (!element) {
			return;
		}

		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (mediaQuery.matches) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.18,
				rootMargin: '0px 0px -48px 0px',
			}
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const Component = as;

	return (
		<Component
			ref={elementRef as never}
			className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</Component>
	);
}

export default Reveal;
