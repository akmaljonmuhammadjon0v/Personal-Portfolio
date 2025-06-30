'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { toast } from 'sonner';
import { contactLinks } from '@/constants';

export default function ContactForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'form'>) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		if (!email || !name || !message) {
			toast.error('Iltimos, hammasini kiriting! ❌');
			setLoading(false);
			return;
		}

		const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
		const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

		if (!BOT_TOKEN || !CHAT_ID) {
			toast.error('Bot token yoki chat ID topilmadi! ❌');
			setLoading(false);
			return;
		}

		const TEXT = `📫 Yangi xabar!\n\n📧 Email: ${email}\n✉️ Xabar: ${message} \n👤 Ismi: ${name}`;
		const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
			});

			if (response.ok) {
				toast.success('Xabar muvaffaqiyatli yuborildi! ✅');
				setEmail('');
				setMessage('');
				setName('');
			} else {
				toast.error('Xatolik yuz berdi! ❌');
			}
		} catch (error) {
			console.log(error);

			toast.error('Server bilan aloqa o‘rnatilmadi! ❌');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={cn('flex flex-col gap-6', className)}
			{...props}
		>
			<div className='flex flex-col items-center gap-2 text-center'>
				<h1 className='text-2xl font-bold'>Contact Me</h1>
				<p className='text-sm dark:text-muted-foreground text-gray-600'>
					Email va xabaringizni kiriting, biz tez orada javob beramiz.
				</p>
			</div>
			<div className='grid gap-6'>
				<div className='grid gap-2'>
					<Label htmlFor='email' className='text-gray-600 dark:text-white'>
						Email
					</Label>
					<Input
						id='email'
						type='email'
						placeholder='example@gmail.com'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='dark:bg-secondary bg-gray-200'
						required
					/>
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='email' className='text-gray-600 dark:text-white'>
						Your name
					</Label>
					<Input
						id='name'
						type='name'
						placeholder='Create your name'
						value={name}
						onChange={e => setName(e.target.value)}
						className='dark:bg-secondary bg-gray-200'
						required
					/>
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='message' className='text-gray-600 dark:text-white'>
						Message
					</Label>
					<Input
						id='message'
						type='text'
						placeholder='Xabaringizni kiriting...'
						value={message}
						onChange={e => setMessage(e.target.value)}
						className='dark:bg-secondary bg-gray-200'
						required
					/>
				</div>
				<Button
					onClick={handleSubmit}
					className='w-full dark:bg-blue-500 bg-blue-600 text-white dark:text-black'
					disabled={loading}
				>
					{loading ? 'Yuborilmoqda...' : 'Send Message'}
				</Button>
				<div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
					<span className='relative z-10 bg-background px-2 dark:text-muted-foreground text-gray-600'>
						Or continue with
					</span>
				</div>
				<div className='flex gap-3 justify-center'>
					{contactLinks.map((icon, i) => (
						<Link key={i} href={icon.link} target='_blank'>
							<Button
								variant='secondary'
								className='dark:bg-secondary bg-slate-200'
								size='icon'
								aria-label='social'
								asChild
							>
								<span>
									<icon.icon className='w-5 h-5' />
								</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</form>
	);
}
