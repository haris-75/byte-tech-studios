import Link from 'next/link';
import React from 'react';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <nav>
        <ul className='flex gap-2'>
          <li>
            <Link
              className='cursor-pointer'
              href=''
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className='cursor-pointer'
              href='/portfolio'
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className='cursor-pointer'
              href='/services'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className='cursor-pointer'
              href='/contact'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {children} bottom
    </div>
  );
}
