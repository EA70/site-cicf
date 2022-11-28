import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Banniere from '../../Components/English/Banniere';
import Navigation from '../../Components/English/Navigation';

const Home_English = () => {
    return (
        <div  className='home'>
            <Navigation />
            <Banniere />

            <div className="container mt-5 mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5">
                        <img src="/../img/banRev.png" alt="" className='img-enseignant'/>   
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 mb-5">
                        <h1 className="fw-bold display-4">Qualified teachers, </h1>
                        <h3 className='mb-5'>who help you and teach you the realities of the job, equipment as in the field... Here, everything makes sense...!</h3>

                        <NavLink to="" className='btn-pgrm mt-5'>Discover our trainings<MdKeyboardArrowRight /> </NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_English;