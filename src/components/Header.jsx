import React from "react";
import './Header.css';

const Header = () => {
    return (
        <main className="Header">
            <div className="logo">
                <h1>calc</h1>
            </div>
            <div className="select-theme">
                <h4>THEME</h4>
                <div className="radio-buttons">
                    <input id="theme1" type="radio" />
                    <input id="theme2" type="radio" />
                    <input id="theme3" type="radio" /> 
                </div>
            </div>
        </main>
    )
}

export default Header;