import Button from '@/common/Button';
import Container from '@/common/Container';
import Input from '@/common/Input';
import { H2, H1, P } from '@/components/Typography';

export default function Contact() {
  return (
    <main>
      <Container
        customClass='bg-white flex flex-col xl:gap-[80px] lg:gap-[40px] md:gap-[20px] gap-[30px] justify-between items-center'
        bgColor='bg-white'
      >
        <header className='text-black text-center lg:max-w-[380px] max-w-[300px] font-work-sans'>
          <H1 customClass='capitalize my-2'>Contact Us</H1>
          <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</P>
        </header>
        <div className='w-full flex md:flex-row flex-col items-center justify-center xl:gap-14 lg:gap-12 md:gap-10 gap-8 '>
          <form className='flex flex-col gap-[21px] md:w-[50%] sm:w-[80%] w-full'>
            <Input
              type='text'
              id='name'
              label='name'
              required
            />
            <Input
              type='email'
              id='email'
              label='email'
              required
            />
            <Input
              type='textarea'
              id='message'
              label='message'
              required
            />
            <Button
              text='Submit'
              variant='dark'
            />
          </form>
          <div className='md:w-[50%] sm:w-[80%] w-full h-[350px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </Container>
    </main>
  );
}
