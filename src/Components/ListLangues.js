import React from 'react';
import { NavLink } from 'react-router-dom';

const ListLangues = () => {
    return (
        <div className='langues'> 
            <div className="list">
                <h3 className='text-center' >Choissisez une langue</h3>
                <NavLink to="/arabic">Arabic</NavLink>
                <NavLink to="/english">English</NavLink>
                <NavLink to="/">Francais</NavLink>
            </div>
        </div>
    );
};

export default ListLangues;