import React, { useState, useEffect } from "react";
import "./PopupStyle.css";

export default function Popup(props) {
    const [initHeight, setInitHeight] = useState(10);
    const [initWidth, setInitWidth] = useState(10);
    const [open, setOpen] = useState(true);
    const [message, setMessage] = useState("");

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
            marginTop: 20,
            maxWidth: 600,
            width: "97vw",
            height: "92vh",
            borderRadius: 5,
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out",
            textAlign: "center",
            fontFamily: 'Fredoka One, cursive',
            fontSize: 40,
            backgroundColor: "white"
        },
        img: {
            width: "100%",
            height: 180,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        },
        close: {
            position: "fixed",
            top: 30
        }
    }

    useEffect(() => {
        setInitHeight(350);
        setInitWidth(400);
        if (props.type === "eth") {
            if (props.amount) {
                setMessage(`You've found 1 free stock!`);
            }
        }
    })

    function closePopup() {
        setOpen(false);
    }

    if (open) {
        return (
            <div>
                <div style={style.shaded}>
                    <div style={style.popup}>
                        <img style={style.img} src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SRsQjwFQMjby34s1c/videoblocks-falling-yellow-cryptocurrency-particles-bounce-bright-glowing-crypto-coin-symbols-like-bitcoin-ethereum-and-ripple-rain-on-dollar-and-euro-data-stream-abstract-3d-animation-futuristic-concept_saelf2v_t7_thumbnail-1080_12.png" alt="backdrop"></img>
                        <img className="roundImg" src="https://ethereum.org/static/bfc04ac72981166c740b189463e1f74c/a7715/eth-diamond-black-white.jpg" alt="round photo"></img>
                        <div style={style.close} onClick={() => props.closeModal()}>x</div>
                        <div className="message">
                            {message}
                        </div>
                        <div className="area">
                            <div className="claimPrize" onClick={() => window.location.href = 'https://act.webull.com/mo/dAIYgeYXCzDD/ebe/inviteUs/'}>
                                Claim prize
                            <img className="linkIcon" src="https://mymo-secure-content.s3.us-east-2.amazonaws.com/15992565776800.7710307302014743" alt="External link"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }

}
