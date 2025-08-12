import { dataviva, formulaDota, midasClub, obd, pareFumar } from '../assets';

export const projects = [
	{
		id: 1,
		title: 'Dataviva',
		href: 'https://www.dataviva.info/pt/',
		description:
			'O DataViva é uma plataforma de visualização dados focada em Big Data. Sua missão é fundamentar processos de decisão e investigação científica através da utilização de grandes conjuntos de dados, fortalecendo uma cultura data-driven nas esferas pública e privada. A plataforma é desenvolvida sob tecnologias open source, possibilitando a replicação, validação e contribuição da comunidade científica. Foi necessário o emprego de técnicas de otimização de dados de maneira a propiciar uma plataforma responsiva, rápida e poderosa o suficiente para gerar mais de 1 bilhão de possibilidades de visualizações interativas. Ao longo de sua trajetória, o DataViva buscou, mais do que disponibilizar o acesso à informação, agregar valor aos dados por meio de seu corpo técnico. Isso se deu através da elaboração de publicações científicas, artigos em revistas e blogs de maneira a sistematizar os conhecimentos gerados a partir da análise de um volume massivo de dados. Atualmente, o repositório de dados do DataViva compreende mais de 1000 GB armazenados em nuvem. O projeto é financiado pela FAPEMIG e executado pelo CEDEPLAR.',
		imageUrl: dataviva,
		date: 'Jan 2023 - Presente',
		category: 'Big Data e WEB',
		technologies: ['Python', 'HTML e CSS', 'MySQL', 'AWS'],
		features: [
			'Visualização de dados',
			'Gráficos Personalizados',
			'Download de dados',
			'Conteúdo dinâmico',
			'Design de interfaces',
		],
	},
	{
		id: 2,
		title: 'Formula Dota',
		href: 'https://formuladota.com/',
		description:
			'Uma plataforma completa de cursos e assinaturas, pensada para jogadores que desejam evoluir no cenário competitivo. O Formula chegou para transformar o cenário de Dota 2 no Brasil! Um projeto idealizado por Peter "PPA" chega para ensinar os caminhos para elevar o seu nível de gameplay! Na plataforma você vai encontrar cursos desde o básico ao avançado em gameplay, o método pro com professores especialistas em heróis específicos e a liga do Formula!',
		imageUrl: formulaDota,
		date: 'Dez 2024 - Presente',
		category: 'Aplicação WEB',
		technologies: ['React', 'Material UI', 'Node', 'MongoDB'],
		features: [
			'Integração com mercado pago',
			'Login social com discord',
			'Sistema de admin',
			'Sistema de pontos e proguessão',
			'Formulários Avaliativos',
			'Design de interfaces',
		],
	},
	{
		id: 3,
		title: 'Midas Club',
		href: 'https://midasclub.com.br/',
		description:
			'Site institucional da maior in-house de Dota 2 do Brasil, com foco em performance, clareza e engajamento da comunidade. Da ideia inicial à maior comunidade de inhouses da América Latina, cada marco representa nosso compromisso com o cenário de Dota 2. O nome "Midas" representa nossa missão: transformar jogadores comuns em ouro competitivo. Assim como o lendário Rei Midas, acreditamos no toque que transforma - mas aqui, o ouro é medido em habilidade, respeito e crescimento constante dentro do jogo que amamos.',
		imageUrl: midasClub,
		date: 'Maio 2025 - Junho 2025',
		category: 'Aplicação WEB',
		technologies: ['React', 'Tailwind', 'Typescript', 'AWS'],
		features: [
			'Foco em experiência do usúario',
			'Design Responsivo',
			'Integração com google sheets',
			'Design de interfaces',
		],
	},
	{
		id: 4,
		title: 'Observatório do Desenvolvimento',
		href: 'https://midasclub.com.br/',
		description:
			'O Observatório do Desenvolvimento (ObD) é um grupo de pesquisa do Cedeplar-UFMG registrado no CNPq que tem como objetivo geral a produção sistemática de dados e estudos sobre o desenvolvimento econômico inclusivo e sustentável tanto em âmbito nacional como regional, com ênfase na análise de políticas públicas. O webapp foi criado visando integrar diversas linhas de pesquisa aplicadas e teóricas, desenvolvidas por professores do Cedeplar-UFMG, que está alocado fisicamente na Faculdade de Ciências Econômicas (FACE).',
		imageUrl: obd,
		date: 'Dez 2024 - Julho 2025',
		category: 'Aplicação WEB',
		technologies: ['React', 'Material UI', 'Node', 'AWS', 'MongoDB'],
		features: [
			'Sistema de admin',
			'Design Responsivo',
			'Conteúdo dinâmico',
			'Design de interfaces',
		],
	},
	{
		id: 5,
		title: 'Pare de Fumar Fumando',
		href: 'https://play.google.com/store/apps/details?id=br.com.paredefumarfumando&pcampaignid=web_share',
		description:
			'O Pare de Fumar Fumando é um aplicativo para Android e IOS que foi desenvolvido na intenção de ajudar fumantes a pararem com o vício. Ele possui diversas dinâmicas internas que auxiliam essas pessoas nessa jornada. Com desafios diários você observará a diminuição do seu constante desejo de fumar, levando esses novos pequenos hábitos para o seu dia a dia. O APP ja conta com mais de 700 downloads e foi desenvolvido pelo Dr. Carlos Augusto, psicólogo e psicoterapeuta, Mestre em Psicologia Clínica, é também especialista no tratamento do Tabagismo que criou cada um dos conteúdos que você encontrará neste aplicativo.',
		imageUrl: pareFumar,
		date: 'Março 2022 - Maio 2022',
		category: 'Aplicação WEB',
		technologies: ['React Native', 'Typescript', 'C#', 'Android'],
		features: [
			'Player de vídeo customizado',
			'Sistema de avaliação',
			'Progresso do aluno',
		],
	},
];
