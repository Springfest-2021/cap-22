import React from 'react';
import withStore from "../../Unstated/withStore.js";
import LandingStore from "../../../Store/LandingStore.js";
import {toast} from "react-toastify";
import {sendMessage} from "../../../Services/services.js";

const ChatInput = (props) => {
    const addMessage = (message) => {
        const messageArray = props.landingStore.state.messages;
        messageArray.push({message: message, to_ca: 1});
        props.landingStore.setState({messages: messageArray});
    }
    const handleSubmit = async () => {
        const input = document.getElementById("chat_input");
        const message = input.value;
        input.value = "";
        //console.log(message, message.length);
        if(message.length === 0){
            toast.error("cannot send empty message", {position: toast.POSITION.TOP_CENTER});
            return;
        }
        else{
            const res = await sendMessage({message: message, admin_id: 1, ca_id: props.landingStore.state.profile.id});
            if(res === null){
                toast.error("could not send message. try again.", {position: toast.POSITION.TOP_CENTER});
                return;
            }
            else{
                toast.success("message sent successfully", {position: toast.POSITION.TOP_CENTER});
                addMessage(message);
            }
        }
    }
    return (
        <div style={{width: "100%", display: "inline-flex", marginBottom: "50px", marginTop: "30px", justifyContent: "space-around"}}>
            <input id="chat_input" placeholder="Talk to us" />
            <button id="chat_send" onClick={handleSubmit}>{window.screen.availWidth > 992 ? "SEND  " : ""}<i className="fa fa-paper-plane"></i></button>
        </div>
    )
}

export default withStore([LandingStore])(ChatInput);