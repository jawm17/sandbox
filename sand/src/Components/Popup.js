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
            marginTop: 30,
            maxWIdth: 400,
            width: "97vw",
            height: "80vh",
            borderRadius: 5,
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out",
            textAlign: "center",
            fontFamily: 'Fredoka One, cursive',
            fontSize: 40,
            backgroundColor: "lightblue"
        },
        img: {
            width: 300,
            height: 400
        }
    }

    useEffect(() => {
        setInitHeight(350);
        setInitWidth(400);
        if (props.type === "eth") {
            if (props.amount) {
                setMessage(`You've found ${props.amount} Ethereum`);
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
                        <div>
                            {message}
                        </div>
                        <img style={style.img} src="https://www.thesun.co.uk/wp-content/uploads/2019/05/danny1.jpg"></img>
                        <div onClick={() => props.closeModal()}>x</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }

}
