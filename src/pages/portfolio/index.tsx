import Button from '@/common/button';
import Container from '@/common/container';
import { H2, H1, P } from '@/components/Typography';
import Image, { StaticImageData } from 'next/image';
import portfolio1 from '@/assets/portfolio-1.png';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.png';
import portfolio4 from '@/assets/portfolio-4.png';
import portfolio5 from '@/assets/portfolio-5.png';
import portfolio6 from '@/assets/portfolio-6.png';
import portfolio7 from '@/assets/portfolio-7.png';
import portfolio8 from '@/assets/portfolio-8.png';

const ImgContainer = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <Image
    className=' border-black border-[1px] rounded-[8px]'
    src={src}
    alt={alt}
  />
);

export default function Portfolio() {
  return (
    <main>
      <Container
        customClass='bg-white flex flex-col xl:gap-[80px] lg:gap-[40px] md:gap-[20px] gap-[30px] justify-between items-center'
        bgColor='bg-white'
      >
        <header className='text-black text-center lg:max-w-[380px] max-w-[300px] font-work-sans'>
          <H2 customClass='text-primary'>Works</H2>
          <H1 customClass='capitalize my-2'>Portfolio</H1>
          <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>
        </header>
        <div className='grid md:grid-cols-2 xl:gap-14 lg:gap-12 md:gap-10 sm:gap-6 items-center sm:flex-row flex-col gap-5'>
          <ImgContainer
            src={portfolio1}
            alt='google-logo'
          />
          <ImgContainer
            src={portfolio2}
            alt='microsoft-logo'
          />
          <ImgContainer
            src={portfolio3}
            alt='airbnb-logo'
          />
          <ImgContainer
            src={portfolio4}
            alt='fb-logo'
          />
          <ImgContainer
            src={portfolio5}
            alt='spotify-logo'
          />
          <ImgContainer
            src={portfolio6}
            alt='spotify-logo'
          />
          <ImgContainer
            src={portfolio7}
            alt='spotify-logo'
          />
          <ImgContainer
            src={portfolio8}
            alt='spotify-logo'
          />
        </div>
        <div>
          <Button
            text='Learn More'
            variant='dark'
          />
        </div>
      </Container>
    </main>
  );
}
