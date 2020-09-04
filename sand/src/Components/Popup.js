import React, { useState, useEffect } from "react";

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
            backgroundColor: "lightblue"
        },
        img: {
            width: "100%",
            height: 200,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        },
        close: {
            float: "left"
        }
    }

    useEffect(() => {
        setInitHeight(350);
        setInitWidth(400);
        if (props.type === "eth") {
            if (props.amount) {
                setMessage(`You've found ${props.amount} dsfad`);
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
                        <img style={style.img} src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SRsQjwFQMjby34s1c/videoblocks-falling-yellow-cryptocurrency-particles-bounce-bright-glowing-crypto-coin-symbols-like-bitcoin-ethereum-and-ripple-rain-on-dollar-and-euro-data-stream-abstract-3d-animation-futuristic-concept_saelf2v_t7_thumbnail-1080_12.png"></img>
                        <div style={style.close} onClick={() => props.closeModal()}>x</div>
                        <div>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }

}
