import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "./respon_card";
import "./stylesheets/respon.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const useStyle = makeStyles({
    root: {
        width: "100%",
        margin: "2em",
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "50px",
    },
    header: {
        margin: "2em",
        marginBottom: "50px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "6vh",
        color: "white",
    },
    "business-card": {
        width: 300,
        height: 200,
        fontSize: "3vh",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5%",
        "& > h5": {
            fontWeight: 650,
        },
        "& > img": {
            width: 55,
            height: 55,
        },
        "& > p": {
            fontWeight: 500,
            color: "white",
        },
    },
});
function Responsibilities(props) {
    const classes = useStyle();
    const responList = [
        {
            title: "Publicity",
            imgSrc: "publi.png",
            content:
                "Compose, execute and pilot a publicity plan in your city and college.",
        },
        {
            title: "Event Management",
            imgSrc: "event-management.png",
            content:
                "Orchestrate the execution of Spring Fest events throughout the year.",
        },
        {
            title: "Public Relations",
            imgSrc: "relation.jpg",
            content: "Extend your professional network.",
        },
    ];

    const responList2 = [
        {
            title: "Social Responsibility",
            imgSrc: "social.png",
            content: `Be a part of Spring Fest's social responsibilities aimed for the betterment of the society.`,
        },
        {
            title: "Spearhead",
            imgSrc: "spear.png",
            content: "Lead and facilitate participation from your college.",
        },
        {
            title: "Spokesperson",
            imgSrc: "spoke.jpg",
            content: "Representative and point of contact from your college.",
        },
    ];

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <React.Fragment>
            <div
                className="respondesk"
                style={{
                    backgroundColor: "black",
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${require("../../../Assets/images/bg_work.jpg")})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "right",
                }}
            >
                <h2
                    style={{
                        fontFamily: "Major Mono Display",
                    }}
                    className={classes.header}
                >
                    WORK & RESPONSIBILITIES
                </h2>
                <center>
                    <div className={classes.root}>
                        {responList.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    title={item.title}
                                    imgSrc={item.imgSrc}
                                    content={item.content}
                                />
                            );
                        })}
                    </div>
                    <div className={classes.root}>
                        {responList2.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    title={item.title}
                                    imgSrc={item.imgSrc}
                                    content={item.content}
                                />
                            );
                        })}
                    </div>
                </center>
            </div>

            <div
                className="responmob"
                style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${require("../../../Assets/images/bg_work.jpg")})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "right",
                }}
            >
                <h2
                    style={{
                        fontFamily: "Major Mono Display",
                    }}
                    className={(classes.header, "headresp")}
                >
                    WORK & RESPONSIBILITIES
                </h2>
                <center>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={2000}
                        animation="cubeAnimation"
                        className="responslider"
                    >
                        <div className={classes["business-card"]}>
                            <h5>Publicity</h5>
                            <img
                                src={require(`../../../Assets/images/icons/publi.png`)}
                            />
                            <p>
                                Compose, execute and pilot a publicity plan in
                                your city and college.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Public Relations</h5>
                            <img
                                src={require(`../../../Assets/images/icons/relation.jpg`)}
                            />
                            <p>Extend your professional network.</p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Social Responsibility</h5>
                            <img
                                src={require(`../../../Assets/images/icons/social.png`)}
                            />
                            <p>
                                Be a part of Spring Fest's social
                                responsibilities aimed for the betterment of the
                                society.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Spearhead</h5>
                            <img
                                src={require(`../../../Assets/images/icons/spear.png`)}
                            />
                            <p>
                                Lead and facilitate participation from your
                                college.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Event Management</h5>
                            <img
                                src={require(`../../../Assets/images/icons/event-management.png`)}
                            />
                            <p>
                                Orchestrate the execution of Spring Fest events
                                throughout the year.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Spokesperson</h5>
                            <img
                                src={require(`../../../Assets/images/icons/spoke.jpg`)}
                            />
                            <p>
                                Representative and point of contact from your
                                college.
                            </p>
                        </div>
                    </AutoplaySlider>
                </center>
            </div>
        </React.Fragment>
    );
}

export default Responsibilities;
