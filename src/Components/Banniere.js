import React from 'react';
import { NavLink } from 'react-router-dom';

const Banniere = () => {
    return (
        <div className='banniere'>
            <div className="banniere_contenu">
                <div className="container">
                    <div className="row mt-5 py-5">
                        <div className="mt-5 pt-5 text-left">
                            <h2 className="cicf">Pensez à votre futur Professionnel ...</h2>
                            <p className="sous-cicf">CICF assure votre avenir.</p>

                            <div className="banniere_btns">
                                <NavLink to="/a-propos-de-nous">A propos de nous</NavLink>
                                <NavLink to="/contact">Contactez nous</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banniere;