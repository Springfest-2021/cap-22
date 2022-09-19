import React, {useEffect} from 'react';
import ContactCard from "./components/contactcard";
import ContactData from "../../Assets/Json/Contacts.json";
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import history from '../../routerHistory.js';
import withStore from "../Unstated/withStore.js";
import LandingStore from "../../Store/LandingStore.js";
import Navbar from '../Navbar/navbar.js';

const Contact = (props) => {
    useEffect(() => {
        if(!props.landingStore.state.registerStatus){
            history.push("/account");
            return;
        }
    })
    return (
        <div>
            <Navbar />
            <div className="Dashboard_Container">
                <Header />
                <Overlay />
                <div className="Dashboard_Content" style={{width: "76%", left: "12%"}}>
                    <div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                        <span className="Dashboard_Heading"><u>CONTACT US</u></span>
                        <span className = "Dashboard_underliner"></span>
                    </div>
                    <h2 style={{color: "white", marginTop: "20px", marginBottom: "20px"}}>WEB TEAM</h2>
                    <div className="contact_wrapper">
                        {
                            ContactData.web.map((data, index) => (
                                <ContactCard 
                                    key={index}
                                    name={data.name}
                                    email={data.email}
                                    imgname={data.imageName}
                                    phone={data.phone}
                                    facebook={data.facebook}
                                    linkedin={data.linkedin}
                                />
                            ))
                        }
                    </div>
                    <h2 style={{color: "white", marginTop: "60px", marginBottom: "20px"}}>PUBLICITY AND MARKETING TEAM</h2>
                    <div className="contact_wrapper" style={{width: "70%", marginBottom: "30px"}}>
                        {
                            ContactData.pm.map((data, index) => (
                                <ContactCard 
                                    key={index}
                                    name={data.name}
                                    email={data.email}
                                    imgname={data.imageName}
                                    phone={data.phone}
                                    facebook={data.facebook}
                                    linkedin={data.linkedin}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStore([LandingStore])(Contact);