import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import Button from "../component/UI/button/Button";

export const SignUpSchema = Yup.object({
    name: Yup.string()
        .min(2)
        .required("Please enter name."),
    email: Yup.string().email("Please enter vaild email").required("Please enter email"),
    subject: Yup.string().required("Please enter subject."),
    message: Yup.mixed().required("Please enter message.")
});

const initialValues = { 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
}
const Contact = () => {
    const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });
    return (
        <main>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-505, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" 
                                        name="name" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Your Name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}/>
                                        {errors.name && touched.name ? <span className='form-error'>{errors.name}</span> : null}
                                    </div>
                                    <div className="col-md-6 form-group mt-4 mt-md-0">
                                        <input type="email" 
                                        className="form-control" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Your Email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}/>
                                        {errors.email && touched.email ? <span className='form-error'>{errors.email}</span> : null}
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <input type="text" 
                                    className="form-control" 
                                    name="subject" id="subject" 
                                    placeholder="Subject"
                                    value={values.subject}
                                    onBlur={handleBlur}
                                    onChange={handleChange}/>
                                    {errors.subject && touched.subject ? <span className='form-error'>{errors.subject}</span> : null}
                                </div>
                                <div className="form-group mt-4">
                                    <textarea className="form-control" 
                                    name="message" rows={5} 
                                    placeholder="Message"
                                    value={values.message}
                                    onBlur={handleBlur}
                                    onChange={handleChange}/>
                                    {errors.message && touched.message ? <span className='form-error'>{errors.message}</span> : null}
                                </div>
                                <div className="text-center mt-5"><Button type="submit">Send Message</Button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;