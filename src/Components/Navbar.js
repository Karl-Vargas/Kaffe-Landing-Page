import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToSignUp } from './Button';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Kaffe <i className="fas fa-fill-drip"></i> 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/specialtycoffee' className='nav-links' onClick={closeMobileMenu}>
                            Specialty Coffee
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/ourstory' className='nav-links' onClick={closeMobileMenu}>
                        Our Story
                        </Link>
                        </li>
                        <li>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                        </li>
                    </ul>
                    {button && <ButtonToSignUp buttonStyle='btn--outline'>Sign Up</ButtonToSignUp>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
