import Image from 'next/image';
import gitHubUserSearchAPi from '@/public/GitHubUserSearchAPI.png';
import Link from 'next/link';

export default function ProjectContainer() {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row my-20'>
        <div className='md:max-w-[75%] lg:max-w-[55rem] mx-auto px-6 mb-6 '>
          <div className='w-fit rounded-lg overflow-hidden'>
            <Image src={gitHubUserSearchAPi} alt='GitHubUserSearchAPI image' />
          </div>
        </div>

        <div className='p-4 '>
          <div className='w-fit mx-auto md:m-0'>
            <h3 className='text-sky-900 font-bold text-lg md:text-xl lg:text-2xl tracking-wider'>
              GitHubUserSearchAPI
            </h3>
            <p className='w-fit text-[.8rem] lg:text-base bg-slate-100 text-slate-700'>
              challenge by Frontend Mentor
            </p>
          </div>

          <p className='max-w-[25rem] mx-auto text-center text-sm lg:text-lg md:text-left mt-4'>
            This is a simple project that uses the GitHub API to search for
            users and display their information.
          </p>

          <div className='w-fit mx-auto mt-2 md:mx-0 lg:mt-8'>
            <Link
              className='cursor-pointer text-sm lg:text-lg text-sky-900 font-bold tracking-wide'
              href='https://github.com/damianrobert/GitHubUserSearchAPI'
              target='_blank'
            >
              Code
            </Link>{' '}
            |{' '}
            <Link
              className='cursor-pointer text-sm lg:text-lg text-sky-900 font-bold tracking-wide'
              href='https://git-hub-user-search-api.vercel.app/'
              target='_blank'
            >
              Live Site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
