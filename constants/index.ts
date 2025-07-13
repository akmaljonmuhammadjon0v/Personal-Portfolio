import { Certificate, Education, FeaturedProject, Projects } from '@/types';
import {
	AppWindow,
	CircleUser,
	FileText,
	Github,
	Home,
	Instagram,
	Linkedin,
	LucideGithub,
	Mail,
	Newspaper,
	Send,
} from 'lucide-react';
import type { Variants, Transition } from 'framer-motion';

export const itemVariants: Variants = {
	initial: { rotateX: 0, opacity: 1 },
	hover: { rotateX: -90, opacity: 0 },
};

export const backVariants: Variants = {
	initial: { rotateX: 90, opacity: 0 },
	hover: { rotateX: 0, opacity: 1 },
};

export const glowVariants: Variants = {
	initial: { opacity: 0, scale: 0.8 },
	hover: {
		opacity: 1,
		scale: 2,
		transition: {
			opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
			scale: {
				duration: 0.5,
				type: 'spring',
				stiffness: 300,
				damping: 25,
			},
		},
	},
};

export const navGlowVariants: Variants = {
	initial: { opacity: 0 },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.4, 0, 0.2, 1],
		},
	},
};

export const sharedTransition: Transition = {
	type: 'spring',
	stiffness: 100,
	damping: 20,
	duration: 0.5,
};

export const navLinks = {
	links: [
		{ name: 'Home', route: '/', icon: Home },
		{ name: 'Blogs', route: '/blogs', icon: Newspaper },
		{ name: 'Projects', route: '/projects', icon: AppWindow },
		{ name: 'Certificates', route: '/certificate', icon: FileText },
		{ name: 'Contact', route: '/contact', icon: CircleUser },
	],

	gradients: [
		'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)', // Moviy
		'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)', // To‘q sariq
		'radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)', // Sariq
		'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)', // Qizil
		'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)', // Binafsha
		'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)', // Yashil
	],

	iconColors: [
		'text-blue-500',
		'text-orange-500',
		'text-yellow-500',
		'text-red-500',
		'text-purple-500',
		'text-green-500',
	],
};
export const skills = [
	{ title: 'JavaScript' },
	{ title: 'TypeScript' },
	{ title: 'React.js' },
	{ title: 'Next.js' },
	{ title: 'Redux' },
	{ title: 'Git / Github' },
	{ title: 'CSS / SASS' },
	{ title: 'Tailwindcss' },
	{ title: 'CMS' },
	{ title: 'FireBase' },
	{ title: 'Telegrambot' },
	{ title: 'SEO' },
];

export const projects: Projects[] = [
	{
		title: 'Portfolio Website',
		description: 'A personal portfolio built with Next.js and Tailwind.',
		image: '/projects/portfolio.webp',
		link: 'https://akmaldev.uz',
		gitlink: 'https://github.com/akmaljonmuhammadjonov07/Personal-Portfolio',
		skills: [
			{ title: 'TypeScript' },
			{ title: 'React.js' },
			{ title: 'Next.js' },
			{ title: 'Shadcn-ui' },
			{ title: 'Hygraph' },
			{ title: 'Framer-motion' },
		],
	},
	{
		title: 'Gym App ',
		description: 'A Gym App built with Next.js and Firebase.',
		image: '/projects/gym.webp',
		link: 'https://gym-training-eea21.web.app/',
		gitlink: 'https://github.com/akmaljonmuhammadjonov07/Gym_App',
		skills: [
			{ title: 'TypeScript' },
			{ title: 'React.js' },
			{ title: 'Vite' },
			{ title: 'Shadcn-ui' },
			{ title: 'Firebase' },
			{ title: 'Zustend' },
		],
	},
	{
		title: 'Blog Platform',
		description: 'A fast and SEO-friendly blog using Next.js and Hygraph.',
		image: '/projects/blog.webp',
		link: 'https://blog.akmaldev.uz/',
		gitlink: 'https://github.com/akmaljonmuhammadjonov07/Praktikum_Blog_App',
		skills: [
			{ title: 'TypeScript' },
			{ title: 'React.js' },
			{ title: 'Next.js' },
			{ title: 'Shadcn-ui' },
			{ title: 'Hygraph' },
			{ title: 'SEO' },
		],
	},
	{
		title: 'Weather App',
		description: 'A weather app using React.js and OpenWeather API.',
		image: '/projects/weather.webp',
		link: 'https://weather.akmaldev.uz/',
		gitlink: 'https://github.com/akmaljonmuhammadjonov07/weather-app',
		skills: [
			{ title: 'React.js' },
			{ title: 'Tailwindcss' },
			{ title: 'Axios' },
			{ title: 'OpenWeather-API' },
		],
	},
	{
		title: 'Paint App',
		description: 'A paint app using JavaScript and HTML5 Canvas.',
		image: '/projects/paint.webp',
		link: 'https://paint.akmaldev.uz/',
		gitlink: 'https://github.com/akmaljonmuhammadjonov07/Paint_App',
		skills: [
			{ title: 'JavaScript' },
			{ title: 'HTML5' },
			{ title: 'CSS' },
			{ title: 'Canvas' },
		],
	},
];

