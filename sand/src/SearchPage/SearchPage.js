import React, { useEffect, useState } from "react";
import Buttons from "../Components/Buttons";
import Popup from "../Components/Popup";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [discoveryMade, setDiscoverMade] = useState(false);
    const textbg = "https://ak.picdn.net/shutterstock/videos/1026842039/thumb/9.jpg";

    const style = {
        treasureHuntLogo: {
            background: `url(${textbg})`,
            backgroundColor: "gray",
            backgroundPositionX: mousePosition.x,
            backgroundPositionY: mousePosition.y,
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 225,
            bottom: 0,
            left: 25,
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
        window.addEventListener("touchmove", touchMove);
        // return () => window.removeEventListener("touchmove", touchMove);
        window.addEventListener("mousemove", mouseMove);
        // return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    function touchMove(e) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (e.touches[0].clientX > 0 && e.touches[0].clientX <= 100) {
            if (e.touches[0].clientY > 40 && e.touches[0].clientY <= 600) {
                setDiscoverMade(true);
            }
        }
    }

    function mouseMove(e) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (e.clientX > 0 && e.clientX <= 100) {
            if (e.clientY > 40 && e.clientY <= 600) {
                setDiscoverMade(true)
            }
        }
    }

    return (
        <div>
            <div className="treasureHuntBackground"></div>
            <p className="treasureHuntLogo" style={style.treasureHuntLogo}>o</p>
            {/* <p style={style.title}>sandsearch.io</p> */}
            <Buttons />
            {discoveryMade ? <Popup type="eth" amount="0.05"/> : null}
        </div>
    );
}   
