'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Globe, GithubIcon, ChevronRight } from 'lucide-react';
import { FeaturedProjectCardProps } from '@/types';

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
	return (
		<div className='w-[90%] group mx-auto rounded-xl overflow-hidden bg-slate-200 dark:text-white text-black cursor-pointer animate-border dark:border border dark:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent'>
			<div className='p-3 pb-1'>
				<figure className='h-80 bg-[#f0f5fa] dark:bg-[#0a121a] rounded-md overflow-hidden p-2 group-hover:h-72 transition-all duration-300'>
					<Image
						src={project.img}
						alt={project.title}
						width={500}
						height={500}
						loading='lazy'
						className='w-full h-72 object-cover rounded-lg border-4 group-hover:border-[#76aaf82d] transition-all duration-300'
					/>
				</figure>

				<article className='p-4 pb-0 space-y-3'>
					<div className='h-8 w-20 bg-[#4393fc] dark:bg-blue-600 rounded-md'></div>
					<h2 className='text-xl font-semibold capitalize'>{project.title}</h2>

					<div className='flex flex-col sm:flex-row justify-between gap-4'>
						<div className='flex flex-wrap gap-2'>
							{project.skills.map((skill, idx) => (
								<Tooltip key={idx}>
									<TooltipTrigger asChild>
										<div>
											<Image
												src={skill.icon}
												alt={skill.title}
												width={40}
												height={40}
												loading='lazy'
												className='w-10 h-10 border-2 rounded-full object-cover'
											/>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{skill.title}</p>
									</TooltipContent>
								</Tooltip>
							))}
						</div>

						<div className='flex gap-3'>
							<Link
								href={project.weblink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button variant='outline' size='icon' title='Live Demo'>
									<Globe />
								</Button>
							</Link>
							<Link
								href={project.gitlink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button variant='outline' size='icon' title='GitHub Repository'>
									<GithubIcon />
								</Button>
							</Link>
						</div>
					</div>

					<a
						href='#'
						className='text-base z-0 dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-0 flex gap-1 transition-all duration-300'
					>
						Learn about Atlas
						<span>
							<ChevronRight />
						</span>
					</a>
				</article>
			</div>
		</div>
	);
};

export default FeaturedProjectCard;
