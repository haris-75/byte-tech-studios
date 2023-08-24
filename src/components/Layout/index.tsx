
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
