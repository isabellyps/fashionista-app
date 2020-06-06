import React from "react";
import '../../../node_modules/font-awesome/scss/font-awesome.scss'; 

const Header = () => (
    <header className="topbar"> 
        <div className="container">
            <a href="/" className="topbar__logo">
                <h1>FASHIONISTA</h1>
            </a>
            <div className="topbar__options">
                <button className="topbar__search">
                    <i className="fas fa-search"></i>
                </button>
                <button className="topbar__bag">
                    <i className="fas fa-shopping-bag"></i>0
                </button>
            </div>
        </div>
    </header>
);

export default Header;