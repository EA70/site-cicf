import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Reload from '../Reload';

const Cat_Patisserie = () => {
    return (
        <div className='t'>
            <Navigation />
            <div className="container-fluid">
                <div className="row">
                    <div className='header_langues'>
                        <h3>Nos formations en Patisserie & Coiffures</h3>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row mb-5">
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo hic cum. Ipsam neque corporis consectetur deleniti est eius, dolore culpa explicabo. Fugit praesentium ipsum magni est cumque vel perspiciatis cupiditate eum! Eaque culpa modi natus excepturi aspernatur dolores cumque?
                    </p>

                    <div className="col-md-4">
                        <Link to="/formation/coiffure" onClick={Reload} className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Coiffure</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Apprenez l'esthétique, la coiffure</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="/formation/patisserie" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Patisserie</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Apprenez les langues</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>



                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Cat_Patisserie;