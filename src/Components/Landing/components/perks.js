import React from "react";
import { makeStyles } from "@material-ui/core";
import Flip from "./Flippy/flip";

import tickets from "../../../Assets/images/icons/FreeTickets.jpg";
import noparti from "../../../Assets/images/icons/Noparti.png";
import certi from "../../../Assets/images/icons/Certificate.png";
import merch from "../../../Assets/images/icons/TShirt.png";
import goodies from "../../../Assets/images/icons/Goodies.png";
import bag from "../../../Assets/images/icons/intern.png";
import cam from "../../../Assets/images/icons/Camera.png";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "./stylesheets/perks.css";

const useStyle = makeStyles({
    root: {
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        //backgroundImage: `url(${require('../../../Assets/images/ca/bg.webp')})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        "& > div": {
            width: 350,
            fontSize: "3vh",
            textAlign: "center",
            "& > img": {
                width: 65,
                height: 65,
            },
        },
    },
    header: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "6vh",
        marginTop: "150px",
    },
});
function Perks(props) {
    const classes = useStyle();
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    // let w = window.screen.width;
    // console.log(w);
    // if(w<=950){
    // 	return (

    // 		<div> hello</div>
    // 	);
    // }
    return (
        <React.Fragment>
            <div
                className="perks-div"
                style={{ height: "100vh", overflow: "hidden" }}
            >
                <h2 style={{ color: "white" }} className={classes.header}>
                    PERKS
                </h2>
                <div className={classes.root}>
                    <div className="perks-prizes-content">
                        <p>Internships & Prizes worth</p>
                    </div>
                    <div className="perks-prizes">
                        <div className="lac">
                            <p>3 Lac+</p>
                        </div>
                    </div>
                    <div className="perks-flex-l">
                        <div className="perks-flip-cards">
                            <Flip
                                text="FREE STAR NIGHT &#10;&#13; PASSES"
                                bg="rgba(82,0,206, 0.5)"
                                url={tickets}
                            />
                        </div>
                        <div className="perks-flip-cards">
                            <Flip
                                text="NO PARTICIPATION FEE"
                                bg="rgba(7,0,187, 0.5)"
                                url={noparti}
                            />
                        </div>
                        {/* <div>
					<Flip text = 'INTERNSHIPS & PRIZES WORTH 3 LAC+' bg='rgba(0,99,206, 0.5)' url={bag} /> 
				</div> */}

                        <div className="perks-flip-cards">
                            <Flip
                                text="BRANDED MERCHANDISE"
                                bg="rgba(8,206,0, 0.5)"
                                url={merch}
                            />
                        </div>
                    </div>
                    <div className="perks-flex-r">
                        <div className="perks-flip-cards">
                            <Flip
                                text="EXCITING GOODIES LIKE FREE TSHIRTS & COUPONS"
                                bg="rgba(253,223,0, 0.5)"
                                url={goodies}
                            />
                        </div>

                        <div className="perks-flip-cards">
                            <Flip
                                text="CERTIFICATES"
                                bg="rgba(253,152,0, 0.5)"
                                url={certi}
                            />
                        </div>

                        <div className="perks-flip-cards">
                            <Flip
                                text="MEET CELEBRITIES"
                                bg="rgba(201,7,7, 0.5)"
                                url={cam}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-main-div">
                <h2 className="mobile-heading">PERKS</h2>
                <p className="mobile-p">Internships & Prizes worth</p>

                <div className="mobile-perks-prizes">
                    <div className="mobile-lac">
                        <p>3 Lac+</p>
                    </div>
                </div>

                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={2000}
                    animation="cubeAnimation"
                    className="perks-slider"
                >
                    <div className="mobile-perks-gallery">
                        <img src={tickets}></img>
                        <p>FREE STAR NIGHT PASSES</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={noparti}></img>
                        <p>NO PARTICIPATION FEE</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={merch}></img>
                        <p>BRANDED MERCHANDISE</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={goodies}></img>
                        <p>EXCITING GOODIES LIKE FREE TSHIRTS & COUPONS</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={certi}></img>
                        <p>CERTIFICATES</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={cam}></img>
                        <p>MEET CELEBRITIES</p>
                    </div>
                </AutoplaySlider>
            </div>
        </React.Fragment>
    );
}

export default Perks;
