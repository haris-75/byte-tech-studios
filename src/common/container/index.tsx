import React from 'react';

export default function Container({
  children,
  customClass,
  bgColor,
}: {
  children: JSX.Element | JSX.Element[];
  customClass: string;
  bgColor: string;
}) {
  return (
    <section className={`${bgColor} w-screen`}>
      <div
        className={`xl:px-[120px] xl:py-[60px] lg:px-[100px] lg:py-[50px] md:px-[70px] md:py-[35px] sm:px-[50px] sm:py-[25px] px-[40px] py-[20px] max-w-[1440px] m-auto ${customClass}`}
      >
        {children}
      </div>
    </section>
  );
}
