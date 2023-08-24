import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Navbar />
      {children} bottom
    </div>
  );
}
