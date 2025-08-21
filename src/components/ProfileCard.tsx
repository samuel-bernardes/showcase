import { Link } from 'react-router';
import { samuelProfile } from '../assets';
import { socialNavigation } from '../mocks';
import { useTranslation } from 'react-i18next';

function ProfileCard() {
	const { t } = useTranslation('profile');

	return (
		<div className="bg-white dark:bg-gray-800 p-6 flex flex-col items-center w-80 h-full rounded-3xl shadow-md">
			<div className="flex flex-col items-center gap-8 mx-auto">
				<img
					src={samuelProfile}
					className="w-52 h-60 object-cover rounded-lg shadow-md shadow-violet-500 dark:shadow-violet-400"
					alt={t('imageAlt')}
				/>
				<div className="text-center">
					<h3 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
						{t('name')}
					</h3>
					<p className="text-lg text-violet-600 dark:text-violet-400 mt-1">
						{t('jobTitle')}
					</p>
					<p className="text-gray-600 dark:text-gray-300 mt-2">
						{t('location')}
					</p>
				</div>
				<div className="flex gap-2 items-center">
					{socialNavigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-600 hover:text-violet-600 dark:text-gray-100 dark:hover:text-violet-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
			</div>
			<Link to="/contato">
				<button
					className="mt-16 px-6 py-2
				bg-violet-600 dark:bg-violet-500 text-white 
				rounded-md hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors duration-300"
				>
					{t('contactButton')}
				</button>
			</Link>
		</div>
	);
}

export default ProfileCard;