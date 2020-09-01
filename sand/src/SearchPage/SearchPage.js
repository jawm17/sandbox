import React, { useEffect, useState } from "react";
import Buttons from "../Components/Buttons";
import Popup from "../Components/Popup";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [discoveryMade, setDiscoverMade] = useState(false);
    const [textbg, setTextbg] = useState("https://mymo-secure-content.s3.us-east-2.amazonaws.com/15989309663050.7647081174685721");

    const style = {
        treasureHuntLogo: {
            background: `url(${textbg})`,
            backgroundSize: "1000 1000",
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
        window.addEventListener("touchStart", touchMove);
    }, []);

    function touchMove(e) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (e.touches[0].clientX > 155 && e.touches[0].clientX <= 230) {
            if (e.touches[0].clientY > 262 && e.touches[0].clientY <= 334) {
                setDiscoverMade(true);
                // setTextbg("https://ak.picdn.net/shutterstock/videos/1026842039/thumb/9.jpg");
            }
        }
    }

    function mouseMove(e) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (e.clientX > 155 && e.clientX <= 230) {
            if (e.clientY > 262 && e.clientY <= 334) {
                setDiscoverMade(true);
                // setTextbg("https://ak.picdn.net/shutterstock/videos/1026842039/thumb/9.jpg");
            }
        }
    }

    return (
        <div>
            <div className="treasureHuntBackground"></div>
            <p className="treasureHuntLogo" style={style.treasureHuntLogo}>o</p>
            {/* <p style={style.title}>sandsearch.io</p> */}
            <Buttons />
            {discoveryMade ? <Popup type="eth" amount="0.05" /> : null}
        </div>
    );
}   
