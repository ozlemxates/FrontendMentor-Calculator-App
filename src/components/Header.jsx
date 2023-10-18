import React from "react";
import './Header.css';

const Header = () => {
    return (
        <main className="Header">
            <div className="text">
                <h1>calc</h1>
                <h4>THEME</h4>
            </div>
            <div className="select-theme">
                <div className="label">
                    <label for="theme1">1</label>
                    <label for="theme2">2</label>
                    <label for="theme3">3</label>    
                </div>
                <div className="input">
                    <input id="theme1" type="radio" />
                    <input id="theme2" type="radio" />
                    <input id="theme3" type="radio" />
                </div>
            </div>
          
        </main>
      
    )
}

export default Header;