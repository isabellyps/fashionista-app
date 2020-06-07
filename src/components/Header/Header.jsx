import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = () => (
    <header className="topbar"> 
        <div className="topbar__container">
            <a href="/" className="topbar__logo">
                <h3>FASHIONISTA</h3>
            </a>
            <div className="topbar__options">
                <button className="topbar__search">
                    <FontAwesomeIcon icon={ faSearch }/>
                </button>
                <button className="topbar__bag">
                    <FontAwesomeIcon icon={ faShoppingBag }/><span>0</span>
                </button>
            </div>
        </div>
    </header>
);

export default Header;