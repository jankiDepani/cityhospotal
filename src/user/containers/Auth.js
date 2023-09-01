import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Button from "../component/UI/button/Button";
import Input from "../component/UI/inputbox/Input";
import Heading from "../component/UI/heading/Heading";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/action/auth.action";


function Auth(props) {
    const [authType, setauthType] = useState("singup");

    let authobj = {}, initval = {};

    const dispatch = useDispatch();

    if (authType === "login") {
        authobj = {
            email: Yup.string().email().required(),
            password: Yup.string().min(2).required(),
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

    const handleSignup = (values) => {
        try {
            dispatch(signupUser(values));
            
            // createUserWithEmailAndPassword(auth, values.email, values.password)
            //     .then((userCredential) => {
            //         // Signed in 
            //         const user = userCredential.user;

            //         console.log(user);

            //         sendEmailVerification(auth.currentUser)
            //             .then(() => {
            //                 console.log("Email verification link sent.");
            //             });
            //     })
            //     .catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;

            //         console.log(errorCode);
            //     });

        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = (values) => {
        try {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("Login Successfully");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleForgot = (values) => {
        try {
            sendPasswordResetEmail(auth, values.email)
                .then(() => {
                    console.log("Password reset link sent.");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    
                    console.log(errorCode);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const authShemas = Yup.object().shape(authobj);

    const Formik = useFormik({
        initialValues: initval,
        validationSchema: authShemas,
        enableReinitialize: true,
        onSubmit: (values) => {
            if (authType === "login") {
                handleLogin(values);
            } else if (authType === "signup") {
                handleSignup(values)
            } else {
                handleForgot(values);
            }
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = Formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {authType === "login" ? (
                        <Heading>login</Heading>
                    ) : authType === "signup" ? (
                        <Heading>Singup</Heading>
                    ) : (
                        <Heading>Reset Password</Heading>
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
                                <Input
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
                                    errorTxet={errors.name && touched.name ? errors.name : ""}
                                />
                            </div>
                        ) : null}
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <Input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                errorTxet={errors.email && touched.email ? errors.email : ""}
                            />
                        </div>
                        {authType === "forgotType" ? null : (
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    errorTxet={errors.password && touched.password ? errors.password : ""}
                                />
                            </div>
                        )}
                        {authType === "login" ? (
                            <div className="text-center">
                                <Button type="submit" btnType="primary" disabled={false}>Login</Button>
                            </div>
                        ) : authType === "signup" ? (
                            <div className="text-center">
                                <Button type="submit" btnType="secoundery" disabled={false}>Singup</Button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <Button type="submit" btnType="outline">Check Email</Button>
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
