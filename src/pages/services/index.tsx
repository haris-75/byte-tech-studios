import Button from '@/common/Button';
import Container from '@/common/Container';
import { H2, H1, P } from '@/components/Typography';
import checkIcon from '@/assets/check.svg';
import Image from 'next/image';

const ServiceCard = ({ price, title }: { price: string; title: string }) => (
  <div className=' text-center flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-3 rounded-[5px] shadow-4xl lg-xl:px-6 lg-xl:py-5 lg:px-4 lg:py-3 md:px-4 md:py-3 px-5 py-4'>
    <P customClass='font-work-sans text-black capitalize'>{title}</P>
    <header className='flex gap-2 justify-center items-center'>
      <H1 customClass='font-work-sans text-black'>{price}</H1>
      <P customClass='font-work-sans text-gray'>{'/month'}</P>
    </header>
    <P customClass='font-work-sans text-gray max-w-[270px]'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo
      hic quos, ab, dolor aperiam
    </P>
    <div>
      <span className='flex lg:gap-3 md:gap-1 gap-2 items-center justify-center'>
        <Image
          src={checkIcon}
          alt='check-icon'
        />
        <P customClass='font-work-sans text-dark md:text-[10px] md:leading-[12px] md-lg:text-[14px] md-lg:leading-[17px]'>
          Lorem ipsum, dolor sit
        </P>
      </span>
      <span className='flex lg:gap-3 md:gap-1 gap-2 items-center justify-center'>
        <Image
          src={checkIcon}
          alt='check-icon'
        />
        <P customClass='font-work-sans text-dark md:text-[10px] md:leading-[12px] md-lg:text-[14px] md-lg:leading-[17px]'>
          Lorem ipsum, dolor sit
        </P>
      </span>
      <span className='flex lg:gap-3 md:gap-1 gap-2 items-center justify-center'>
        <Image
          src={checkIcon}
          alt='check-icon'
        />
        <P customClass='font-work-sans text-dark md:text-[10px] md:leading-[12px] md-lg:text-[14px] md-lg:leading-[17px]'>
          Lorem ipsum, dolor sit
        </P>
      </span>
      <span className='flex lg:gap-3 md:gap-1 gap-2 items-center justify-center'>
        <Image
          src={checkIcon}
          alt='check-icon'
        />
        <P customClass='font-work-sans text-dark md:text-[10px] md:leading-[12px] md-lg:text-[14px] md-lg:leading-[17px]'>
          Lorem ipsum, dolor sit
        </P>
      </span>
      <span className='flex lg:gap-3 md:gap-1 gap-2 items-center justify-center'>
        <Image
          src={checkIcon}
          alt='check-icon'
        />
        <P customClass='font-work-sans text-dark md:text-[10px] md:leading-[12px] md-lg:text-[14px] md-lg:leading-[17px]'>
          Lorem ipsum, dolor sit
        </P>
      </span>
    </div>
    <div className='m-auto'>
      <Button
        text='Learn More'
        variant='dark'
      />
    </div>
  </div>
);

export default function Services() {
  return (
    <main>
      <Container
        customClass='bg-white flex flex-col xl:gap-[80px] lg:gap-[40px] md:gap-[20px] gap-[30px] justify-between items-center'
        bgColor='bg-white'
      >
        <header className='text-black text-center lg:max-w-[380px] max-w-[300px] font-work-sans'>
          <H2 customClass='text-primary'>Plans</H2>
          <H1 customClass='capitalize my-2'>Our Services</H1>
          <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>
        </header>
        <div className='grid md:grid-cols-3 xl:gap-14 lg:gap-12 md:gap-10 sm:gap-6 items-center sm:flex-row flex-col gap-5'>
          <ServiceCard
            price='100'
            title='basic'
          />
          <ServiceCard
            price='250'
            title='plus'
          />
          <ServiceCard
            price='400'
            title='pro'
          />
        </div>
      </Container>
    </main>
  );
}
