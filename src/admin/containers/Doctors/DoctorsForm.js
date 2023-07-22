import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from "yup";
import { useFormik } from 'formik';

function DoctorsForm({ onHandleSubmit, updateData }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData)  {
            Formik.setValues(updateData);
            handleClickOpen();
        }
    }, [updateData])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const medicineSchema = Yup.object().shape({
        name: Yup.string().min(2).required().matches(/^[a-zA-Z ]+$/, "please eneter vaild name"),
        degree: Yup.string().required()
    });



    const Formik = useFormik({
        initialValues: {
            name: "",
            degree: ""
        },
        validationSchema: medicineSchema,
        onSubmit: (values, action) => {
            onHandleSubmit(values);
            action.resetForm();
            handleClose();
        },
    });

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
        Formik;

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Doctor
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Doctor Details</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="name"
                            name='name'
                            label="Madicine Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <span>{errors.name && touched.name ? errors.name : ""}</span>
                        <TextField
                            margin="dense"
                            id="degree"
                            name="degree"
                            label="Madicine Price"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.degree}
                        />
                        <span>{errors.degree && touched.degree ? errors.degree : ""}</span>
                        
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </>
    );
}

export default DoctorsForm;