'use client';
import { useState, useEffect } from 'react';
import ApartmentCard from './components/ApartmentCard/ApartmentCard';
import LoadingSpinner from './Utils/loading/LoadingSpinner';
import { CiCirclePlus } from 'react-icons/ci';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { BACKENDHOSTURL } from '@/app/Utils/CONSTANT/BACKENDURL';
import ApartmentForm from './components/AddApartmentForm/ApartmentForm';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [pagesCounts, setPagesCounts] = useState(1);
  const [refreshData, setRefreshData] = useState(false);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchApartments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BACKENDHOSTURL}/apartment?page=${page}&limit=${pageLimit}`);
      setApartments(response?.data?.data);
      setPagesCounts(response?.data?.numOfPages);
    } catch (error) {
      console.error('Error fetching apartments:', error);
      setError('Failed to fetch apartments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApartments();
  }, [page, refreshData]);

  const handelAddApartment = async (newApartmentData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BACKENDHOSTURL}/apartment`, newApartmentData);
      setRefreshData((refresh) => !refresh);
      toast.success('Apartment added successfully');
      handleClose();


    } catch (error) {
      console.error('Error adding apartment:', error);
      toast.error(`${error.response.data.message[0]}`);
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <ToastContainer />
      <ApartmentForm isOpen={open} onClose={handleClose} onAdd={handelAddApartment} />
      <div className='m-2 flex justify-center'>
        <CiCirclePlus size={50} onClick={handleOpen} className='cursor-pointer' />
      </div>
      <div className='flex justify-center flex-wrap'>
        {loading && <LoadingSpinner />} {/* Display loading spinner if loading is true */}
        {!loading && error && <div className='text-red-500 text-center mt-4'>Error: {error}</div>}
        {!loading && !error && apartments?.length === 0 && (
          <div className='text-center mt-4'>No apartments found.</div>
        )}
        {!loading &&
          !error &&
          apartments?.length > 0 &&
          apartments.map((apartment, index) => (
            <ApartmentCard
              key={index}
              apatmentId={apartment.id}
              title={apartment.title}
              img={apartment.image}
              description={apartment.description}
              // isSpecial={apartment.isSpecial}
              price={apartment.price}
            />
          ))}
      </div>
      <div className='flex justify-center'>
        <Stack spacing={2}>
          <Pagination
            count={pagesCounts}
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </>
  );
}
