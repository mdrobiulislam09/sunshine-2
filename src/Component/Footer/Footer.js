import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark py-7 z-index-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 col-xl-4 me-auto mb-5 mb-lg-0">
                            <a className="footer-logo h2 text-primary mb-0 font-w-7" href="index.html">
                                ARMS<span className="text-white font-w-4">zone</span>
                            </a>
                            <p className="my-3 text-light">ARMS.zone is a international market place here you can buy and sell your Arms</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a className="border rounded px-2 py-1 text-light" href="#"><i className="la la-facebook"></i></a>
                                </li>
                                <li className="list-inline-item"><a className="border rounded px-2 py-1 text-light" href="#"><i className="la la-dribbble"></i></a>
                                </li>
                                <li className="list-inline-item"><a className="border rounded px-2 py-1 text-light" href="#"><i className="la la-instagram"></i></a>
                                </li>
                                <li className="list-inline-item"><a className="border rounded px-2 py-1 text-light" href="#"><i className="la la-twitter"></i></a>
                                </li>
                                <li className="list-inline-item"><a className="border rounded px-2 py-1 text-light" href="#"><i className="la la-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h5 className="mb-4 text-white">Pages</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3"><a className="list-group-item-action text-light" href="about-us-1.html">About</a>
                                        </li>
                                        <li className="mb-3"><a className="list-group-item-action text-light" href="product-grid.html">Shop</a>
                                        </li>
                                        <li className="mb-3"><a className="list-group-item-action text-light" href="faq.html">Faq</a>
                                        </li>
                                        <li><a className="list-group-item-action text-light" href="contact-us.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0">
                                    <h5 className="mb-4 text-white">Service</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3"><a className="list-group-item-action text-light" href="#">Content Writing</a>
                                        </li>
                                        <li className="mb-3"><a className="list-group-item-action text-light" href="#">Documentation</a>
                                        </li>
                                        <li className="mb-3"><a className="list-group-item-action text-light" href="login.html">Account</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0">
                                    <h5 className="mb-4 text-white">Our Address</h5>
                                    <div className="mb-3">
                                        <p className="mb-0 text-light">423B, Road Wordwide Country, USA</p>
                                    </div>
                                    <div className="mb-3">
                                        <a className="btn-link text-light" href="mailto:themeht23@gmail.com"> robiul.rubin@gmail.com</a>
                                    </div>
                                    <div>
                                        <a className="btn-link text-light" href="tel:+912345678900">+88-017-777-77777</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col"><hr className="m-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-light">
                            Copyright ©2020 All rights reserved | ARMS.zone is made by <u className='robiul'><a  href="#">Robiul</a></u></div>
                        <div className="col-md-6 text-md-end mt-3 mt-md-0">
                            <ul className="list-inline mb-0">
                                <li className="me-3 list-inline-item"> <a className="list-group-item-action text-light" href="#">
                                    Term Of Service
                                </a>
                                </li>
                                <li className="me-3 list-inline-item"> <a className="list-group-item-action text-light" href="#">
                                    Privacy Policy
                                </a>
                                </li>
                                <li className="list-inline-item"> <a className="list-group-item-action text-light" href="#">
                                    Support
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;