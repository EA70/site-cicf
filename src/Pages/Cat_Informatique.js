import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Reload from '../Reload';

const Cat_Informatique = () => {
    return (
        <div className='t'>
            <Navigation />
            <div className="container-fluid">
                <div className="row">
                    <div className='header_langues'>
                        <h3>Nos formations en Informatique</h3>
                    </div>
                </div>
            </div>

            <div onClick={Reload} className="container my-5">
                <div className="row mb-5">
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo hic cum. Ipsam neque corporis consectetur deleniti est eius, dolore culpa explicabo. Fugit praesentium ipsum magni est cumque vel perspiciatis cupiditate eum! Eaque culpa modi natus excepturi aspernatur dolores cumque?
                    </p>

                    <div className="col-md-4">
                        <Link to="/formation/maintenance-informatique" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Maintenance Informatique</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Apprenez les langues</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/formation/marketing" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Marketing Digital</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Apprenez les langues</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/formation/multimedia" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Multimédia & Infographie 3D</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Apprenez les langues</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/formation.jpg" alt="" />
                            </div>
                        </Link>
                    </div>



                </div>

                <div className="row mb-5">
                    <div className="col-md-4">
                        <Link to="/formation/maintenance-gsm" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Maintenance & Réparation GSM</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Apprenez les langues</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/formation/informatique" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Informatique de base et avancé.</h3>
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

export default Cat_Informatique;