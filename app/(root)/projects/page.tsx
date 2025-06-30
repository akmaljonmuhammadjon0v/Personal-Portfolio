'use client';
import { useEffect } from 'react';
import ProjectCard from '@/components/Cards/ProjectCard';
import { projects } from '@/constants';

export default function Page() {
	useEffect(() => {
		document.title = 'All Projects';
	}, []);

	return (
		<section className='py-12 pb-0'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl font-bold text-center mb-8'>My Projects</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl m-auto gap-6'>
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