export const certificates: Certificate[] = [
	{
		title: 'Github',
		description: 'My first certificate from Amigoscode',
		image: '/certificates/amigos_certificate.webp',
		link: 'https://www.amigoscode.com/',
		see: '/certificates/certificate-of-completion-for-git-and-github-essentials.pdf',
		skills: [{ title: 'Git' }, { title: 'Github' }],
	},
];

export const featured_projects: FeaturedProject[] = [
	{
		title: 'CMS Blog-App',
		img: '/projects/blog.webp',
		weblink: 'https://blog.akmaldev.uz/',
		gitlink: 'https://github.com/akmaljonmuhammadjon0v/Praktikum_Blog_App',
		skills: [
			{ title: 'Next.js', icon: '/next.webp' },
			{ title: 'React.js', icon: '/react.webp' },
			{ title: 'TypeScript', icon: '/ts.webp' },
			{ title: 'Shadcn-ui', icon: '/shadcn.webp' },
			{ title: 'Tailwindcss', icon: '/tailwindcss.webp' },
			{ title: 'Hygraph', icon: '/hygraph.png' },
		],
	},
	{
		title: 'Gym App',
		img: '/projects/gym.webp',
		weblink: 'https://gym-training-eea21.web.app/',
		gitlink: 'https://github.com/akmaljonmuhammadjon0v/Gym_App',
		skills: [
			{ title: 'Next.js', icon: '/next.webp' },
			{ title: 'React.js', icon: '/react.webp' },
			{ title: 'TypeScript', icon: '/ts.webp' },
			{ title: 'ShadcnUI', icon: '/shadcn.webp' },
			{ title: 'Tailwindcss', icon: '/tailwindcss.webp' },
			{ title: 'FireBase', icon: '/firebase.webp' },
			{ title: 'Zustand', icon: '/zustand.webp' },
		],
	},
];

