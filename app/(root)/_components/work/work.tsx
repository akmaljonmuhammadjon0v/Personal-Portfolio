import { experiences } from '@/constants';
import Image from 'next/image';

const WorkExperience = () => {
	return (
		<div className='max-w-4xl md:max-w-2xl xl:max-w-4xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-4'>Work Experience</h2>
			<ul className='space-y-6'>
				{experiences.map((exp, index) => (
					<li key={index} className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Image
								width={100}
								height={100}
								src={exp.logo}
								alt={exp.company}
								className='w-12 h-12 rounded-full mr-4'
							/>
							<div className='max-sm:text-xs'>
								<h3 className='font-semibold'>{exp.company}</h3>
								<p className='text-sm text-gray-600 dark:text-gray-400'>
									{exp.role}
								</p>
							</div>
						</div>
						<div className='max-sm:text-xs'>
							<p className='text-sm text-gray-500 dark:text-gray-300'>
								{exp.date}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WorkExperience;
