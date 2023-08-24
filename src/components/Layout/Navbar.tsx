import Logo from '@/assets/logo.png';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { H4 } from '../Typography';

const navArray = ['home', 'portfolio', 'services', 'contact'];

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div className='relative'>
      <nav className='z-50 bg-primary flex sticky top-0 justify-between py-6 xl:px-[100px] lg:px-[60px] md:px-6 sm:px-10 px-8'>
        {/* Nav Left */}

        <div className='flex lg:gap-4 md:gap-2 items-center'>
          <div className='p-1.5 flex gap-4'>
            <Image
              width={40}
              src={Logo}
              alt='logo'
            />
            <H4 customClass='font-work-sans text-white mt-[1px]'>
              Byte Tech Studios
            </H4>
          </div>
        </div>
        {/* Nav Right */}
        <ul className='sm:flex hidden xl:gap-8 md:gap-6 sm:gap-4 items-center font-work-sans text-white '>
          {navArray?.map((ele) => (
            <li
              onClick={() => setShowMobileNav(!showMobileNav)}
              key={ele}
              className='cursor-pointer capitalize'
            >
              <Link href={`/${ele !== 'home' ? ele : ''}`}>{ele}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Icon */}
        <div
          className='md:hidden block my-auto'
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <div
            className={`hamburger ${showMobileNav ? 'show-mobile-nav' : ''}`}
          ></div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <ul
        className={`px-9 pb-8 transition-all duration-1000 z-[20] w-full ${
          showMobileNav ? 'top-[87px]' : '-top-[200%]'
        } md:hidden absolute bg-primary left-0 text-white border-b-2 border-white`}
      >
        {navArray?.map((ele) => (
          <li
            key={ele}
            className='cursor-pointer capitalize py-1'
          >
            <Link
              onClick={() => setShowMobileNav(!showMobileNav)}
              href={`/${ele !== 'home' ? ele : ''}`}
            >
              {ele}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
