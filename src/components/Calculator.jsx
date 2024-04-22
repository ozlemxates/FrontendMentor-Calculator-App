import React, { useState } from "react";
import Calc from "./Calc";
import Result from "./Result";
import * as math from "mathjs";

const Calculator = () => {
    const [input, setInput] = useState("");
    const handleKeyPress = (value) => {
        let processedValue = value;
        if (value === "x") {
            processedValue = "*";
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
                    const result = math.evaluate(input);
                    setInput(result.toString());
                } catch (error) {
                    setInput("Error");
                }
                break;
            default:
                setInput(prevInput => prevInput + processedValue);
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