import Image, { StaticImageData } from 'next/image';

import fbImg from '@/assets/fb.png';
import googleImg from '@/assets/google.png';
import microsoftImg from '@/assets/microsoft.png';
import airbnbImg from '@/assets/airbnb.png';
import spotifyImg from '@/assets/spotify.png';

const ImgContainer = ({
  src,
  alt,
  customClass,
}: {
  src: StaticImageData;
  alt: string;
  customClass?: string;
}) => (
  <div className='slide'>
    <Image
      className={`${customClass ?? ''}`}
      src={src}
      alt={alt}
    />
  </div>
);

export default function PartnerSlider() {
  return (
    <div>
      <div className='slider w-full xl:max-w-1280px lg-xl:max-w-[1150px] lg:max-w-[1024px] md-lg-[850px] md:max-w-[768px] sm:max-w-[640px] max-w-[350px]'>
        <div className='slide-track'>
          <ImgContainer
            src={fbImg}
            alt='fb-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={googleImg}
            alt='google-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={microsoftImg}
            alt='microsoft-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={airbnbImg}
            alt='airbnb-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={spotifyImg}
            alt='spotify-logo'
            customClass='sm:w-[200px] w-[150px] '
          />
          <ImgContainer
            src={fbImg}
            alt='fb-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={googleImg}
            alt='google-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={microsoftImg}
            alt='microsoft-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={airbnbImg}
            alt='airbnb-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
          <ImgContainer
            src={spotifyImg}
            alt='spotify-logo'
            customClass='sm:w-[200px] w-[150px]'
          />
        </div>
      </div>
    </div>
  );
}
