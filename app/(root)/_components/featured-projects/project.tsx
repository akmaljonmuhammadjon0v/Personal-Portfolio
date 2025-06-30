'use client';

import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { featured_projects } from '@/constants';
import FeaturedProjectCard from '@/components/Cards/FeaturedProjectCard';

export default function Projects() {
	return (
		<section className='py-10'>
			<h1 className='text-center text-3xl font-bold my-8'>Featured Projects</h1>
			<div className='max-w-6xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-4 px-4'>
				<TooltipProvider>
					{featured_projects.map((project, index) => (
						<FeaturedProjectCard key={index} project={project} />
					))}
				</TooltipProvider>
			</div>
		</section>
	);
}
