import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar(props) {
    return (
        <nav className="sidebar entry-after-3s">
            <ul>
                <li
                    onClick={() => {
                        props.scroll(0);
                    }}
                    className={
                        props.current == 0
                            ? "sidebarelem sidebaractive"
                            : "sidebarelem"
                    }
                >
                    <FontAwesomeIcon className="icons" icon={faHome} />
                </li>
                <li
                    onClick={() => {
                        console.log("1");
                        props.scroll(1);
                    }}
                    className={
                        props.current == 1
                            ? "sidebarelem sidebaractive"
                            : "sidebarelem"
                    }
                >
                    <FontAwesomeIcon className="icons" icon={faGlobe} />
                </li>
                <li
                    onClick={() => {
                        props.scroll(2);
                    }}
                    className={
                        props.current == 2
                            ? "sidebarelem sidebaractive"
                            : "sidebarelem"
                    }
                >
                    <FontAwesomeIcon className="icons" icon={faBookmark} />
                </li>
                <li
                    onClick={() => {
                        props.scroll(3);
                    }}
                    className={
                        props.current == 3
                            ? "sidebarelem sidebaractive"
                            : "sidebarelem"
                    }
                >
                    <FontAwesomeIcon className="icons" icon={faBriefcase} />
                </li>

                <li
                    onClick={() => {
                        props.scroll(4);
                    }}
                    className={
                        props.current == 4
                            ? "sidebarelem sidebaractive"
                            : "sidebarelem"
                    }
                >
                    <FontAwesomeIcon className="icons" icon={faEnvelope} />
                </li>
                <li
                    onClick={() => {
                        props.scroll(5);
                    }}
                    className={
                        props.current == 5
                            ? "sidebarelem sidebaractive"
                            : "sidebarelem"
                    }
                >
                    {/* <h1
                        style={{
                            color: "white",
                            lineHeight: "78px",
                            margin: 0,
                        }}
                    >
                        T
                    </h1> */}
                    <FontAwesomeIcon className="icons" icon={faUsers} />
                </li>
            </ul>
        </nav>
    );
}
