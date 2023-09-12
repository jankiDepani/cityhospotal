import { enqueueSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../redux/action/alert.action';

function Alert(props) {

    const alert = useSelector(state => state.alert);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, { variant: alert.color })
        }

        const timer = setTimeout(() => {
            dispatch(resetAlert())
        },4000)

        return () => clearTimeout(timer)
    },[alert.text])

    return (
        <div>
            
        </div>
    );
}

export default Alert;