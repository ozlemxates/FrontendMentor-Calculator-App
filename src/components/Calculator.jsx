import React, { useState } from "react";
import Calc from "./Calc";
import Result from "./Result";
import * as math from "mathjs";

const Calculator = () => {
    const [input, setInput] = useState("");
    const handleKeyPress = (value) => {
        let processedValue = value;

        const operators = ["+", "-", "x", "/", "."];
        const lastChar = input[input.length - 1];

        if (operators.includes(processedValue) && operators.includes(lastChar)) {
            setInput(prevInput => prevInput.slice(0, -1) + processedValue);
            return;
        }
        
        switch (processedValue) {
            case "DEL":
                setInput(prevInput => prevInput.slice(0, -1));
                break;
            case "RESET":
                setInput("");
                break;
            case "=":
                try {
                    const result = math.evaluate(input.replace(/x/g,"*"));
                    setInput(result.toString());
                } catch (error) {
                    setInput("Error");
                }
                break;
            default:
                setInput(prevInput => prevInput + value);
                break;
        }
    };

    return (
        <div>
            <Result input={input} />
            <Calc onKeyPress={handleKeyPress} />
        </div>
    );
};

export default Calculator;