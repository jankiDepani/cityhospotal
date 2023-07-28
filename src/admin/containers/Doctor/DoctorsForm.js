import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from "yup";


export default function DoctorData({ onhandleSubmit, updateData }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (updateData) {
            handleClickOpen();
            Formik.setValues(updateData);
        }

    }, [updateData])

    const contectSchema = Yup.object().shape({
        doctorName: Yup.string().min(2).required().matches(/^[a-zA-Z ]+$/, "please eneter vaild name"),
        doctorDegignation: Yup.string().required().matches(/^[a-zA-Z ]+$/, "please eneter vaild name"),
        doctorDescripstion: Yup.string().required()
            .test("DoctorDescripstion", "Enter Maximum 100 Word", function (value) {
                let arr = value.split(" ");
                if (arr.length > 100) {
                    return false;
                } else {
                    return true;
                }
            }),
        doctorImg: Yup
        .mixed()
        .required("Required")
    });

    const Formik = useFormik({
        initialValues: {
            doctorName: "",
            doctorDegignation: "",
            doctorDescripstion: "",
            doctorImg: false
        },
        validationSchema: contectSchema,
        onSubmit: (values) => {
            onhandleSubmit(values);
            handleClose();
            // alert(JSON.stringify(values, null, 2));
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
        <div className='mainBox'>
            <br /><br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Doctors Detailes
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Doctor detaiels</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="doctorName"
                            name='doctorName'
                            label="Doctor Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.doctorName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <span className='error'>{errors.doctorName && touched.doctorName ? errors.doctorName : ""}</span>
                        <TextField
                            margin="dense"
                            id="doctorDegignation"
                            name="doctorDegignation"
                            label="Doctor's Degignation"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.doctorDegignation}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <span className='error'>{errors.doctorDegignation && touched.doctorDegignation ? errors.doctorDegignation : ""}</span>
                        <TextField
                            margin="dense"
                            id="doctorDescripstion"
                            name='doctorDescripstion'
                            label="Doctor's Descripstion"
                            type='text'
                            fullWidth
                            variant="standard"
                            value={values.doctorDescripstion}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <span className='error'>{errors.doctorDescripstion && touched.doctorDescripstion ? errors.doctorDescripstion : ""}</span>
                        <TextField
                            margin='dense'
                            id='doctorImg'
                            name='doctorImg'
                            label="Doctor's IMG"
                            type='file'
                            fullWidth
                            variant='standard'
                            InputLabelProps={{ shrink: true }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <span className='error'>{errors.doctorImg && touched.doctorImg ? errors.doctorImg : ""}</span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}