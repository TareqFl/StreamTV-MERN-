import React from 'react';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';


const Login = () => {

    useEffect(() => {
        window.open("http://localhost:5000/auth/google", "_self");
    }, [])



    return (
        <div>
            <CircularProgress />
        </div>
    );
};



export default Login


