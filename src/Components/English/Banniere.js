import React from 'react';
import { NavLink } from 'react-router-dom';

const Banniere = () => {
    return (
        <div className='banniere'>
            <div className="banniere_contenu">
                <div className="container">
                    <div className="row mt-5 py-5">
                        <div className="mt-5 pt-5 text-left">
                            <h2 className="cicf">Think about your future Professional ...</h2>
                            <p className="sous-cicf">CICF secures your future.</p>

                            <div className="banniere_btns">
                                <NavLink to="/a-propos-de-nous">About Us</NavLink>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banniere;