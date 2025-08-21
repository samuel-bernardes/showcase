import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import i18n from '../i18n';
import { brasilFlag, euaFlag } from '../assets';

// Adicione este componente dentro do seu header, na seção de navegação
const LanguageSwitcher = () => {
	const [languageSelected, setLanguageSelected] = useState(i18n.language);

	const handleChangeLanguage = useCallback((language: string) => {
		i18n.changeLanguage(language);
		setLanguageSelected(language);
	}, []);

	return (
		<div className="relative group bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2 rounded-lg">
			<button className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors cursor-pointer">
				<GlobeAltIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
				<span className="hidden md:inline">
					{languageSelected === 'pt-BR' ? 'Português' : 'English'}
				</span>
			</button>

			<div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
				<div className="py-1">
					<button
						onClick={() => handleChangeLanguage('pt-BR')}
						className={`flex w-full items-center px-4 py-2 text-sm ${languageSelected === 'pt-BR' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
					>
						<span className="mr-2">
							<img src={brasilFlag} width={24} height="auto" />
						</span>
						Português
					</button>
					<button
						onClick={() => handleChangeLanguage('en-US')}
						className={`flex w-full items-center px-4 py-2 text-sm ${languageSelected === 'en-US' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
					>
						<span className="mr-2">
							<img src={euaFlag} width={24} height="auto" />
						</span>
						English
					</button>
				</div>
			</div>
		</div>
	);
};

export default LanguageSwitcher;
