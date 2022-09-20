import React from "react";
import { makeStyles } from "@material-ui/core";
import Login from "./login";
function LandingMain(props) {
    const classes = useStyle();

    return (
        <React.Fragment>
            <div className="entry-after-3s">
                <div className={classes.navbar}>
                    <a href="https://springfest.in" target="_blank">
                        <img
                            className={classes.logo}
                            src={require("../../../Assets/images/logo/sflogo.png")}
                        />
                    </a>
                    <a
                        href="http://www.iitkgp.ac.in"
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <img
                            className={classes.logo}
                            src={require("../../../Assets/images/logo/iitlogo.png")}
                        />
                    </a>
                </div>
                <div className={classes.navbar2}>
                    <Login />
                    {/* <a
                        href="https://www.cuvette.tech/"
                        target="_blank"
                        style={{
                            display: "inline-block",
                            marginLeft: "20px",
                        }}
                    >
                        <img
                            style={{
                                maxHeight: "50px",
                            }}
                            className={classes.sponsor}
                            src={require("../../../Assets/Logo/Cuvettewordmark.png")}
                        />
                    </a> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingMain;

const useStyle = makeStyles({
    navbar: {
        height: "7%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        padding: 10,
        zIndex: 10,
    },
    navbar2: {
        position: "absolute",
        top: 10,
        right:30,
        display: "flex",
        justifyContent: "center",
        alignItems: "",
        zIndex: 10,
        
    },
    sponsor: {
        height: window.screen.availHeight * 0.05,
        marginTop: "20px",
        ["@media (max-width: 1024px)"]: {
            height: window.screen.availHeight * 0.03,
            marginTop: "5px !important",
        },
        marginLeft: 5,
    },
    login: {
        backgroundColor: "#4267B2",
        color: "white",
        padding: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        borderRadius: "5%",
    },
    logintext: {
        fontSize: "3vh",
        marginLeft: "10px",
        ["@media (max-width: 1024px)"]: {
            fontSize: "1.7vh",
            fontWeight: "bold",
        },
    },
    logo: {
        height: window.screen.availHeight * 0.08,
        zIndex: 100000000,
        ["@media (max-width: 1024px)"]: {
            height: window.screen.availHeight * 0.05,
        },
    },
    LoginButton: {
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 10000,
        ["@media (max-width: 1024px"]: {
            top: 0,
            right: 0,
        },
    },
});
