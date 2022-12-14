import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FiAlignRight,FiXCircle } from "react-icons/fi";
import logo from "./Logo_cicf.png";

const Navigation = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu){
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }



    return (
        <div className='header' >
            <div className="header__middle">
                <div className="container">
                    <div className="row">
                        {/* Section du Logo */}
                        <div className="header__middle__logo">
                            <NavLink to="/">
                                <img src={logo} className='logo' width="80" alt="logo__cicf" />
                            </NavLink>
                        </div>

                        {/* Section des menus */}
                        <div className="header__middle_menus">
                            <nav className="main-nav">
                                {/** Section Responsive */}
                                {
                                    isResponsiveclose === true ? <>
                                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                    </> : <>
                                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                    </>
                                }


                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/"> Accueil </NavLink> </li>
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" > Formations</Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li> <NavLink onClick={toggleClass} to="/programmes/langues">En langues</NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="/programmes/informatiques">En Informatique </NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="/formation/comptabilite">En Comptabilit?? </NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="/formation/multimedia">En Multim??dia et Infographie 3D </NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="/formation/marketing">En Marketing Digital </NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="/formation/coiffure">En coiffure, esth??tique & Onglerie </NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="/formation/patisserie">En Patisserie </NavLink> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/clubs"> Nos clubs </NavLink> </li>
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/contact"> Contact </NavLink> </li>
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/a-propos-de-nous"> A propos de Nous </NavLink> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;