'use client';

import { useState } from 'react';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Resume() {
	const [open, setOpen] = useState(false);

	const handleDownload = (lang: 'uz' | 'en') => {
		const file =
			lang === 'uz' ? '/resume/resume-uzbek.pdf' : '/resume/resume-english.pdf';

		window.open(file, '_blank');
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>Download Resume</Button>
			</DialogTrigger>

			<DialogContent className='sm:max-w-xs max-sm:max-w-sm md:max-w-lg max-md:max-w-lg lg:max-w-lg xl:max-w-md'>
				<DialogHeader>
					<DialogTitle>Tilni tanlang / Select Language:</DialogTitle>
				</DialogHeader>

				<div className='flex justify-start gap-4 py-2'>
					<Button variant='default' onClick={() => handleDownload('uz')}>
						O‘zbekcha
					</Button>
					<Button variant='outline' onClick={() => handleDownload('en')}>
						English
					</Button>
				</div>

				<DialogFooter>
					<Button variant='ghost' onClick={() => setOpen(false)}>
						Bekor qilish
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
