import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => {
                console.error('Error logging out')
            })
    }

    const navItems = <>
        {
            user?.uid ? <>

                <span onClick={handleLogOut} className="btn btn-danger btn-sm ms-3 d-sm-inline-block">
                    Log Out
                </span>


            </>
                :
                <>
                    <Link to='/login' className="btn btn-light btn-sm">Login</Link>
                    <Link to='/signup' className="btn btn-light btn-sm ms-3 d-sm-inline-block ">Sign Up</Link>

                </>
        }
    </>

    return (
        <div>
            <header className="site-header top-0">
                <div id="header-wrap" className="position-absolute w-100 z-index-1">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg navbar-light justify-content-start">
                                    <h1 className="navbar-brand logo text-primary mb-0 font-w-7 me-6" href="index.html">
                                        <span className='fs-1'>ARMS</span><span className="text-dark font-w-4">Zone.</span>
                                    </h1>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav me-auto">
                                            <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                                            <li className="nav-item"><Link to='/profile' className="nav-link">Profile</Link></li>
                                            <li className="nav-item"><Link to='/dashbord' className="nav-link">Dashbord</Link></li>
                                        </ul>
                                    </div>
                                    <div className="d-sm-flex align-items-center justify-content-end ms-auto">
                                        {navItems}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;