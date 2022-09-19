import React from 'react';

const Overlay = () => {
    const closeDrawer = () => {
        let drawer = document.getElementById("dashboard_navbar");
        let overlay = document.getElementById("Dashboard_Overlay");
        drawer.classList.add("dashboard_navbar_close");
        setTimeout(function(){
            drawer.style.display = "none";
            drawer.style.left = "-300px";
            drawer.classList.remove("dashboard_navbar_close");
            overlay.style.visibility = "hidden";
        }, 1000);
    }

    return (
        <div className="Dashboard_Overlay" id="Dashboard_Overlay" onClick={closeDrawer}></div>
    )
}

export default Overlay;