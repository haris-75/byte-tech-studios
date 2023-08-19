import Container from '@/common/container';
import heroImg from '@/assets/hero-img.png';
import fbImg from '@/assets/fb.png';
import googleImg from '@/assets/google.png';
import microsoftImg from '@/assets/microsoft.png';
import airbnbImg from '@/assets/airbnb.png';
import spotifyImg from '@/assets/spotify.png';
import Image, { StaticImageData } from 'next/image';
import Button from '@/common/button';
import { H1, H2, P } from '@/components/Typography';

const ImgContainer = ({
  src,
  alt,
  customClass,
}: {
  src: StaticImageData;
  alt: string;
  customClass?: string;
}) => (
  <Image
    className={`lg:max-w-[150px] sm:max-w-[100px] max-w-[150px] ${
      customClass ?? ''
    }`}
    src={src}
    alt={alt}
  />
);

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Container
        customClass='bg-primary flex sm:flex-row flex-col xl:gap-[80px] lg:gap-[40px] md:gap-[20px] gap-[15px] justify-between items-center'
        bgColor='bg-primary'
      >
        <header className='text-white lg:max-w-[410px] md:max-w-[300px] font-work-sans'>
          <H2>Welcome</H2>
          <H1 customClass='my-2'>Lorem ipsum dolor sit amet consectetur </H1>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </P>
          <Button
            text='Explore'
            variant='light'
            customClass='lg:mt-6 md:mt-4 mt-3'
          />
        </header>
        <div>
          <Image
            className='xl:max-w-[600px] lg:max-w-[500px] md-lg:max-w-[400px] md:max-w-[350px] max-w-[300px]'
            src={heroImg}
            alt='illustraion-of-people-creating-idea'
          />
        </div>
      </Container>
      {/* Partner Section */}
      <Container
        customClass='bg-white flex flex-col xl:gap-[80px] lg:gap-[40px] md:gap-[20px] gap-[30px] justify-between items-center'
        bgColor='bg-primary'
      >
        <header className='text-black text-center lg:max-w-[380px] max-w-[300px] font-work-sans'>
          <H2 customClass='text-primary'>Partners</H2>
          <H1 customClass='capitalize my-2'>Lorem ipsum dolor</H1>
          <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>
        </header>
        <div className='flex xl:gap-14 lg:gap-12 md:gap-10 sm:gap-6 items-center sm:flex-row flex-col gap-5'>
          <ImgContainer
            src={googleImg}
            alt='google-logo'
          />
          <ImgContainer
            src={microsoftImg}
            alt='microsoft-logo'
            customClass='lg:max-h-[35px] sm:max-h-[25px]'
          />
          <ImgContainer
            src={airbnbImg}
            alt='airbnb-logo'
          />
          <ImgContainer
            src={fbImg}
            alt='fb-logo'
            customClass='lg:max-h-[30px] sm:max-h-[20px]'
          />
          <ImgContainer
            src={spotifyImg}
            alt='spotify-logo'
          />
        </div>
      </Container>
    </main>
  );
}
