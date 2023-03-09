import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './SignUp.css';

const SignUp = () => {
    const { createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }
    return (
        <div >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="page-content">
                <section className="register">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="mb-5">
                                    <h2><span className="font-w-4">Simple And</span> Easy To Sign Up</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-10 ms-auto me-auto">
                                <div className="register-form text-center">
                                    <form onSubmit={handleSignUp}>
                                        <div className="messages"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Firstname is required." />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id="form_password1" type="password" name="password" className="form-control" placeholder="Conform Password" required="required" data-error="Conform Password is required." />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* 
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <div className="remember-checkbox clearfix mb-4">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input float-none" id="customCheck1" />
                                                        <label className="form-check-label" for="customCheck1">I agree to the term of use and privacy policy</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col">
                                                <input className="btn btn-primary" type="submit" value='Create Account' />
                                                <span className="mt-4 d-block">Have An Account ? <Link to='/login'>Sign In!</Link></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SignUp;