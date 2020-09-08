import React, { useEffect, useState } from "react";
import itemWharehouse from "../services/itemWharehouse";
import Buttons from "../Components/Buttons";
import "./HideSomething.css";

export default function HideSomething() {
    const [x, setX] = useState(1000);
    const [y, setY] = useState(-1000);
    const [link, setLink] = useState("");

    const style = {
        title: {
            fontFamily: 'Fredoka One, cursive',
            // background: `url(https://www.cottodeste.us/media/immagini/185_n_COTTODESTE-BLACK-WHITE-black-minimale.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: x,
            backgroundPositionY: y,
            height: 60,
            fontSize: 45,
            marginLeft: 30,
            marginTop: 70,
            // WebkitTextFillColor: "transparent",
            // WebkitBackgroundClip: "text",
            transition: "all 0.5s ease-in-out",
            color: "white"
        },
        background: {
            height: "100vh",
            width: "100vw",
            backgroundColor: "black",
            position: "fixed",
            top: 0,
            left: 0
        }
    }

    useEffect(() => {
        setX(0);
        setY(0);
    });

    function inputChange(e) {
        setLink(e.target.value);
    }

    function postItem() {
        itemWharehouse.postItem(link);
    }

    return (
        <div>
            <div style={style.background} className="blackBack">
                <Buttons page="hide" />
                <div style={style.title}>
                    Hide Something
            </div>
                <input onChange={(e) => inputChange(e)} value={link} />
                <button onClick={() => postItem()}>submit</button>
            </div>
        </div>
    );
}