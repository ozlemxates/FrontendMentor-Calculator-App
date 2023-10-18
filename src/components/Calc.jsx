import React from "react";
import './Calc.css';

const Calc = () => {
    return (
    <main className="Calc">
        <div class="grid-container">
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item cyan-bg">DEL</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">+</div>
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">-</div>
            <div class="grid-item">.</div>
            <div class="grid-item">0</div>
            <div class="grid-item">/</div>
            <div class="grid-item">x</div>
            <div class="grid-item span-2 cyan-bg">RESET</div>
            <div class="grid-item span-2 red-bg">=</div>
        </div>
    </main>
       
    )
}

export default Calc;