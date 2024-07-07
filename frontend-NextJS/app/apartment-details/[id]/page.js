'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/app/Utils/loading/LoadingSpinner';
import axios from 'axios';
import { BACKENDHOSTURL } from '@/app/Utils/CONSTANT/BACKENDURL';

const ApartmentDetail = ({ params }) => {

  const router = useRouter();
  const apartmentId = params?.id;

  const [apartmentData, setApartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchApartmentData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BACKENDHOSTURL}/apartment/${apartmentId}`);
      setApartmentData(response?.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchApartmentData();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(false);
    fetchApartmentData();
  };

  if (loading) {
    return (
      <div className='flex justify-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4 text-offBlack'>Error Fetching Data</h1>
        <button
          onClick={handleRetry}
          className='mt-4 mb-4 border-2 border-gray hover:opacity-100 duration-700 opacity-70 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
        >
          Retry
        </button>
        <button
          onClick={() => router.back()}
          className='mt-4 mb-4 border-2 border-gray hover:opacity-100 duration-700 opacity-70 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4 text-offBlack'>Apartment Details</h1>
      <button
        onClick={() => router.back()}
        className='mt-4 mb-4 border-2 border-gray hover:opacity-100 duration-700 opacity-70 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
      >
        Back
      </button>
      <div className='max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg'>
        <Image
          src={apartmentData.image}
          alt='Apartment Picture'
          width={600}
          height={400}
        />
        <div className='p-6'>
          <h2 className='font-semibold text-xl mb-2 text-offBlack'>{apartmentData.title}</h2>
          <p className='text-gray-600 mb-4 text-offBlack'>{apartmentData.description}</p>
          <div className='flex items-center'>
            <p className='text-lg font-bold mr-2'>Price:</p>
            <p className='text-lg font-semibold text-offBlack'>{apartmentData.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;
