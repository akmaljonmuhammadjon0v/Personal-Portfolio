import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from 'sonner';
import { Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ChildProps } from '@/types';

const robotoSans = Roboto({
	variable: '--font-roboto-sans',
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://akmaldev.uz'),
	title: 'Akmaljon Muhammadjonov - Frontend Developer',
	description:
		'Hello! My name is Akmaljon. I am a passionate Frontend developer with more than 1 year of experience. I specialize in creating responsive, modern and user-friendly websites that leave a lasting impression, and I m a React.js / Next.js developer.',
	authors: [{ name: 'Akmaljon Muhammadjonov', url: 'https://akmaldev.uz' }],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-icon.png',
	},
	keywords: [
		'Akmaljon Muhammadjonov',
		'Akmal Muhammadjonov',
		'akmal muhammadjonov',
		'Akmaldev',
		'akmaldev',
		'Personal Portfolio',
		'Portfolio',
		'Web Developer',
		'Frontend Developer',
		'React portfolio',
		'Next.js portfolio',
		'Frontend developer portfolio',
		'Web developer portfolio',
		'Modern Portfolio',
		'Responsive Portfolio',
	],
	openGraph: {
		title: 'Akmaljon Muhammadjonov - Portfolio, Blog & IT',
		description:
			'Hello! My name is Akmaljon. I am a passionate Frontend developer with more than 1 year of experience. I specialize in creating responsive, modern and user-friendly websites that leave a lasting impression, and I m a React.js / Next.js developer.',
		type: 'website',
		url: 'https://akmaldev.uz',
		locale: 'en_EN',
		images:
			'https://www.setu.ie/Craft/assets/banners/_800x418_crop_center-center_82_none/informationtech.jpg?mtime=1711539742',
		countryName: 'Uzbekistan',
		siteName: 'Akmaljon | Frontend Developer',
		emails: 'info@akmaldev.uz',
	},
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${robotoSans.variable} antialiased scroll-smooth`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader showSpinner={false} />
					<Toaster position='top-center' />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
