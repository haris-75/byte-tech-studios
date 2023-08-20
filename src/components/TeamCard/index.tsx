import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { H3, P } from '../Typography';

export default function TeamCard({
  name,
  title,
  alt,
  img,
}: {
  name: string;
  title: string;
  alt: string;
  img: StaticImageData;
}) {
  return (
    <div className='flex flex-col xl:gap-5 lg:gap-4 md:gap-2.5 rounded-[5px] shadow-4xl lg-xl:px-6 lg-xl:py-5 lg:px-4 lg:py-3 md:px-4 md:py-3 px-5 py-4'>
      <Image
        className='xl:max-w-[175px] lg-xl:max-w-[160px] lg:max-w-[150px] md-lg:max-w-[130px] max-w-[170px]'
        src={img}
        alt={alt}
      />
      <H3 customClass='font-crimson-text'>{name}</H3>
      <P customClass='uppercase text-dark font-work-sans'>{title}</P>
    </div>
  );
}
