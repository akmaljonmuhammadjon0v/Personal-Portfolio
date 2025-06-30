'use client';

import { footerLinks } from '@/constants';
import { Mail } from 'lucide-react';
import React from 'react';

function FooterNav() {
	return (
		<div>
			<div className='sticky bottom-5 z-50 w-full max-w-sm sm:max-w-md rounded-full flex justify-center items-center gap-6 text-black dark:text-white'>
				<a
					href='mailto:info@akmaldev.uz'
					className='flex items-center gap-2 transition-transform duration-200 hover:scale-110 active:scale-95 hover:text-black dark:hover:text-white'
					aria-label='mail'
				>
					<Mail className='w-5 h-5' />
					<span className='hidden sm:inline'>info@akmaldev.uz</span>
				</a>

				<div className='h-6 w-px bg-gray-500 hidden sm:block' />

				{footerLinks.map(social => (
					<a
						key={social.link}
						href={social.link}
						aria-label={social.link}
						className='transition-transform duration-150 hover:scale-125 active:scale-95 dark:hover:text-gray-300 hover:text-black'
					>
						<social.icon className='w-5 h-5' />
					</a>
				))}
			</div>
		</div>
	);
}

export default FooterNav;
