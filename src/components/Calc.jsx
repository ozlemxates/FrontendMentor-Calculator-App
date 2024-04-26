import React from "react";
import "./Calc.css";

const Calc = ({ onKeyPress }) => {
    const handleOperation = (operation) => {
        onKeyPress(operation);
    };

    return (
        <main className="Calc">
            <div className="grid-container">
                <div className="grid-item wht-hover" onClick={() => handleOperation("7")}>7</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("8")}>8</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("9")}>9</div>
                <div className="grid-item cyan-bg" onClick={() => handleOperation("DEL")}>DEL</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("4")}>4</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("5")}>5</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("6")}>6</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("+")}>+</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("1")}>1</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("2")}>2</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("3")}>3</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("-")}>-</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation(".")}>.</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("0")}>0</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("/")}>/</div>
                <div className="grid-item wht-hover" onClick={() => handleOperation("x")}>x</div>
                <div className="grid-item span-2 cyan-bg" onClick={() => handleOperation("RESET")}>RESET</div>
                <div className="grid-item span-2 red-bg" onClick={() => handleOperation("=")}>=</div>
            </div>
        </main>
    );
};

export default Calc;