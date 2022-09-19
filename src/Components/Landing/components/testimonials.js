import React from "react";
import "../../../Styles/testimonials.css";

export default function Testimonials() {
    const state = {
        cas: [
            {
                name: "Siddhant Sharma",
                content: `Spring Fest was a memorable experience for me. Working for such a huge fest was a really great experience. All the events held by Spring Fest were great and amazing.It was amazing to be there. I wish to be in SPRING FEST again.`,
            },

            {
                name: "Utkarsh Kala",
                content:
                    "Where the normal Fests remain sparkling and vibrant, I found Spring Fest to be balanced where at one end you'll find the Sparks the other side keeps showering the Beauty of the existence of certain aspects of Generations. One should make a visit to SpringFest. You'll never regret your decision.",
            },
            {
                name: "Aditya Saurav",
                content: `I worked as a campus ambassador of my college at spring Fest 2021, IIT kharagpur. I really enjoyed working with the people of this organisation. I had lot of fun tasks to do and really liked doing them all. I would like to thank spring fest for giving me this opportunity.`,
            },
            {
                name: "Ayushi Baijal",
                content: `I just wanted to share a quick note and let you know that SF team did a really good job. I'm glad I decided to participate in Spring Fest with you guys. It's really great how beautifully your team conducted the entire event online.`,
            },
            {
                name: "Raghav Dogra",
                content: `Spring fest 2021 was an amazing experience for me. It was wonderful to be a part of something this big. The diversity of events made the fest, a lot more fun and engaging making it a memorable experience. Hope to be a part of Spring Fest.`,
            },
        ],
    };

    return (
        <div className="test-container">
            <div
                style={{ fontFamily: "Major Mono Display" }}
                className="test-head"
            >
                TESTIMONIALS
            </div>
            <div className="testimonial-slider">
                {state.cas.map((ca, i) => {
                    return (
                        <div key={i} className={"items item-" + i}>
                            <div className="test-img">
                                <img
                                    src={require("../../../Assets/images/ca/" +
                                        (i + 1).toString() +
                                        ".jpeg")}
                                    className="test-img"
                                />
                            </div>
                            <div className="test-text">
                                <i>{ca.content}</i>
                                <br />
                                <br />
                                <b>-{ca.name}</b>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
