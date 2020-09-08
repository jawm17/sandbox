import React, { useEffect, useState } from "react";
import history from '../history';
import "./ButtonsStyle.css";

export default function Buttons(props) {

    useEffect(() => {
        if (props.page === "hide") {

        }
    });

    if (props.page === "hide") {
        return (
            <div className="buttons">
                <div className="buttonArea" onClick={() => history.push("/")}>
                    <div className="findSomething">
                        <img className="searchIcon" src="https://img.icons8.com/ios-glyphs/60/000000/search.png"/>
                    </div>
                </div>
                <div className="info"></div>
            </div>
        );
    } else {
        return (
            <div className="buttons">
                <div className="buttonArea" onClick={() => history.push("/hide")}>
                    <div className="hideSomething"></div>
                </div>
                <div className="info"></div>
            </div>
        );
    }
}