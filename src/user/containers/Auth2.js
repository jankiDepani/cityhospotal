import React, { useState } from 'react';

function Auth2(props) {

    const [authType, setauthType] = useState("singup");
    const [reset, setReset] = useState(false);

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        // authType === "login" ? <h2>login</h2> :
                        //     (authType === "signup" ? <h2>Singup</h2> : <h2>Reset Password</h2>)

                        reset ? <h2>Reset Password</h2> :
                            authType === "login" ? <h2>login</h2> : <h2>Signup</h2>
                    }
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <form action method="post" className="php-email-form">
                    <div className="row justify-content-center g-3">
                        {
                            (authType === "signup") ?
                                (<div className="col-md-7 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div>)
                                : null
                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        {
                            reset ? null :
                                (<div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Your Password" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate" />
                                </div>)
                        }
                        {
                            reset ? <div className="text-center"><button type="submit">Check Email</button></div> :
                                authType === "login" ? <div className="text-center"><button type="submit">Login</button></div>
                                    : <div className="text-center"><button type="submit">Singup</button></div>

                        }
                        {
                            authType === "login" ?
                                <div className='row text-center justify-content-center mt-2 g-3'><span>Create a new accout? <a href='#' onClick={() => { setauthType("signup"); setReset(false) }}>signup</a></span>
                                    <br />
                                    <span><a href='#' onClick={() => { setReset(true) }}>Forgot Password ?</a></span>
                                </div>
                                :
                                (<div className='row text-center justify-content-center mt-2 g-3'>
                                    <span>already have acount? <a href='#' onClick={() => { setauthType("login"); setReset(false) }}>login</a></span>
                                </div>)
                        }
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Auth2;