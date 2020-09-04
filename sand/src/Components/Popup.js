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
            width: "150vw",
            height: "150vh",
            top: -10,
            left: -10,
            backgroundColor: "rgb(0,0,0)", /* Fallback color */
            backgroundColor: "rgba(0,0,0,0.6)", /* Black w/ opacity */
        },
        flexArea: {
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
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
                    <div style={style.flexArea}>
                        <div style={style.popup}>
                            <img style={style.img} src="https://image.freepik.com/free-vector/business-candle-stick-graph-chart-stock-market-investment-trading-blue-background_62391-93.jpg" alt="backdrop"></img>
                            <img className="roundImg" src="https://pbs.twimg.com/profile_images/1122884534377357313/WVB5dcBa_400x400.png" alt="round photo"></img>
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
            </div>
        );
    } else {
        return null;
    }

}
