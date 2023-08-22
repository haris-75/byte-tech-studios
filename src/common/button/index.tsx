import React from 'react';

export default function Button({
  text,
  variant,
  customClass,
}: {
  text: string;
  variant: string;
  customClass?: string;
}) {
  return (
    <button
      className={`font-work-sans rounded-[5px] lg:px-10 lg:py-2 md:px-7 md:py-1.5 px-5 py-1 ${customClass} ${
        variant === 'light' ? 'bg-white text-dark' : 'bg-dark text-white'
      }`}
    >
      {text}
    </button>
  );
}
