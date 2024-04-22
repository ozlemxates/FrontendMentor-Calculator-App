import './Result.css';
import React from "react";

const Result = ({ input }) => {
    return (
        <div className="Result">
            <input className="bar" type="text" value={input} readOnly />
        </div>
    );
};

export default Result;