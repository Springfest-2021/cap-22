import React from 'react';
import Logo from "../../../Assets/Logo/logo.png";

const Message = (props) => {
    const caIcon = localStorage.getItem("pic");
    const direction = props.data.to_ca ? "right" : "left";
    const bgColor = props.data.to_ca ? "#3079f2" : "rgba(233, 238, 247, 0.9)";
    const color = props.data.to_ca ? "white" : "#010b1c";
    const borderRadius = props.data.to_ca ? "12px 12px 0px 12px" : "12px 12px 12px 0px"
    return (
            props.data.to_ca ? 
            (
                <div style={{width: "100%", textAlign: direction, height: "auto", display: "inline-flex", justifyContent: props.data.to_ca ? "flex-end" : "flex-start"}}>
                    <div className="message_item" style={{color: color, backgroundColor: bgColor, borderRadius: borderRadius}}>
                        {props.data.message}
                    </div>
                    <img src={caIcon} className="message_sender_icon" width="40" height="40" style={{marginLeft: "10px"}} />
                </div>
            )
            :
            (
                <div style={{width: "100%", textAlign: direction, height: "auto", display: "inline-flex", justifyContent: props.data.to_ca ? "flex-end" : "flex-start"}}>
                    <img src={Logo} className="message_sender_icon" width="40" height="40" style={{marginRight: "10px"}} />
                    <div className="message_item" style={{color: color, backgroundColor: bgColor, borderRadius: borderRadius}}>
                        {props.data.message}
                    </div>
                </div>
            )
    )        
}

export default Message;