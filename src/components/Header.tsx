import Link from 'next/link';
import waving_hand from '../../public/waving_hand.png';
import Image from 'next/image';
import { Icons } from './Icons';
import html5 from '@/public/html5.png';
import css3 from '@/public/css3.png';
import js from '@/public/javascript.png';
import react from '@/public/react.png';
import nextjs from '@/public/nextjs.png';
import tailwindcss from '@/public/tailwindcss.png';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='h-screen relative'>
      <Navbar />
      <section className='max-w-[22rem] md:max-w-[29rem] lg:max-w-[35rem] mx-auto mt-36 relative'>
        <p className='text-sm md:text-base'>
          Hi. My name is{' '}
          <span className='font-bold tracking-wide bg-zinc-100'>
            Damian Radulescu
          </span>
          , i&apos;m a
        </p>

        <h1 className='text-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider'>
          Front-End React Developer 👋🏻
        </h1>

        <p className='text-[.8rem] md:text-base lg:text-lg text-left text-zinc-600 mt-4 lg:mt-8'>
          Transforming ideas into captivating digital realities. Step into my
          front-end world and witness the art of innovation come to life.
        </p>

        <div className='hidden md:flex mt-2'>
          <div className='w-7 h-7 lg:w-9 lg:h-9 bg-zinc-300 rounded-md mx-2 flex items-center justify-center cursor-pointer hover:border-b-2 border-black'>
            <Link href='https://github.com/damianrobert' target='_blank'>
              <Icons.github height={24} width={24} stroke='black' />
            </Link>
          </div>

          <div className='w-7 h-7 lg:w-9 lg:h-9 bg-zinc-300 rounded-md mx-2 flex items-center justify-center cursor-pointer hover:border-b-2 border-black'>
            <Link
              href='https://www.linkedin.com/in/roberto-damian-radulescu-214432253/'
              target='_blank'
            >
              <Icons.linkedin height={24} width={24} stroke='black' />
            </Link>
          </div>
        </div>
        <div className='hidden md:flex items-center mt-4'>
          <div className=''>
            <Icons.mapPin width={15} height={15} stroke='black' />
          </div>
          <p className='lg:text-lg'>Bucharest</p>
        </div>

        <div className='hidden md:flex mt-12 w-full justify-between items-center mb-96'>
          <p className='lg:text-lg'>Tech Stack</p>

          <div className='my-4 w-8'>
            <Image src={html5} alt='' />
          </div>

          <div className='my-4 w-8'>
            <Image src={css3} alt='' />
          </div>

          <div className='my-4 w-8'>
            <Image src={js} alt='' />
          </div>

          <div className='my-4 w-8'>
            <Image src={react} alt='' />
          </div>

          <div className='my-4 w-8'>
            <Image src={nextjs} alt='' />
          </div>

          <div className='my-4 w-8'>
            <Image src={tailwindcss} alt='' />
          </div>
        </div>
      </section>

      <div className='absolute left-1/2 bottom-0 move-up-down '>
        <Icons.chevronDown height={30} width={30} stroke='black' />
      </div>
    </header>
  );
}
