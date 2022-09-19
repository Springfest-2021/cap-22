import React from 'react';
import IITlogo from "../../Assets/images/logo/iitlogo2.png";
import SFlogo from "../../Assets/images/logo/sflogo.png";
import Menu from "../../Assets/images/icons/menu.jpg";

const DashboardHeader = () => {
    const openDrawer = () => {
        let drawer = document.getElementById("dashboard_navbar");
        let overlay = document.getElementById("Dashboard_Overlay");
        drawer.style.display = "block";
        overlay.style.visibility = "visible";
    }
    return (
        <div className="dashboard_header">
            <img 
                src={Menu} 
                onClick={openDrawer} 
                width="50px" 
                height="50px" 
                style={{position: "absolute", top: "15px", left: "10px", borderRadius: "10px"}} 
            />
            <span style={{fontSize: "4vmin", color: "white", lineHeight: "80px"}}></span>
            <a target="_blank" rel="noopener noreferrer" href="http://www.iitkgp.ac.in">
                <img src={IITlogo} width="44px" height="50px" style={{position: "absolute", top: "15px", right: "70px"}} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.springfest.in">
                <img src={SFlogo} width="50px" height="50px" style={{position: "absolute", top: "15px", right: "8px"}} />
            </a>
        </div>
    )
}

export default DashboardHeader;