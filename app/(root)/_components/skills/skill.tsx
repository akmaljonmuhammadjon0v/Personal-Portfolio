import { Badge } from '@/components/ui/badge';
import { UserCardProps } from '@/types';
import React from 'react';

function Skill({ title }: UserCardProps) {
	return (
		<div className='flex'>
			<Badge>{title}</Badge>
		</div>
	);
}

export default Skill;
