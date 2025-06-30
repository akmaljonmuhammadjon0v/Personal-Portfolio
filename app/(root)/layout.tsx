import { ChildProps } from '@/types';

import Footer from './_components/footer/footer';
import Navbar from '@/components/shared/navbar';

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='py-24 text-black dark:text-white overflow-hidden'>
				{children}
			</div>
			<Footer />
		</main>
	);
}

export default Layout;
