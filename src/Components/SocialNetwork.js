import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiFacebook, SiInstagram, SiLinkedin} from "react-icons/si";

const SocialNetwork = () => {
    return (
        <div className="social_network">
            <div className="links">
                <NavLink to=""> <SiFacebook /> </NavLink>
                <NavLink to=""> <SiInstagram /> </NavLink>
                <NavLink to=""> <SiLinkedin /> </NavLink>
                
                <NavLink to="/arabic"> AR</NavLink>
                <NavLink to="/"> FR </NavLink>
                <NavLink to="/english"> EN </NavLink>
                
            </div>
        </div>
    );
};

export default SocialNetwork;