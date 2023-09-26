import React, { useEffect } from 'react';
import Button from '../component/UI/button/Button';
import Heading from '../component/UI/heading/Heading';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { Addapt, getapt } from '../../redux/slice/AppointmentSlice';

function Appointment(props) {

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
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = Formik;

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
                    <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}/>
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
                </div>
            </section>
        </div>

    );
}

export default Appointment;