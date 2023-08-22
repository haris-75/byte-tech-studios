import React from 'react';

export default function Input({
  type,
  id,
  label,
  required,
}: {
  type: string;
  id: string;
  label: string;
  required: boolean;
}) {
  return (
    <div>
      <label
        className='font-work-sans capitalize mb-[16px]'
        htmlFor={id}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className='w-full h-[75px] bg-[#eee] border-black border-[1px] rounded-[5px]'
          id={id}
          required={required}
        />
      ) : (
        <input
          className='w-full bg-[#eee] border-black border-[1px] rounded-[5px] h-[38px]'
          type={type}
          id={id}
          required={required}
        />
      )}
    </div>
  );
}
