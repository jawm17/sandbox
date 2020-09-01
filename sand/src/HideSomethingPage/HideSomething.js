import React, { useEffect, useState } from "react";
import Buttons from "../Components/Buttons";
import "./HideSomething.css";

export default function HideSomething() {
    const [x, setX] = useState(1000);
    const [y, setY] = useState(-1000);

    const style = {
        title: {
            fontFamily: 'Fredoka One, cursive',
            background: `url(https://www.cottodeste.us/media/immagini/185_n_COTTODESTE-BLACK-WHITE-black-minimale.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: x,
            backgroundPositionY: y,
            height: 60,
            fontSize: 45,
            marginLeft: "5%",
            marginTop: 40,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            transition: "all 0.5s ease-in-out"
        }
    }

    useEffect(() => {
        setX(0);
        setY(0);
    });

    return (
        <div>
            <Buttons />
            <div style={style.title}>
                Hide Something
            </div>
        </div>
    );
}