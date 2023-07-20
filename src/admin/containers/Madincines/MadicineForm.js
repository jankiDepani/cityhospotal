import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from "yup";

function MadicineForm({ onHandleSumbitData, updateData }) {

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData) {
            handleClickOpen();
            Formik.setValues(updateData);
        }

    }, [updateData])

    const contectSchema = Yup.object().shape({
        name: Yup.string().min(2).required().matches(/^[a-zA-Z ]+$/, "please eneter vaild name"),
        price: Yup.number().required().typeError("plz enter number").integer().min(1),
        exipDate: Yup.date().required().min(new Date(), "date must be in futuer"),
        desc: Yup.string().required()
            .test("desc", "Enter Maximum 100 Word", function (value) {
                let arr = value.split(" ");
                if (arr.length > 100) {
                    return false;
                } else {
                    return true;
                }
            }),
    })

    const Formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            exipDate: "",
            desc: ""
        },
        validationSchema: contectSchema,
        onSubmit: (values, action) => {
            onHandleSumbitData(values)
            handleClose();
            action.resetForm();
        },
    });

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
        Formik;



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Madicine
            </Button>
            <form onSubmit={handleSubmit}>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Madicine detaiels</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <form>
                            <TextField
                                margin="dense"
                                id="madName"
                                name='name'
                                label="Madicine Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className='error'>{errors.name && touched.name ? errors.name : ""}</span>
                            <TextField
                                margin="dense"
                                id="madPrice"
                                name="price"
                                label="Madicine Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={values.price}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className='error'>{errors.price && touched.price ? errors.price : ""}</span>
                            <TextField
                                margin="dense"
                                id="madExpriyDate"
                                label="Madicine expriy date"
                                type='date'
                                name='exipDate'
                                fullWidth
                                variant="standard"
                                InputLabelProps={{ shrink: true }}
                                value={values.exipDate}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className='error'>{errors.exipDate && touched.exipDate ? errors.exipDate : ""}</span>
                            <TextField
                                margin="dense"
                                id="madicineDesc"
                                label="Madicine Description"
                                type='text'
                                name='desc'
                                fullWidth
                                variant="standard"
                                value={values.desc}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className='error'>{errors.desc && touched.desc ? errors.desc : ""}</span>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
            </form>
        </>
    );
}

export default MadicineForm;