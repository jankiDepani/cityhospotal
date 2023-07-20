import {
    useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "../component/UI/inputbox/Input";
import Heading from "../component/UI/heading/Heading";

function Contect1(props) {
    const contectSchema = Yup.object().shape({
        name: Yup.string().min(2).required().matches(/^[a-zA-Z]+$/, "please eneter vaild name"),
        email: Yup.string().email().required(),
        subject: Yup.string().required(),
        message: Yup.mixed().required().test("massage", "max 5 words allowed", function(val){
            let arr = val.split(" ");
            if(arr.length >= 5) {
                return false ;
            }else {
                return true;
            }
        })
    });

    const Formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema:contectSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
        Formik;
        console.log(errors);

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <Heading>Contact</Heading>
                        <p>
                            Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                            aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
                            sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
                            aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
                            orci vehicula facilisis.
                        </p>
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
                            <form className="php-email-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <Input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            errorText={errors.name && touched.name ? errors.name : ""}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            errorText={errors.email && touched.email ? errors.email : ""}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subject}
                                        errorText={errors.subject && touched.subject ? errors.subject : ""}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <Input
                                        name="message"
                                        rows={5}
                                        placeholder="Message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        errorText={errors.message && touched.message ? errors.message : ""}
                                    />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contect1;
