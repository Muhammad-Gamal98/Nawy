import React from 'react';
import Image from 'next/image';
import iconCircle from '@/public/icons/iconcircle.webp';
import { useRouter } from 'next/navigation';

const ApartmentCard = ({ img, title = 'Placeholder', price = '10000', description, apatmentId }) => {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push(`/apartment-details/${apatmentId}`)}
      className='m-2 rounded-md drop-shadow-md border-2 border-gray md:max-w-[500px] cursor-pointer'
    >
      <div className='relative rounded-md mb-3'>
        <Image
          className='absolute rounded-full bottom-4 left-4'
          src={iconCircle}
          alt='Icon Circle'
          width={50}
          height={50}

        />
        <img className='rounded-md rounded-b-none'
          src={img}
          alt='Apartment Picture' />
      </div>
      <div className='p-3 flex justify-between gap-3 flex-wrap'>
        <div>
          <h2 className='font-semibold'>{title}</h2>
          <p className='text-gray text-sm'>{description}</p>
        </div>
      </div>
      <div className='p-3 flex gap-2 font-bold'>
        <p>{price}</p>
        <span>EGP</span>
      </div>
    </article>
  );
};

export default ApartmentCard;
