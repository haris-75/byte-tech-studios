import React from 'react';
import { P } from '../Typography';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import twitter from '@/assets/twitter.svg';
import pinterest from '@/assets/pinterest.svg';
import tiktok from '@/assets/tiktok.svg';
import whatsapp from '@/assets/whatsapp.svg';
import youtube from '@/assets/youtube.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex sm:flex-row flex-col gap-4 w-full justify-between items-center  bg-primary xl:px-[100px] xl:py-[50px] lg:px-[80px] lg:py-[40px] md:px-[60px] md:py-[30px] sm:px-[40px] sm:py-[20px] px-[30px] py-[15px]'>
      <div className='flex gap-5'>
        <Image
          src={facebook}
          alt='facebook-icon'
        />
        <Image
          src={instagram}
          alt='instagram-icon'
        />
        <Image
          src={twitter}
          alt='twitter-icon'
        />
        <Image
          src={pinterest}
          alt='pinterest-icon'
        />
        <Image
          src={tiktok}
          alt='tiktok-icon'
        />
        <Image
          src={whatsapp}
          alt='whatsapp-icon'
        />
        <Image
          src={youtube}
          alt='youtube-icon'
        />
      </div>
      <P customClass='text-white font-work-sans'>
        © Start, 2022. All rights reserved.
      </P>
    </footer>
  );
}
