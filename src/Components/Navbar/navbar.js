import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useLocation} from 'react-router-dom';
import "../../Styles/navbar.sass";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {NavLink} from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";
import BulbIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import BookIcon from '@material-ui/icons/Book';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import WorkIcon from '@material-ui/icons/Work';
import withStore from "../Unstated/withStore.js";
import LandingStore from "../../Store/LandingStore.js";
import history from "../../routerHistory.js";


const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "rgba(255, 255, 255, 1)"
        },
        secondary: {
            main: "#000000"
        }
    },
    wrapper: {
        alignItems: "flex-start",
        flexDirection: 'row'
    }
});

const useStyles = makeStyles({    
    tabs: {
        "& .MuiTab-wrapper": {
          flexDirection: "row",
          justifyContent: "flex-start"
        }
    }
});

const pages = [
    { title: "Leaderboard", link: "/leaderboard" },
    { title: "Guidelines", link: "/guidelines" },
    //{ title: "Facebook Share", link: "/fbshare" },
    //{ title: "Share Contacts", link: "/share" },
    { title: "Share an Idea", link: "/idea" },
    { title: "Suggest a Venue", link: "/venue" },
    { title: "Account Settings", link: "/account" },
    //{ title: "Contact Us", link: "/contact" },
    { title: "Chat", link: "/chat"},
    //{ title: "Working CA", link: "/ca"}
]


const Navbar = (props) => {
    const userData = props.landingStore.state.profile;
    const classes = useStyles();
    const profileImage = localStorage.getItem("pic");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    const location = useLocation().pathname;
    var index = 0;
    var filterObj = pages.find(function(page, i){
        if(page.link === location){
            index = i;
            return i;
        }
    });
    const [pageNum, setPageNum] = useState(index);

    const TrophyIcon = () => (
        <i 
            style={{
                verticalAlign: 'left', 
                marginRight: "10px", 
                color: (pageNum === 0) ? "blue" : "#a0a0a0", 
                fontSize: "20px",
                position: "relative",
                top: "3px"
            }} 
            className="fas fa-trophy"
        >
        </i>
    );

    const Content = (index) => {
        const title = pages[index].title;
        const Icon = icons[title];
        if(index === 8){
            const notificationCount = props.landingStore.state.messageCount;
            return (
                <div style={{display: "inline-flex"}}>
                    <Icon style={{verticalAlign: 'left', marginRight: "10px", color: (pageNum === index) ? "blue" : "#a0a0a0"}} />
                    {title}
                    {notificationCount === 0 ? <span /> : <span className="navbar_notification_count">{notificationCount}</span>}
                </div>
            )
        }else{
            return (
                <div>
                    <Icon style={{verticalAlign: 'left', marginRight: "10px", color: (pageNum === index) ? "blue" : "#a0a0a0"}} />
                    {title}
                </div>
            )
        }
    }

    const icons = {
        "Leaderboard": TrophyIcon,
        "Account Settings": SettingsIcon,
        "Guidelines" : BookIcon,
        "Facebook Share" : FacebookIcon,
        "Share Contacts":ShareIcon,
        "Share an Idea" : BulbIcon,
        "Suggest a Venue": LocationOnIcon,
        "Contact Us": PhoneIcon,
        "Chat": ChatIcon,
        "Working CA": WorkIcon
    }

    const closeDrawer = () => {
        var width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
        try{
            if(width < 992){
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
        }catch{
            //pass
        }
    }

    const logOut = () => {
        //window.FB.logout();
        history.push("/");
        props.landingStore.setState({
            messageToken: "",
            registerStatus: false,
            login: 0,
            ideas: [],
            scoresheet: [],
            notifications: [],
            profile: [],
            messages: [],
            score: 0,
            cas: []
        })
        localStorage.removeItem("pic");
        localStorage.removeItem("fb_id");
        localStorage.removeItem("id");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("messages");
        localStorage.removeItem("token");
        localStorage.removeItem("access_token");
    }

    return (
        location === "/" ?
        <div />
        :
        (
            <div className="dashboard_navbar" id="dashboard_navbar">
                <div className="dashboard_navbar_profile">
                    <i 
                        id="dashboard_navbar_close_button"
                        className="fa fa-close" 
                        style={{position: "absolute", top: "15px", left: "15px", fontSize: "30px"}}
                        onClick={closeDrawer}
                    ></i>
                    <div style={{paddingTop: "20px"}}>
                        {profileImage  === null ?
                            <img src = {require("../../Assets/images/avatar.png")} />
                            :
                            <ReactImageFallback
                                src={profileImage}
                                fallbackImage={require("../../Assets/images/avatar.png")}
                                initialImage={require("../../Assets/images/avatar.png")}
                                alt="profile image"
                                className="navbar_image" 
                                width="120"
                                height="120"
                                style={{borderRadius: "60px"}}
                            />
                        }
                        <div id="navbar_logout_icon" onClick={logOut}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </div>
                    </div>
                    {name === null ? <div /> : <div className="navbar_name">{name}</div>}
                    {email === null ? <div /> : <div className="navbar_email">{email}</div>}
                </div>
                <div className="dashboard_navbar_menu">
                    <ThemeProvider theme={darkTheme}>
                        <Tabs
                            orientation="vertical"
                            value={pageNum}
                        >
                            {pages.slice(0, 9).map((page, index) => {
                                return (
                                    <NavLink 
                                        key={index} 
                                        style={{display: "inline-block"}} 
                                        to={page.link}
                                    >
                                        <Tab 
                                            className="dashboard_navbar_tabs" 
                                            label={Content(index)} 
                                            onClick={(e) => {
                                                setPageNum(index); 
                                                closeDrawer();
                                            }} 
                                            className={classes.tabs}
                                            style={{backgroundColor: (pageNum === index) ? "rgba(0, 0, 200, 0.2)" : "transparent", fontWeight: "520", width: "90%", maxWidth: "500px", borderRadius: "5px", color: (pageNum === index) ? "blue" : "black"}} 
                                        />
                                    </NavLink>
                                )
                            })}
                            
                        </Tabs>
                    </ThemeProvider>
                </div>
            </div>
        )
    )
}

export default withStore([LandingStore])(Navbar);
