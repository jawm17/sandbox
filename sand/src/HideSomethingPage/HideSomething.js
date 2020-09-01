import React, { useEffect, useState } from "react";
import Buttons from "../Components/Buttons";
import "./HideSomething.css";

export default function HideSomething() {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const style = {
        title: {
            fontFamily: 'Fredoka One, cursive',
            background: `url(https://lh3.googleusercontent.com/proxy/PIwidsZgo6c-2CbNT1wJnDPgsJD5xksw0xPVjkk3NVrZlkrjBwUAm3ibt1VXjnN9smTpBxtW-lZSu4b_XqqbEz23e745ViHhs4bwNhSFgFZ9KNVcNsirfF70XnMWZvDHj4ZafMoOMrSBoVoEIxSg3piRJmHAhol_NOewZjYvXp7WHrVV8rlOhWYk3tPYcA)`,
            height: height,
            width: width,
            backgroundPositionX: -500,
            backgroundPositionY: -5000,
            fontSize: 45,
            marginLeft: "5%",
            marginTop: 40,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            transition: "all 1s ease-in-out"
        }
    }

    useEffect(() => {
        setHeight("100vh");
        setWidth("100vw");
    });

    return (
        <div>
            <Buttons />
            <div style={style.title}>
                HideSomething
            </div>
        </div>
    );
}