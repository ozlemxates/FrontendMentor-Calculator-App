import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="text">
                <h4>calc</h4>
                <h5>THEME</h5>
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
          
        </div>
      
    )
}

export default Header;