import React, {useEffect, useState} from 'react';
import {getFacebookProfilePicture} from "../../../Services/services.js";
import ReactImageFallback from "react-image-fallback";

const CACard = ({mobile, email, sf_id, name, college, city, link}) => {
    const [fblink, setFblink] = useState(null);
    const fetchLink = async () => {
        const data = {
            fb_link: link, 
            access_token: localStorage.getItem("access_token")
        }
        const imageData = await getFacebookProfilePicture(data);
        try{
            setFblink(imageData.data.picture.data.url);
        }catch{
            setFblink(null);
        }
    }
    useEffect(() => {
        if(!fblink) fetchLink();
    })
    return (
        <div className="dashboard_ca_card">
            <div style={{width: "100%", padding: "10px 0px"}}>
                <ReactImageFallback
                    src={fblink}
                    fallbackImage={require("../../../Assets/images/avatar.png")}
                    initialImage={require("../../../Assets/images/avatar.png")}
                    alt="profile image"
                    width="150"
                    height="150"
                    style={{borderRadius: "75px"}}
                />
            </div>
            <div style={{fontSize: "30px"}}>{name}</div>
            <table>
                <tbody>
                    <tr>
                        <td style={{color: "white"}}>Email:</td><td style={{color: "#5aade0"}}><span><a href={"mailto:"+ email}>{email}</a></span></td>
                    </tr>
                    <tr>
                        <td style={{color: "white"}}><span>SF ID:</span></td><td style={{color: "#5aade0"}}>{sf_id}</td>
                    </tr>
                    <tr>
                        <td style={{color: "white"}}>Mobile:</td><td style={{color: "#5aade0"}}><span>{mobile}</span></td>
                    </tr>
                    <tr>
                        <td style={{color: "white"}}>City:</td><td style={{color: "#5aade0"}}><span>{city}</span></td>
                    </tr>
                    <tr>
                        <td style={{color: "white"}}>College:</td><td style={{color: "#5aade0"}}><span title={college}>{college}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CACard;