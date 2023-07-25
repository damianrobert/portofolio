import MobileSideMenu from './MobileSideMenu';

export default function Navbar() {
  return (
    <nav className='p-2 flex justify-between'>
      <div>
        <p className='font-bold text-xl md:text-3xl lg:text-4xl hover:bg-black hover:text-white cursor-none'>
          damian.dev
        </p>
      </div>

      <MobileSideMenu />
    </nav>
  );
}
