import React, { useState } from 'react';
import { Box, Button, Modal, Stack } from '@mui/material';
import axios from 'axios'
import history from '../history';


const RenderModal = ({ open, handleClose, on_Close, user: { sub, name } }) => {



    const [input, setInput] = useState({
        title: '',
        description: ''
    })



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    const handleChange = event => {
        const { name, value } = event.target
        setInput(prevValue => {
            if (name === 'title') {
                return {
                    ...prevValue,
                    [name]: value
                }
            }
            if (name === 'description') {
                return {
                    ...prevValue,
                    [name]: value
                }
            }

        })

    }

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            if (window.location.pathname === '/') {
                const response = await axios.post('http://localhost:5000/', { ...input, googleId: sub, user: name })
                if (response.data) {
                    history.push('/user/stream/mystream')
                    // on pressing submit closes the modal
                    on_Close()
                }
            }

            if (window.location.pathname === '/user/stream/mystream') {
                const response = await axios.post('http://localhost:5000/edit', { ...input, googleId: sub })
                if (response.data) {
                    // on pressing submit closes the modal
                    on_Close()
                }
            }


        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <Modal

                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>

                        <Stack direction={'column'}>
                            <input name='title' placeholder='Enter Title' onChange={e => handleChange(e)} value={input.title} />
                            <input name='description' placeholder='Enter Description' onChange={e => handleChange(e)} value={input.description} />
                            <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                                style={{ backgroundColor: 'purple' }}
                            >Submit</Button>
                        </Stack>

                    </Box>
                </form>
            </Modal>
        </div>
    )
}


export default RenderModal;