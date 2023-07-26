'use client';
import { useState } from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import Image from 'next/image';
import html5 from '@/public/html5.png';
import css3 from '@/public/css3.png';
import js from '@/public/javascript.png';
import react from '@/public/react.png';
import nextjs from '@/public/nextjs.png';
import tailwindcss from '@/public/tailwindcss.png';

export default function MobileSideMenu() {
  const [open, setOpen] = useState(false);

  const handleSideMenu = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`md:hidden ${
        open ? 'bg-white backdrop-blur-2xl bg-opacity-[3px] ' : null
      } absolute top-0 right-0 z-10`}
    >
      <div
        className={open ? 'hidden' : 'block cursor-pointer p-1'}
        onClick={handleSideMenu}
      >
        <Icons.hamburgerMenu height={28} width={28} stroke='black' />
      </div>

      <div
        className={open ? 'block cursor-pointer float-right p-1' : 'hidden'}
        onClick={handleSideMenu}
      >
        <Icons.x height={28} width={28} stroke='black' />
      </div>

      <div
        className={
          open
            ? 'flex flex-col items-center min-h-screen p-4 pt-10 w-36'
            : 'hidden'
        }
      >
        <Link
          href='https://github.com/damianrobert'
          target='_blank'
          className='bg-zinc-200 p-[.2rem] my-2 rounded-md w-fit cursor-pointer'
        >
          <Icons.github height={24} width={24} stroke='black' />
        </Link>

        <Link
          href='https://www.linkedin.com/in/roberto-damian-radulescu-214432253/'
          target='_blank'
          className='bg-zinc-200 p-[.2rem] my-2 rounded-md w-fit cursor-pointer'
        >
          <Icons.linkedin height={24} width={24} stroke='black' />
        </Link>

        <div className='flex items-center'>
          <div className='w-fit mx-2 my-4'>
            <Icons.mapPin width={15} height={15} stroke='black' />
          </div>
          <p>Bucharest</p>
        </div>

        <div className='flex flex-col items-center mt-12'>
          <p>Tech Stack</p>
          <div className='border-b-2 border-black w-full' />
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
      </div>
    </div>
  );
}
