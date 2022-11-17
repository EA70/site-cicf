import React from 'react';
import { NavLink } from 'react-router-dom';
import Reload from "../Reload";

const Apropos = () => {
    return (
        <div className='about-us'>

            <div className="container-fluid">
                <div className="row">

                    <div className='header_about'>
                        <h3>A propos de Nous</h3>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"> <NavLink to="/" className="text-decoration-none text-white ">Home</NavLink> </li>
                                <li className="breadcrumb-item active" aria-current="page" > A propos de nous </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    
                    <div className="col-md-6">
                        <h1 className="display-5 mb-5 fw-bold">Le Centre International Chebbi de Formation</h1>
                        <p>
                            Le centre International Chebbi de Formation est un centre de formation professionnel dans divers dommaine. Le Centre met à disposition pour tous les niveaux une épuipe de professeurs expérimentés et qualifiés afin de satisfaire toutes vos demandes. 
                        </p>

                    </div>

                    <div className="col-md-1"></div>

                    <div className="col-md-5">
                        <img src="/../img/banniere.jpg" alt="" className='img-about'/>
                    </div>

                </div>

                <div className="row my-5">
                    <h1 className="display-5 text-center mb-5 fw-bold">Nos essentiels objectifs</h1>
                    <div className="col-md-5 mx-auto">
                        <div className="">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    1
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    Satisfaire vos besoins et demandes.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    2
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    Donner une bonne et excellente qualité de formation.
                                </div>
                                </div>
                            </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        3
                                    </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        Apprendre, maitriser et évoluer vos compétences.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        4
                                    </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        Fournir également un local pour donner des cours de soutien (études) pour tous les niveaux.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        5
                                    </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        Fournir un lieu de loisirs et distraction pour vos chers enfants.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/../img/banniere.jpg" alt="" className='img-about'/>
                    </div>
                    <div className="col-md-6 text-center text-white about-colos py-5">
                        <h1 className='fw-bold my-5'>CICF : Centre de formation</h1>
                        <p>
                            Nous offrons un environnement chaleureux et agréable.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <h1 className='fw-bold'>Une équipe de professionnels et qualifié toujours présente</h1>
                        <p>
                            Au CICF, le dicton "L'union fait la force" prend tout sons sens. Chaque membre de notre grande équipe travaille à ta réussite. Des enseignats qui te soutiennent dans tes apprentisssages au personnel administratif qui te guide, nous sommes là pour t'aider.
                        </p>

                        <p>N'hésite pas à <NavLink onClick={Reload} to="/contact">nous contacter</NavLink> en cas de besoin, ou pour quoi ce soit; nous sommes là pour toi !</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <img src="/../img/banniere.jpg" alt="" className='img-about'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Apropos;