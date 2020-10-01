import React from 'react';
import './MyInfo.css';

function MyInfo() {
    const styleWithin = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    return (
        <div>
            <h1 style={styleWithin}>Hi, I'm Jay</h1>
            <h2 className="styleInCss">25</h2>
        </div>
    );
}

export default MyInfo;