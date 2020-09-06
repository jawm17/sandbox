import React, { useEffect, useState, useRef } from "react";
import Buttons from "../Components/Buttons";
import Popup from "../Components/Popup";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [discoveryMade, setDiscoverMade] = useState(false);
    const [size, setSize] = useState(125);
    const [left, setLeft] = useState(170);
    const [fontSize, setFontSize] = useState(40);
    let textbg = "https://mymo-secure-content.s3.us-east-2.amazonaws.com/15989309663050.7647081174685721";
    let interval = useRef(null);

    const style = {
        searchBox: {
            background: `url(${textbg})`,
            backgroundSize: "200vw 200vh",
            backgroundColor: "gray",
            backgroundPositionX: mousePosition.x,
            backgroundPositionY: mousePosition.y,
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 225,
            width: size,
            height: size,
            borderRadius: 10,
            bottom: 20,
            left: 25,
            backgroundColor: "transparent",
            margin: 0,
        },
        title: {
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: fontSize,
            bottom: 25,
            left: left,
            margin: 0,
        }
    }

    useEffect(() => {
        setSize(80);
        setLeft(125);
        setFontSize(30);
        window.addEventListener("touchmove", touchMove);
        window.addEventListener("touchstart", touchMove);
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", generateTrails);
        // return () => window.removeEventListener("mousemove", mouseMove);
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

    function generateTrails() {
        let up = false;
        window.addEventListener("mouseup", () => (up = true));
        interval = setInterval(() => {
            if (!up) {
                console.log("success actually");
            }
        }, 10)
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

    function closeModal() {
        setDiscoverMade(false);
    }

    return (
        <div>
            <div className="treasureHuntBackground"></div>
            <div className="searchBox" style={style.searchBox}></div>
            <div className="tr"></div>
            {/* <p style={style.title}>{bubbles}</p> */}
            <Buttons />
            {discoveryMade ? <Popup type="eth" amount="0.05" closeModal={() => closeModal()} /> : null}
        </div>
    );
}   
