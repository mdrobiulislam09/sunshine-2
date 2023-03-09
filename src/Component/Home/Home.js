import React from 'react';
import { PhotoView } from 'react-photo-view';
import MainCatagory from '../MainCatagory/MainCatagory';
import './Home.css'

const Home = () => {


    return (
        <div>
            {/* Banner Section */}
            <section className="custom-py-1 position-relative hero-shape3 overflow-hidden ">
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos="zoom-out-down" data-aos-duration="3000" className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
                            <img src="assets/images/hero/08.png" className="img-fluid" alt="..." />

                            <PhotoView src="assets/images/hero/12.png">
                                <img src="assets/images/hero/12.png" className="img-fluid" alt="..." />
                            </PhotoView>
                        </div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="2000"
                            className="col-12 col-lg-7 ok col-xl-6 order-lg-1">
                            <h1 className="display-4 mb-3">
                                ARMS Zone Are <span className="font-w-7">Batter & Upgrated</span>
                            </h1>

                            <p className="lead text-muted mb-4 fw-bold">We have collected the letest technologies arms. Those arms are collect from everywhere.</p>
                            <a href="#" className="btn btn-sm btn-info text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  me-2 ic-2x d-inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>

                                <div className="d-inline-block"> <small className="d-block">Message us</small>
                                    24 Hours/day</div>
                            </a>

                        </div>
                    </div>
                    <div className='bg-info bg-opacity-10 mt-2 border border-info border-start-0 rounded-end' style={{width: "40%", height: '50px'}}>
                        <marquee width="100%" direction="left" height="200px">
                            <p className='text-danger fs-4 px-5 fw-bold'>To collect in our collection you need national permission and also the required perfect age.</p>
                        </marquee>
                    </div>
                </div>
            </section>
            {/* catagory */}
            <section className='container'>
                <MainCatagory></MainCatagory>
            </section>
            <div className="page-content">
                {/* tusted section */}
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div>
                                    <h2 className="mb-0"><span className="font-w-4 d-block">Trusted people </span> ARMS zone</h2>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-3 mt-lg-0">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-4">
                                        <div className="counter">
                                            <div className="counter-desc"> <span className="count-number h2 text-primary" data-to="50" data-speed="2000">50</span>
                                                <span className="h2 text-primary">+</span>
                                                <h6 className="text-muted mb-0">Support Member</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 mt-2 mt-sm-0">
                                        <div className="counter">
                                            <div className="counter-desc"> <span className="count-number h2 text-primary" data-to="92" data-speed="2000">99</span>
                                                <span className="h2 text-primary">+</span>
                                                <h6 className="text-muted mb-0">People Love Us</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 mt-2 mt-sm-0">
                                        <div className="counter">
                                            <div className="counter-desc"> <span className="count-number h2 text-primary" data-to="120" data-speed="2000">120</span>
                                                <span className="h2 text-primary">+</span>
                                                <h6 className="text-muted mb-0">Happy Customers</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* last tusted */}
                        <div className="row align-items-center mt-6">
                            <div className="col-lg-4 col-md-6">
                                <div className="p-5" data-bg-color="#d0faec">
                                    <div className="f-icon"> <i className="flaticon-prototype-1"></i>
                                    </div>
                                    <h5 className="mt-4 mb-3">Awesome Collection</h5>
                                    <p className="mb-0">Collect old Arms from ARMS.zone. Those arms has history</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="p-5" data-bg-color="#ffeff8">
                                    <div className="f-icon"> <i className="flaticon-lightbulb"></i>
                                    </div>
                                    <h5 className="mt-4 mb-3">Easy to Buy</h5>
                                    <p className="mb-0">Collect old Arms from ARMS.zone. Those arms has history</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div className="p-5" data-bg-color="#d3f6fe">
                                    <div className="f-icon"> <i className="flaticon-friendship"></i>
                                    </div>
                                    <h5 className="mt-4 mb-3">User Friendly</h5>
                                    <p className="mb-0">Collect old Arms from ARMS.zone. Those arms has history</p>
                                </div>
                            </div>
                        </div>
                        {/* pay method and sevice */}
                        <h1 className='text-center mb-0 mt-6'>Payment Method</h1>
                        <div className="row align-items-center mt-6">
                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="p-5" data-bg-color="#ffeff8">
                                    <div><img src='assets/images/hero/nagot.png' style={{width: '115px', height: '115px'}} />
                                    </div>
                                    <div className='d-flex justify-content-between'><h5 className="mt-4 mb-3">PAYPAL</h5><h5 className="mt-4 mb-3 text-danger">Comming Soon ....</h5></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="p-5" data-bg-color="#d0faec">
                                    <div><img src='assets/images/hero/card.png' style={{width: '205px'}} />
                                    </div>
                                    <div className='d-flex justify-content-between'><h5 className="mt-4 mb-3">PAYPAL</h5><h5 className="mt-4 mb-3 text-success">AVAILABLE</h5></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="p-5" data-bg-color="#ffeff8">
                                    <div><img src='assets/images/hero/bkash.png' style={{width: '115px', height: '115px'}} />
                                    </div>
                                    <div className='d-flex justify-content-between'><h5 className="mt-4 mb-3">PAYPAL</h5><h5 className="mt-4 mb-3 text-danger">Comming Soon ....</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feedback section */}
                <section className="custom-pt-2 position-relative bg-dark z-index-1">
                    <div id="particles-js"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="mb-5">
                                    <h2 className="mb-0 text-white"><span className="font-w-4 d-block">You can see our clients</span> feedback what you say?</h2>
                                </div>
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body p-0"> <i className="las la-quote-left ic-2x text-white bg-primary rounded-circle p-1"></i>
                                        <p className="font-w-5 lead my-3 text-light">ARMS.zone is a Amazing collection online shop.</p>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img alt="Image" src="assets/images/testimonial/01.jpg" className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="ms-3">
                                                <h5 className="text-primary mb-0">Raymond Lee</h5>
                                                <small className="text-muted fst-italic">- Founder</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5 mt-md-0">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body p-0"> <i className="las la-quote-left ic-2x text-white bg-primary rounded-circle p-1"></i>
                                        <p className="font-w-5 lead my-3 text-light">ARMS.zone is a Amazing collection online shop.</p>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img alt="Image" src="assets/images/testimonial/02.jpg" className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="ms-3">
                                                <h5 className="text-primary mb-0">Dani Karie</h5>
                                                <small className="text-muted fst-italic">- Supervisor</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 bg-transparent mt-5">
                                    <div className="card-body p-0"> <i className="las la-quote-left ic-2x text-white bg-primary rounded-circle p-1"></i>
                                        <p className="font-w-5 lead my-3 text-light">ARMS.zone is a Amazing collection online shop.</p>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img alt="Image" src="assets/images/testimonial/03.jpg" className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="ms-3">
                                                <h5 className="text-primary mb-0">Karlo Bond</h5>
                                                <small className="text-muted fst-italic">- Manager</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-1 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#fff" fill-opacity="1" d="M0,192L34.3,202.7C68.6,213,137,235,206,224C274.3,213,343,171,411,165.3C480,160,549,192,617,192C685.7,192,754,160,823,138.7C891.4,117,960,107,1029,128C1097.1,149,1166,203,1234,202.7C1302.9,203,1371,149,1406,122.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                        </svg>
                    </div>
                </section>





                {/* subscription section */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="bg-light bg-pos-l py-6 px-4 px-lg-6 text-center rounded" data-bg-img="assets/images/bg/02.png">
                                    <div className="mb-5">
                                        <h2><span className="font-w-4 d-block">Subscribe newsletter</span> now for got update collection</h2>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9">
                                            <div className="subscribe-form text-center">
                                                <form id="mc-form" className="row mb-3">
                                                    <div className="col-md">
                                                        <input type="email" value="" name="email" className="name form-control border-0 shadow-sm rounded" id="mc-name" placeholder="Your Email" required="" />
                                                    </div>

                                                    <div className="col-md-auto">
                                                        <input className="btn btn-dark mt-3 mt-md-0" type="submit" name="subscribe" value="Subscribe Now" />
                                                    </div>
                                                </form>
                                                <small className="text-dark">Get Connect us for collection update at ARMS.zone</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;