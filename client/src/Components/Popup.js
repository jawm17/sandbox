import React, { useState, useEffect } from "react";
import itemWharehouse from "../services/itemWharehouse";
import "./PopupStyle.css";

export default function Popup(props) {
    const [initHeight, setInitHeight] = useState(10);
    const [initWidth, setInitWidth] = useState(10);
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
            position: "absolute",
            top: 30,
            left: 18,
            width: 20,
            height: 20
        }
    };

    useEffect(() => {
        setInitHeight(350);
        setInitWidth(400);
        console.log(props.info.id);
        setMessage(`You found ${props.info.quantity} ${props.info.itemName}`);
        updateItem();
    }, []);

    function updateItem() {
        itemWharehouse.setDiscovered(props.info.id).then(data => {
            console.log(data);
        });
    }

    return (
        <div>
            <div style={style.shaded}>
                <div style={style.flexArea}>
                    <div style={style.popup}>
                        <img style={style.img} src={props.info.heroImg} alt="backdrop"></img>
                        <img className="roundImg" src={props.info.mainImg} alt="round photo"></img>
                        <img className="closeIcon" style={style.close} onClick={() => props.closeModal()} src="https://logodix.com/logo/1355943.png" alt="close icon"></img>
                        <div className="message">
                            {message}
                        </div>
                        <div className="area">
                            <div className="claimPrize" onClick={() => window.location.href = props.info.link}>
                                Claim prize
                            <img className="linkIcon" src="https://mymo-secure-content.s3.us-east-2.amazonaws.com/15992565776800.7710307302014743" alt="External link"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
