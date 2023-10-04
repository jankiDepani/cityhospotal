import React, { useEffect } from 'react';
import Button from '../component/UI/button/Button';
import Heading from '../component/UI/heading/Heading';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { Addapt, getapt } from '../../redux/slice/AppointmentSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';


function Appointment(props) {
    const [value, setValue] = React.useState(0);

    const aptData = useSelector(state => state.apt);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };

    const appointmentShemas = Yup.object().shape({
        name: Yup.string().min(2).required().matches(/^[a-zA-Z]+$/, "please eneter vaild name"),
        email: Yup.string().email().required(),
        phone: Yup.number().required(),
        date: Yup.date().required(),
        department: Yup.string().required(),
        message: Yup.string().required()
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getapt());
    }, [])


    const Formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: appointmentShemas,
        enableReinitialize: true,
        onSubmit: (values) => {
            dispatch(Addapt(values));
            setValue(1);
            dispatch(getapt());
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = Formik;

    const rows = aptData.apt;

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <Heading>Make an Appointment</Heading>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Tabs value={value} onChange={handleChange1} aria-label="basic tabs example">
                        <Tab label="Make an Appoinment" />
                        <Tab label="My Appoinment" />
                    </Tabs>
                    <br />
                    {
                        value === 0 ?
                            <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name} />
                                        <div className='error'>{errors.name && touched.name ? errors.name : ""}</div>
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} />
                                        <div className='error'>{errors.email && touched.email ? errors.email : ""}</div>
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone} />
                                        <div className='error'>{errors.phone && touched.phone ? errors.phone : ""}</div>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date} />
                                        <div className='error'>{errors.date && touched.date ? errors.date : ""}</div>
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department" id="department" className="form-select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.department}>
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        <div className='error'>{errors.department && touched.department ? errors.department : ""}</div>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message} />
                                    <div className='error'>{errors.message && touched.message ? errors.message : ""}</div>
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><Button type="submit">Make an Appointment</Button></div>
                            </form>
                            :
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell> Name</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Phone No.</TableCell>
                                            <TableCell align="center">Date</TableCell>
                                            <TableCell align="center">Department</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">{row.email}</TableCell>
                                                <TableCell align="center">{row.phone}</TableCell>
                                                <TableCell align="center">{row.date}</TableCell>
                                                <TableCell align="center">{row.department}</TableCell>
                                                <TableCell align="center"><EditCalendarIcon /> <DeleteIcon /></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    }


                </div>
            </section>
        </div>
    )
}

export default Appointment;