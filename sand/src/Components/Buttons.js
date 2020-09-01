import React, { useEffect, useState } from "react";
import history from '../history';
import "./ButtonsStyle.css";

export default function Buttons() {

    return (
        <div className="buttons">
            <div className="buttonArea" onClick={() => history.push("/hide")}>
                <div className="hideSomething"></div>
            </div>
            <div className="findSomething"></div>
        </div>
    );
}