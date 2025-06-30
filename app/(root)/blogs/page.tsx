import BlogCard from '@/components/Cards/BlogCard';

import { getBlogs } from '@/service/blog.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Akmaldev's blogs",
};

async function Page() {
	const blogs = await getBlogs();

	return (
		<>
			<div className='container mx-auto max-w-6xl sm:px-10 px-5'>
				<div className='mt-16 gap-3'>
					<h1 className='text-4xl mb-2 font-semibold'>Blogs</h1>
					<p className='sm:w-[50%] max-sm:w-full text-sm font-medium dark:text-gray-400 text-gray-600'>
						{`Loyihalarimiz va yangiliklarimiz haqida ko'proq ma'lumot olish uchun
            eng so'nggi bloglarimizni o'qing 
						`}
					</p>
				</div>
				<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
					{blogs.map(blog => (
						<BlogCard key={blog.slug} {...blog} />
					))}
				</div>
			</div>
		</>
	);
}

export default Page;
