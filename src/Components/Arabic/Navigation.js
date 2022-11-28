import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FiAlignRight,FiXCircle } from "react-icons/fi";
import logo from "./arabic-logo.png";

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
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/"> ترحيب </NavLink> </li>
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" > التدريبات</Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li> <NavLink onClick={toggleClass} to="">Maintenance informatique</NavLink> </li>
                                            <li> <NavLink onClick={toggleClass} to="">Langues Francaise </NavLink> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/contact"> شارك </NavLink> </li>
                                    <li className="menu-item"> <NavLink onClick={toggleClass} to="/a-propos-de-nous"> في ما يخصنا</NavLink> </li>
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