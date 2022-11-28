import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Reload from '../Reload';
import { FaBookReader, FaCalendarAlt, FaCertificate, FaPhoneSquareAlt, FaUser } from "react-icons/fa";

const SoutienEtudiants = () => {
    return (
        <div className='services'>
            <Navigation />

                <div className="container">
                    <div className="row">

                        <div className="col-md-6 mx-auto">
                            <h2 className='text-center my-5 fw-bold'>Club de soutien pour les étudiants </h2>
                            <img src="/../img/banniere.jpg" alt="" className='mb-4'/>   
                            
                            <h4 className='my-3 fw-bold'> <FaBookReader /> Description</h4>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi pariatur tempore laudantium placeat consequuntur? Tempore, asperiores accusamus! Fugit blanditiis quod tenetur numquam similique, veniam a laboriosam alias amet!</p>

                            <h4 className='my-3 fw-bold'> <FaCertificate /> Objectifs et Certifications</h4>
                            <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi consectetur optio vitae enim voluptatem accusamus dolor iure voluptas error magni?</p>

                            <h4 className='my-3 fw-bold'> <FaCalendarAlt /> Volume et Horaire</h4>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat similique veniam earum!</p>

                            <h4 className='my-3 fw-bold'> <FaUser /> Qui peut faire cette formation ?</h4>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, temporibus nostrum!</p>

                            <h4 className='my-3 fw-bold'> <FaPhoneSquareAlt /> Pour tout autre besoin </h4>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reiciendis magnam neque nam quaerat nulla unde labore culpa esse exercitationem tenetur amet possimus est, corporis eius recusandae distinctio at ea! <Link to="/contact" onClick={Reload}>Nous contacter</Link> </p>
                        </div>

                    </div>
                </div>

            <Footer />
        </div>
    );
};

export default SoutienEtudiants;