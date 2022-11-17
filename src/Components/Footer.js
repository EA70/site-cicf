import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiFacebook, SiInstagram, SiLinkedin} from "react-icons/si";
import { MdEmail, MdHome, MdPhone } from "react-icons/md";
import Reload from '../Reload';

const Footer = () => {
    return (
        <div className='footer' >
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className='mb-5'>A propos nous</h5>
                        <p className='aboutUsFooter mb-4'>
                        Le centre International Chebbi de Formation est un centre de formation professionnel dans divers dommaine. Le Centre met à disposition pour tous les niveaux une épuipeé...
                        </p>
                        <NavLink onClick={Reload}  className="btnLire text-white" to="/a-propos-de-nous">Lire la suite</NavLink>
                    </div>

                    <div className="col-md-4">
                        
                        

                    </div>

                    <div className="col-md-4">
                        <h5 className='mb-5'>Contact</h5>

                        <div className="details">
                            <div className="detailItem">
                                <span className="itemKey"> <MdPhone /> </span>
                                <span className="itemValue">95 23 19 18</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey"> <MdEmail /> </span>
                                <span className="itemValue">contact@cicf-formation.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey"> <MdHome /> </span>
                                <span className="itemValue">37, Avenue TLILI - Cité Jawhara, Tunis</span>
                            </div>
                        </div>

                        <h5 className='mt-5'>Suis-nous</h5>
                        <div className="social_networks my-4">
                                <NavLink to=""> <SiFacebook /> </NavLink>
                                <NavLink to=""> <SiInstagram /> </NavLink>
                                <NavLink to=""> <SiLinkedin /> </NavLink>
                        </div>
                    </div>
                </div>

 

            </div>
            <div className="">
                <div className="copy">
                    <div>
                        <p>2022 - Centre Internationale Chebbi de Formation@Tous droits reservés.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;