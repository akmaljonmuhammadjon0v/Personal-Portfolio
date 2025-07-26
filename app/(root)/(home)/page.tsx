import Education from '../_components/education/edu';
import SkillApp from '../_components/skills';
import Image from 'next/image';
import HomePageModal from '@/components/shared/HomePageModal';
import dynamic from 'next/dynamic';

const Projects = dynamic(
	() => import('../_components/featured-projects/project')
);
function HomePage() {
	return (
		<div className='relative'>
			<section className='text-gray-600 body-font '>
				<div className='container mx-auto flex px-5 py-10 items-center justify-center flex-col'>
					<Image
						src='/akmaldev.webp'
						alt='Akmaljon Muhammadjonov'
						width={120}
						height={120}
						loading='eager'
						className='mb-10 object-cover object-center rounded-full text-white'
						priority
					/>
					<div className='text-center lg:w-2/3 grid justify-items-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-blue-400'>
							Akmaljon Muhammadjonov
						</h1>{' '}
						<p className='mb-8 leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl'>
							Hello! My name is <span className='font-bold'>Akmaljon</span>. I
							am a passionate <span className='font-bold'>Frontend</span>{' '}
							developer with more than 1 year of experience. I specialize in
							creating <span className='font-bold'>responsive</span>, modern and
							user-friendly websites that leave a lasting impression, and I m a
							<span className='p-1'>
								<span className='font-bold'>React.js</span>
								{'  '}/{'  '}
								<span className='font-bold'>Next.js</span>
								{'  '}developer.
							</span>
						</p>
						<div className='justify-center gap-3 sm:flex max-sm:flex md:flex'>
							<HomePageModal />
						</div>
					</div>
				</div>
			</section>
			{/* <section>
				<WorkExperience />
			</section> */}
			<section>
				<Education />
			</section>
			<section>
				<SkillApp />
			</section>
			<section>
				<Projects />
			</section>
		</div>
	);
}

export default HomePage;
