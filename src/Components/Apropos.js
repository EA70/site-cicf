import React from 'react';
import { NavLink } from 'react-router-dom';

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

        </div>
    );
};

export default Apropos;