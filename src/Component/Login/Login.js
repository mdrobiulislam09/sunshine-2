import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {

        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='d-md-flex justify-content-center'>
                <div style={{ width: '500px', height: '600px', margin: '60px' }}>
                    <div className="row justify-content-center">
                        <h2 className="text-center mb-3">Sign In</h2>
                        <form onSubmit={handleLogin} id="contact-form" method="post" action="https://themeht.com/template/winck/ltr/php/contact.php">
                            <div className="messages"></div>
                            <div className="form-group">
                                <label>User Name or Email</label>
                                <input id="form_name" type="text" name="email" className="form-control" placeholder="User name or Email" required="required" data-error="Username is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group mt-4 mb-5">
                                <div className="remember-checkbox d-flex align-items-center justify-content-between">
                                    <span href="#">Forgot Password?</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <input type="submit" value='Login Now' className="btn btn-primary" placeholder="Login Now" />
                                <button onClick={handleGoogleSignIn} className="btn btn-outline-primaryt border border-success">Login With Google</button>
                            </div>
                        </form>
                        <div className="d-flex align-items-center text-center justify-content-center mt-4"> <span className="text-muted me-1">Don't have an account?</span>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </div>

                </div>
                <img src='assets\images\login.png' style={{ width: '700px', height: '600px' }} alt="phot" />
            </div>
        </div>
    );
};

export default Login;