import React from 'react';
import { NavLink } from 'react-router-dom';

const ChoixLangue = () => {
    return (
        <div className='choix_langues'>
            <div className="select_langages">
                <NavLink to="/langues">Selectionnez la langues</NavLink>
            </div>
        </div>
    );
};

export default ChoixLangue;