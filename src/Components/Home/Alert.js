import { Alert } from '@mui/material';
import React from 'react';

const Alerts = (props) => {
    props.count()
    return (
        <div>
           {
               props.isTrue==='true' ?(
                <Alert sx={{bgcolor:'green',color:'white'}} severity="success">Your Answer is okay</Alert>
               ):(
                <Alert sx={{bgcolor:'red',color:'white'}} severity = "error">Your Answer is wrong</Alert>
               )
           } 
        </div>
    );
};

export default Alerts;