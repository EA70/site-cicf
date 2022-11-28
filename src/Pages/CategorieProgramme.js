import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Reload from '../Reload';

const CategorieProgramme = () => {
    return (
        <div className='categorie'>
            <Navigation />

            <div className="container-fluid">
                <div className="row">
                    <div className='header_programmes'>
                        <h3>Les catégories de nos formations</h3>
                    </div>
                </div>
            </div>

            <div onClick={Reload }  className="container my-5">
                <div  className="row my-5">
                    <h2 className='my-5 fw-bold'>Catégories de nos formations</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere nihil a tempora reprehenderit magnam eum? Ipsa facere non voluptatem facilis necessitatibus veniam, tenetur modi consectetur quisquam, ratione ducimus natus.</p>

                    <div className="col-md-3 my-3">
                        <NavLink  to="/programmes/langues">
                            <div className="pres">
                                <img src="/../img/banniere.jpg" alt="" />
                                <div className="card-body">
                                    <h5>Formation en langue</h5>
                                    <span>Lire plus</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-md-3 my-3">
                        <NavLink to="/programmes/informatiques">
                            <div className="pres">
                                <img src="/../img/formation.jpg" alt="" />
                                <div className="card-body">
                                    <h5>Formation en Informatique</h5>
                                    <span>Lire plus</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-md-3 my-3">
                        <NavLink to="/programmes/patisserie-coiffure">
                            <div className="pres">
                                <img src="/../img/PP.jpg" alt="" />
                                <div className="card-body">
                                    <h5>Formation en Patisserie & Coiffure</h5>
                                    <span>Lire plus</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-md-3 my-3">
                        <NavLink to="/programmes/gestion">
                            <div className="pres">
                                <img src="/../img/g.jpg" alt="" />
                                <div className="card-body">
                                    <h5>Formation en Gestion </h5>
                                    <span>Lire plus</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                </div>

                <div  className="row mb-5">
                    <div className="col-md-3 mx-auto my-3">
                        <NavLink to="/clubs">
                            <div className="pres">
                                <img src="/../img/c.jpg" alt="" />
                                <div className="card-body">
                                    <h5>Nos Clubs</h5>
                                    <span>Lire plus</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>


{/* Toutes nos formations */}

            <div onClick={Reload} className="all-formations">
            <div className="container mb-5">
                <div className="row mb-3">
                    <h2 className='my-5 fw-bold'>Toutes nos formations</h2>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere nihil a tempora reprehenderit magnam eum? Ipsa facere non voluptatem facilis necessitatibus veniam, tenetur modi consectetur quisquam, ratione ducimus natus.</p>


                    <div className="col-md-4">
                        <Link to="/formation/langues" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Langue Française, Anglaise, Espagnol et italienne.</h3>
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
                        <Link to="/formation/comptabilite" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Comptabilité, fiscalité et gestion d'entreprise.</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link to="/formation/multimedia" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Multimédia et Infographie 3D.</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>


                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <Link to="/formation/informatique" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Informatique</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/formation.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/formation/maintenance-gsm" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Maintenance GSM</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/formation/maintenance-informatique" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Maintenance Informatique</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-4">
                        <Link to="/formation/marketing" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Marketing Digital</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/formation/coiffure" className='text-decoration-none' >
                            <h3 className='text-center fw-bold'>Coiffure</h3>
                            <div className="img-container hover">
                                <span>
                                    <h3>Lorem, ipsum dolor.</h3>
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
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint!</p>
                                </span>
                                <img src="/../img/banniere.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    );
};

export default CategorieProgramme;