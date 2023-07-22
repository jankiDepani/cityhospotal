import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Button from "../component/UI/Button/Button";
import InputBox from "../component/UI/InputBox/InputBox";

function Auth(props) {
    const [authType, setauthType] = useState("singup");

    let authobj = {}, initval = {};

    if (authType === "login") {
        authobj = {
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "plz enter vaild password which inculs one alphabet, number,and special chacter"),
        };
        initval = {
            email: "",
            password: ""
        }
    } else if (authType === "signup") {
        authobj = {
            name: Yup.string().min(2).required().matches(/^[a-zA-Z]+$/, "please eneter vaild name"),
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "plz enter vaild password which inculs one alphabet, number,and special chacter"),
        };
        initval = {
            name: "",
            email: "",
            password: ""
        }
    } else {
        authobj = {
            email: Yup.string().email().required()
        };
        initval = {
            email: ""
        }
    }

    const authShemas = Yup.object().shape(authobj);

    const Formik = useFormik({
        initialValues: initval,
        validationSchema: authShemas,
        enableReinitialize: true,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = Formik;

    console.log(errors);

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {authType === "login" ? (
                        <h2>login</h2>
                    ) : authType === "signup" ? (
                        <h2>Singup</h2>
                    ) : (
                        <h1>Reset Password</h1>
                    )}
                    <p>
                        Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                        aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
                        sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia
                        finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat
                        mi et suscipit pulvinar.
                    </p>
                </div>
                <form action method="post" className="php-email-form" onSubmit={handleSubmit}>
                    <div className="row justify-content-center g-3">
                        {authType === "signup" ? (
                            <div className="col-md-7 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <div className="validate" />
                                <p className="error">{errors.name && touched.name ? errors.name : ""}</p>
                            </div>
                        ) : null}
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <InputBox
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                errorText={errors.email && touched.email ? errors.email : ""}
                            />
                        </div>
                        {authType === "forgotType" ? null : (
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    errorText={errors.password && touched.password ? errors.password : ""}
                                />
                                
                            </div>
                        )}
                        {authType === "login" ? (
                            <div className="text-center">
                                <Button type="submit" btnType='primary' disabled={true}>Login</Button>
                            </div>
                        ) : authType === "signup" ? (
                            <div className="text-center">
                                <Button type="submit" btnType='secondary' disabled={false}>Signup</Button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <Button type="submit" btnType='outline'>Submit</Button>
                            </div>
                        )}
                        {authType === "login" ? (
                            <div className="row text-center justify-content-center mt-2 g-3">
                                <span>
                                    Create a new accout?{" "}
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setauthType("signup");
                                        }}
                                    >
                                        signup
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setauthType("forgotType");
                                        }}
                                    >
                                        Forgot Password ?
                                    </a>
                                </span>
                            </div>
                        ) : (
                            <div className="row text-center justify-content-center mt-2 g-3">
                                <span>
                                    already have acount?{" "}
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setauthType("login");
                                        }}
                                    >
                                        login
                                    </a>
                                </span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Auth;
