import Container from '@/common/container';
import heroImg from '@/assets/hero-img.png';
import Image from 'next/image';
import Button from '@/common/button';
import { H1, H2, P } from '@/components/Typography';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
