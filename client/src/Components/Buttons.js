import React, { useEffect, useState } from "react";
import history from '../history';
import "./ButtonsStyle.css";

export default function Buttons(props) {
    
    if (props.page === "hide") {
        return (
            <div className="buttons">
                <div className="buttonArea" onClick={() => window.location = ("/")}>
                    <div className="findSomething">
                        <img className="searchIcon" src="https://mymo-secure-content.s3.us-east-2.amazonaws.com/ICON4.png"/>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="buttons">
                <div className="buttonArea" onClick={() => window.location = ("/hide")}>
                    <div className="hideSomething"></div>
                </div>
            </div>
        );
    }
}