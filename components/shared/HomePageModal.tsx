import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import { ArrowRight } from 'lucide-react';
import Skill from '@/app/(root)/_components/skills/skill';
import { skills } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';

function HomePageModal() {
	return (
		<div className=''>
			{' '}
			<Dialog>
				<DialogTrigger asChild>
					<button className='group relative cursor-pointer p-2 w-32 border dark:bg-white bg-slate-300 rounded-full overflow-hidden text-black text-center font-semibold'>
						<span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
							About
						</span>
						<div className='flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
							<span>About</span>
							<ArrowRight />
						</div>
						<div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-blue-500 group-hover:bg-[#7a7f9a] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
					</button>
				</DialogTrigger>
				<DialogContent className='xl:max-w-5xl xl:h-[80vh] xl:overflow-hidden md:max-w-2xl max-md:max-w-6xl max-md:h-[75vh] max-md:overflow-y-scroll max-sm:max-w-sm md:h-[75vh] sm:max-w-md max-sm:h-[85vh] max-sm:overflow-y-scroll md:overflow-y-auto sm:block md:block'>
					<DialogHeader>
						<DialogTitle>My profile</DialogTitle>
					</DialogHeader>
					<div className='space-y-4'>
						<section>
							<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
								Personal Info
							</h2>
							<p className='dark:text-gray-400 text-gray-600'>
								My name is Akmaljon, and I am 17 years old. I am a Junior
								Frontend Developer with over a year of experience in web
								development. I am a Frontend Developer with more than 1 year of
								experience in HTML, CSS, JavaScript, TypeScript, ReactJS and
								Next.js. During this time, I have successfully built and
								delivered many websites, including fullstack projects and fully
								functional Telegram bots. My goal is to become a full stack
								developer and contribute to large projects. I am passionate
								about learning new technologies and creating high quality
								solutions that meet customer needs
							</p>
						</section>
						<section>
							<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
								Skills
							</h2>
							<div className='flex gap-2 justify-start'>
								<div className='flex gap-3 flex-wrap max-w-3xl my-3 max-md:justify-center'>
									{skills.map((skill, index) => (
										<div key={index} className='flex flex-wrap'>
											<Skill title={skill.title} />
										</div>
									))}
								</div>
							</div>
						</section>
						<section>
							<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
								Education
							</h2>
							<p className='dark:text-gray-400 text-gray-600'>
								I have studied programming at {'Sammi Platform'}, {'Codemy'},{' '}
								{'GeeksforGeeks'}, and {'AmigosCode'}, completing online courses
								and earning certificates in web development.
							</p>
						</section>

						<section>
							<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
								My Resume
							</h2>
							<Link
								target='_blank'
								rel='noreferrer'
								href={'/resume/Resume.pdf'}
								title='CV'
							>
								<Button>Download CV</Button>
							</Link>
						</section>
						<section>
							<div className='flex flex-col space-y-2'>
								<p className='text-gray-400'>Feel free to reach out:</p>
								<div className='flex gap-2 items-center'>
									<Link
										href='mailto:info@akmaldev.uz'
										className='text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold'
									>
										info@akmaldev.uz
									</Link>
									<span>or</span>
									<Link
										href={'https://t.me/akmaljonmuhammadjon0v'}
										className='text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold'
									>
										Telegram
									</Link>
								</div>
							</div>
						</section>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default HomePageModal;
