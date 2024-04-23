import React, { useState } from "react";
import './Header.css';

const Header = () => {
    const [selectTheme, setSelectTheme] = useState(null);

    const handleThemeChange = (theme) => {
        setSelectTheme(theme);
        console.log("Tıklandı:", theme); 
    };

    const themes = ['theme1', 'theme2', 'theme3'];

    return (
        <main className="Header">
            <div className="logo">
                <h1>calc</h1>
            </div>
            <div className="select-theme">
                <h4>THEME</h4>
                <div className="radio-buttons">
                    {themes.map((theme, index) => (
                        <input 
                            key={index}
                            id={theme} 
                            type="radio" 
                            checked={selectTheme === theme} 
                            onChange={() => handleThemeChange(theme)} 
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Header;
