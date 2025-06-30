'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import FooterNav from './footer_nav';

function Footer() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		if (!email) {
			toast.error('Iltimos, email kiriting! ❌');
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

		const TEXT = `📫 Yangi obuna!\n📧 Email: ${email}`;
		const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
			});

			if (response.ok) {
				toast.success('Email muvaffaqiyatli yuborildi! ✅');
				setEmail('');
			} else {
				toast.error('Xatolik yuz berdi! ❌');
			}
		} catch (error) {
			console.error(error);
			toast.error('Server bilan aloqa o‘rnatilmadi! ❌');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex justify-center px-4 sm:px-6 lg:px-8'>
			<footer className='flex flex-col items-center py-10 container max-w-2xl space-y-12 text-center'>
				<h1 className='font-creteRound text-3xl sm:text-4xl md:text-5xl'>
					Get latest posts delivered right to your inbox
				</h1>

				<form
					className='flex flex-col sm:flex-row gap-4 w-full'
					onSubmit={handleSubmit}
				>
					<div className='relative z-0 flex w-full cursor-pointer items-center overflow-hidden rounded-md p-[1px]'>
						<div className='relative z-10 flex w-full dark:bg-[#020F18] bg-secondary border-gray-300 border dark:border-0 dark:text-white text-foreground rounded-md'>
							<Input
								value={email}
								onChange={e => setEmail(e.target.value)}
								type='email'
								className='w-full px-4 py-2 text-lg placeholder:text-gray-500 dark:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border-transparent animate-border dark:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500'
								placeholder='Your email address'
							/>
						</div>
					</div>

					<Button
						type='submit'
						size={'lg'}
						asChild={false}
						disabled={loading}
						className='group bg-slate-300 dark:bg-blue-600 shadow relative flex items-center justify-center overflow-hidden rounded-md font-medium'
					>
						<div className='flex gap-1 h-12 translate-y-0 items-center justify-center px-6 dark:text-white text-black transition group-hover:-translate-y-[150%]'>
							Join Today
							<User2 className='w-4 h-4' />
						</div>

						{loading ? (
							'Yuborilmoqda...'
						) : (
							<div className='absolute inline-flex gap-1 h-12 w-full translate-y-[100%] items-center justify-center bg-black dark:bg-gray-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0'>
								Join Today
								<User2 className='w-4 h-4' />
							</div>
						)}
					</Button>
				</form>
				<div className='sticky bottom-5 w-full max-w-sm sm:max-w-md p-4 dark:bg-secondary bg-slate-200 shadow-lg rounded-full flex justify-center items-center gap-6 text-black dark:text-white'>
					<FooterNav />
				</div>
			</footer>
		</div>
	);
}

export default Footer;
