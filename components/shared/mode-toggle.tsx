'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

function ModeToggle() {
	const [mount, setMount] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMount(true), []);

	return mount && resolvedTheme === 'dark' ? (
		<Button
			aria-label='sun'
			size={'icon'}
			variant={'ghost'}
			onClick={() => setTheme('light')}
		>
			<Sun />
		</Button>
	) : (
		<Button
			aria-label='moon'
			size={'icon'}
			onClick={() => setTheme('dark')}
			variant={'secondary'}
		>
			<Moon />
		</Button>
	);
}

export default ModeToggle;