export const edu: Education[] = [
	{
		company: 'Codemy',
		link: 'https://codemy.uz/',
		role: 'Frontend Developer',
		date: 'January 2023 - April 2024',
		skills: [
			{ title: 'HTML' },
			{ title: 'CSS' },
			{ title: 'JavaScript' },
			{ title: 'React.js' },
			{ title: 'Redux' },
			{ title: 'Git / Github' },
			{ title: 'MUI' },
			{ title: 'Tailwindcss' },
			{ title: 'Computer Literacy' },
		],
		btn: [{ title: 'See Codemy', link: 'https://codemy.uz/' }],
		logo: '/codemy.webp',
		desc: "Codemy orqali zamonaviy dasturlash texnologiyalarini noldan boshlab o‘rganish va amaliy loyihalar ustida ishlash imkoniyati mavjud. Mentorlar real ish sharoitiga yaqinlashtirilgan topshiriqlar asosida dars o‘tadilar. Bu yerda frontend va backend dasturchi sifatida rivojlanish mumkin va siz dasturlashni 0dan junior darajagacha o'rganing.",
	},
	{
		company: 'Sammi | Praktikum',
		link: 'https://www.sammi.ac/',
		role: 'Frontend | Fullstack',
		date: 'October 2024 - 3-month',
		skills: [
			{ title: 'JavaScript' },
			{ title: 'TypeScript' },
			{ title: 'React.js' },
			{ title: 'Next.js' },
			{ title: 'Redux' },
			{ title: 'Git / Github' },
			{ title: 'CSS / SASS' },
			{ title: 'Tailwindcss' },
			{ title: 'CMS' },
			{ title: 'FireBase' },
			{ title: 'SEO' },
		],
		btn: [
			{ title: 'See Sammi', link: 'https://sammi.ac/' },
			{ title: 'See Praktikum', link: 'https://praktikum.sammi.ac/' },
		],
		logo: '/sammi.svg',

		desc: `Sammi Praktikum platformasida o‘rgangan bilimlarimni mustahkamlash uchun bir nechta amaliy topshiriqlar va loyihalarni bajardim. Har bir topshiriq real vazifaga yaqin tuzilgan. Bu platforma orqali men Kod sifati, File Strukturasi, SEO, Reactjs, Nextjs, Redux, JavaScript, TypeScript, Tailwindcss, Firebase kabi texnologiyalar bo‘yicha chuqur bilimlar egalladim.`,
	},
	{
		company: 'Amigoscode',
		link: 'https://www.amigoscode.com/',
		role: 'Git - Github Developer',
		date: 'December 2024 - 1-month',
		skills: [{ title: 'Git' }, { title: 'Github' }],
		btn: [{ title: 'See Amigoscode', link: 'https://www.amigoscode.com/' }],
		logo: '/amigos.png',
		desc: 'Amigoscode — bu amaliy IT kurslari taqdim etuvchi xalqaro onlayn platforma. Platformada Java, Spring Boot, Git/GitHub, DevOps, AWS kabi texnologiyalar bo‘yicha chuqur va amaliy bilimlar beriladi. Ushbu kursda Git va GitHub bo‘yicha chuqur bilimlarni egallab, kod versiyalarini boshqarish va hamkorlikda ishlashni o‘rgandim.',
		certificate:
			'/certificates/certificate-of-completion-for-git-and-github-essentials.pdf',
		ctitle: 'Certificate:',
		cdesc: 'Certificate:',
	},
];

export const experiences = [
	{
		company: 'Empty',
		role: 'Frontend Developer',
		date: 'May 2021 - Oct 2022',
		logo: '/codemy.png',
	},
	{
		company: 'Empty',
		role: 'Frontend Developer',
		date: 'January 2021 - April 2021',
		logo: '/codemy.png',
	},
	{
		company: 'Empty',
		role: 'Frontend Developer',
		date: 'January 2020 - April 2020',
		logo: '/codemy.png',
	},
	{
		company: 'Empty',
		role: 'Frontend Developer',
		date: 'January 2019 - April 2019',
		logo: '/codemy.png',
	},
	{
		company: 'Empty',
		role: 'Frontend Developer',
		date: 'January 2018 - April 2018',
		logo: '/codemy.png',
	},
	{
		company: 'Empty',
		role: 'Frontend Developer',
		date: 'May 2017 - August 2017',
		logo: '/codemy.png',
	},
];

export const footerLinks = [
	{ link: 'https://t.me/akmaljonmuhammadjon0v', icon: Send },
	{ link: 'https://www.instagram.com/akmal__dev/', icon: Instagram },
	{
		link: 'https://www.linkedin.com/in/akmaljon-muhammadjonov',
		icon: Linkedin,
	},
	{ link: 'https://github.com/akmaljonmuhammadjonov07/', icon: LucideGithub },
];

export const contactLinks = [
	{ link: 'https://t.me/akmaljonmuhammadjon0v', icon: Send },
	{ link: 'https://www.instagram.com/akmal__dev/', icon: Instagram },
	{
		link: 'https://www.linkedin.com/in/akmaljon-muhammadjonov',
		icon: Linkedin,
	},
	{ link: 'https://github.com/akmaljonmuhammadjon0v/', icon: Github },
	{ link: 'mailto:info@akmaldev.uz', icon: Mail },
];
