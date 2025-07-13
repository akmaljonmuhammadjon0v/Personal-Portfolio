'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Projects } from '@/types';

export default function ProjectCard({ project }: { project: Projects }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{
				scale: 1.02,
				rotate: 5,
				boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.35)',
			}}
			whileTap={{ scale: 0.92 }}
			transition={{ duration: 0.1, ease: 'easeInOut' }}
			className='bg-white dark:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] animate-border dark:text-white shadow-2xl rounded-2xl overflow-hidden p-4 transition-all relative border-[3px] border-transparent'
		>
			<motion.div
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
				className='absolute inset-0 border-[3px] border-transparent rounded-2xl'
				style={{
					border: 'conic-gradient(from 0deg, #6366f1, #ec4899, #6366f1)',
					maskImage: 'linear-gradient(white, white)',
					WebkitMaskImage: 'linear-gradient(white, white)',
				}}
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.3, ease: 'backInOut' }}
				className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10'
			/>
			<div className='relative w-full h-40 rounded-lg overflow-hidden'>
				<Image
					src={project.image}
					alt={project.title}
					width={400}
					height={200}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='p-4 relative z-10'>
				<h3 className='text-lg font-semibold dark:text-white text-gray-600'>
					{project.title}
				</h3>
				<h3 className='text-sm text-gray-600 dark:text-gray-300 min-h-12 flex items-center'>
					{project.description}
				</h3>
				<div className='gap-2 flex flex-wrap my-2 mb-4'>
					{project.skills?.map((skill, i) => (
						<Badge key={i}>{skill.title}</Badge>
					))}
				</div>
				<div className='flex items-center justify-between relative h-10 px-0'>
					<motion.a
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'
						whileHover={{ scale: 1.15 }}
						className='flex items-center gap-2 text-blue-600 dark:text-white hover:underline h-full'
					>
						View Demo <ExternalLink size={16} />
					</motion.a>

					<motion.a
						target='_blank'
						href={project.gitlink}
						rel='noopener noreferrer'
						whileHover={{ scale: 1.15, color: '#1d4ed8' }}
						className='h-full flex items-center'
					>
						<Button
							variant={'secondary'}
							size={'icon'}
							aria-label='github'
							className='h-full dark:bg-secondary bg-slate-300 p-2 flex items-center'
						>
							<Github />
						</Button>
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
}
