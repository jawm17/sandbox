import React, { useState } from "react";

export default function Popup(props) {

    const style = {
        shaded: {
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            backgroundColro: "rgb(0,0,0)", /* Fallback color */
            backgroundColor: "rgba(0,0,0,0.6)", /* Black w/ opacity */
        },
        popup: {
            marginTop: 50,
            width: 400,
            height: 350,
            borderRadius: 5,
            backgroundColor: "white"
        }
    }

    return (
        <div>
            <div style={style.shaded}>
                <div style={style.popup}>
                    You've found something!!!
             </div>
            </div>
        </div>
    );
}
