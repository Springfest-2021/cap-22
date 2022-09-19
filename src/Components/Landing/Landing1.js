import { FullPage, Slide, Controls } from "react-full-page";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/landing_main";
import Monologue from "./components/monologue";
import Header from "./components/header";
import Perks from "./components/perks";
import Responsibilities from "./components/respon";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/social";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Sidebar from "./components1/Sidebar";

class CustomControls extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        getCurrentSlideIndex: PropTypes.func.isRequired,
        onNext: PropTypes.func.isRequired,
        onPrev: PropTypes.func.isRequired,
        scrollToSlide: PropTypes.func.isRequired,
        slidesCount: PropTypes.number.isRequired,
        style: PropTypes.object,
    };

    static defaultProps = {
        className: "full-page-controls",
        style: {
            left: "50%",
            paddingTop: "10px",
            position: "fixed",
            transform: "translateX(-50%)",
        },
    };

    render() {
        const {
            getCurrentSlideIndex,
            slidesCount,
            style,
            className,
            scrollToSlide,
        } = this.props;
        const currentSlideIndex = getCurrentSlideIndex();

        return <Sidebar scroll={scrollToSlide} current={currentSlideIndex} />;
    }
}

export default class Landing1 extends React.Component {
    render() {
        return (
            <>
                <FullPage controls={CustomControls}>
                    {/* <CssBaseline /> */}
                    <Navbar />
                    <Slide>
                        <Header />
                    </Slide>
                    <Slide>
                        <Monologue />
                    </Slide>
                    <Slide>
                        <Perks className="dummy" />
                    </Slide>
                    <Slide>
                        <Responsibilities />
                    </Slide>
                    <Slide>
                        <Testimonials />
                    </Slide>
                    <Slide>
                        <Contact />
                        {/* <Footer /> */}
                    </Slide>
                </FullPage>
            </>
        );
    }
}
