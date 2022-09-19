import React from 'react';
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import withStore from "../Unstated/withStore.js";
import LandingStore from "../../Store/LandingStore.js";
import {getMessages} from "../../Services/services.js";
import Message from "./Components/message.js";
import ChatInput from "./Components/chatInput.js";
import history from '../../routerHistory.js';
import {toast} from "react-toastify";
import Navbar from '../Navbar/navbar.js';

class Chat extends React.Component{
    constructor(props){
        super(props);
    }
    notify(text){
        if("Notification" in window){
            if(Notification.permission === "granted"){
                const options = {
                    body: text,
                    icon: "https://labyrinth.springfest.in/view/images/SF.png"
                }
                var notification = new Notification("Spring Fest", options);
                toast.info("You have an unseen message in chats", {position: toast.POSITION.TOP_CENTER});
            }
        }
    }
    async fetchMessage(){
        const existingMessageArray = this.props.landingStore.state.messages;
        const messageData = await getMessages({ca_id: this.props.landingStore.state.profile.id});
        const messageArray = messageData.message;
        //console.log(messageArray);
        let index = messageArray.length - existingMessageArray.length;
        if(index > 0){
            this.props.landingStore.setState({messages: messageArray, messageCount: index});
            this.notify(messageArray[messageArray.length - 1].message);
        }
    }
    async componentWillMount(){
        if(!this.props.landingStore.state.registerStatus){
            history.push("/account");
            return;
        }
        const messageData = await getMessages({ca_id: this.props.landingStore.state.profile.id});
        this.props.landingStore.setState({messages: messageData.message});
        //console.log(messageData.message);
        setInterval(() => this.fetchMessage(), 20000);
        console.log(this.props.landingStore.state)
    }
    componentDidMount() {
        const messageWrapper = document.getElementById("Dashboard_Container");
        messageWrapper.scrollTop = messageWrapper.scrollHeight - messageWrapper.clientHeight;
        window.scrollTo(0, messageWrapper.scrollHeight);
        var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
        this.props.landingStore.setState({messageCount: 0});
    }
    render(){
        return (
            <div>
                <Navbar />
                <div className="Dashboard_Container" id="Dashboard_Container">
                    <Header />
                    <Overlay />
                    <div className="Dashboard_Content">
                        <div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                            <span className="Dashboard_Heading"><u>CHAT WITH THE SPRING FEST TEAM</u></span>
                            <span className = "Dashboard_underliner"></span>
                        </div>
                        <div id="message_wrapper" className="message_wrapper">
                            {this.props.landingStore.state.messages.map((message, index) => (
                                <Message data={message} />
                            ))}
                        </div>
                        <ChatInput />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStore([LandingStore])(Chat);