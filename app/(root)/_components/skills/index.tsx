import { skills } from '@/constants';
import Skill from './skill';

const SkillApp = () => {
	return (
		<div className='max-w-4xl md:max-w-2xl xl:max-w-4xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-4 sm:text-start text-center'>
				Skills
			</h2>
			<div className='flex gap-3 flex-wrap max-w-3xl max-md:justify-center'>
				{skills.map((skill, index) => (
					<div key={index} className='flex flex-wrap'>
						<Skill title={skill.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillApp;
