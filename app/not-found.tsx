'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
	const [mounted, setMounted] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const router = useRouter();

	useEffect(() => {
		setMounted(true);

		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	if (!mounted) return null;

	return (
		<div className='min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20'>
			{/* Animated Background Elements */}
			<div className='absolute inset-0 overflow-hidden'>
				{/* Floating Shapes */}
				<div className='absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-500'></div>
				{/* Floating Stars */}
				<div className='absolute inset-0 z-0'>
					{[...Array(12)].map((_, i) => (
						<div
							key={i}
							className='absolute pointer-events-none spin-slow'
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								zIndex: 1,
							}}
						>
							<Star className='w-1 h-1 text-purple-300/30 dark:text-purple-400/8 fill-current' />
						</div>
					))}
				</div>
			</div>

			{/* Mouse Follower Effect */}
			<div
				className='fixed w-3 h-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-lg opacity-15 dark:opacity-8 pointer-events-none transition-all duration-700 ease-out z-0'
				style={{
					left: mousePosition.x - 6,
					top: mousePosition.y - 6,
				}}
			/>

			{/* Main Content */}
			<div className='relative z-30 min-h-screen flex items-center justify-center p-4'>
				<Card className='w-full max-w-lg mx-auto shadow-2xl shadow-slate-800 border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl'>
					<CardContent className='p-10 text-center space-y-8'>
						{/* Animated 404 with Sparkles */}
						<div className='relative space-y-4'>
							<div className='relative inline-block'>
								<h1 className='text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-pulse select-none'>
									404
								</h1>
								<Sparkles
									className='absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-pulse'
									style={{ animationDuration: '3s' }}
								/>
								<Sparkles
									className='absolute -bottom-2 -left-2 w-6 h-6 text-pink-400 animate-bounce'
									style={{ animationDuration: '2s' }}
								/>
							</div>
							<div className='flex justify-center'>
								<div className='w-24 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse'></div>
							</div>
						</div>

						{/* Error Message with Animation */}
						<div className='space-y-4 animate-fade-in'>
							<h2 className='text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent'>
								Oops! Page Not Found
							</h2>
							<p className='text-slate-600 dark:text-slate-400 leading-relaxed text-lg'>
								Sorry, the page you{`'`}re looking for doesn{`'`}t exist. It may
								have been moved, deleted, or you entered the wrong URL.
							</p>
						</div>

						{/* Animated Action Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 pt-0'>
							<Button
								asChild
								className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
							>
								<Link
									href='/'
									className='flex items-center justify-center gap-2'
								>
									<Home className='w-5 h-5' />
									Home
								</Link>
							</Button>
							<Button
								variant='outline'
								onClick={() => router.back()}
								className='flex-1 border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-800 dark:hover:border-purple-700 dark:hover:bg-purple-900/20 transition-all duration-300 transform hover:scale-105 bg-transparent'
							>
								<ArrowLeft className='w-5 h-5' />
								Go Back
							</Button>
						</div>

						{/* Enhanced Search Section */}

						{/* Fun Quote */}
						<div className='pt-0'>
							<p className='text-sm text-slate-500 dark:text-slate-400 italic'>
								{'Even lost pages have their own story'} ✨
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Custom CSS for animations */}
			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fade-in 0.8s ease-out;
				}
				@media (prefers-color-scheme: dark) {
					.animate-pulse {
						animation-duration: 6s !important;
					}
					.animate-spin {
						animation-duration: 12s !important;
					}
					.animate-bounce {
						animation-duration: 4s !important;
					}
				}
			`}</style>
		</div>
	);
}
