import { style as muiStyle } from '@/app/Utils/CONSTANT/Styles/MUI';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

export default function ApartmentForm({ isOpen, onClose, onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const handleAddClick = () => {
        onAdd({ title, description, price });
        handelClose();
    };
    const handelClose = () => {
        onClose();
        setTitle('');
        setDescription('');
        setPrice('');
    };
    return (

        <Modal
            open={isOpen}
            onClose={handelClose}
            aria-labelledby='child-modal-title'
            aria-describedby='child-modal-description'
        >
            <Box sx={{ ...muiStyle, width: 600 }}>
                <h2 className=' text-lg	font-semibold mb-5'>Add New Apartment</h2>
                <div className='flex gap-5 flex-wrap'>
                    <TextField
                        id='outlined-controlled'
                        label='Title'
                        value={title}
                        style={{ color: '#000' }}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    <TextField
                        id='outlined-controlled'
                        label='Description'
                        value={description}
                        style={{ color: '#000' }}
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                    <TextField
                        id='outlined-controlled'
                        label='Price'
                        value={price}
                        style={{ color: '#000' }}
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                    />
                </div>

                <div className='flex justify-between mt-5'>
                    <Button onClick={handelClose}>Close</Button>
                    <Button onClick={handleAddClick}>Add</Button>
                </div>
            </Box>
        </Modal>

    );
}