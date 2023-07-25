'use client';
import { useState } from 'react';
import { Icons } from './Icons';

export default function MobileSideMenu() {
  const [open, setOpen] = useState(false);

  const handleSideMenu = () => {
    setOpen(!open);
  };
  return (
    <div className='md:hidden'>
      <div
        className={open ? 'hidden' : 'block cursor-pointer'}
        onClick={handleSideMenu}
      >
        <Icons.hamburgerMenu height={28} width={28} stroke='black' />
      </div>

      <div
        className={open ? 'block cursor-pointer float-right' : 'hidden'}
        onClick={handleSideMenu}
      >
        <Icons.x height={28} width={28} stroke='black' />
      </div>

      <div
        className={
          open
            ? 'flex flex-col items-center justify-center border-l border-black min-h-screen p-4 w-[10rem]'
            : 'hidden'
        }
      >
        <div className='bg-zinc-200 p-[.2rem] rounded-md w-fit'>
          <Icons.github height={24} width={24} stroke='black' />
        </div>
      </div>
    </div>
  );
}
