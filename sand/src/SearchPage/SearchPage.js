import React, { useEffect, useState } from "react";
import Buttons from "../Components/Buttons";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const textbg = "https://ak.picdn.net/shutterstock/videos/1026842039/thumb/9.jpg";

    const style = {
        treasureHuntLogo: {
            background: `url(${textbg})`,
            backgroundColor: "gray",
            backgroundPositionX: mousePosition.x,
            backgroundPositionY: mousePosition.y,
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 300,
            bottom: 0,
            left: 40,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            margin: 0,
        },
        title: {
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 70,
            bottom: 50,
            left: 240,
            margin: 0,
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    function mouseMove(e) {
        // console.log("x = " + e.clientX + " y = " + e.clientY);
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (e.clientX > 390 && e.clientX <= 400) {
            if (e.clientY > 40 && e.clientY <= 50) {
                window.alert("You found 12 eth!");
            }
        }
    }

    return (
        <div>
            <div className="treasureHuntBackground"></div>
            <p className="treasureHuntLogo" style={style.treasureHuntLogo}>o</p>
            {/* <p style={style.title}>sandsearch.io</p> */}
            <Buttons />
        </div>
    );
}   