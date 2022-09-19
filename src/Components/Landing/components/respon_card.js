import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
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

function Responcard(props) {
    const classes = useStyle();
    return (
        <div className={classes["business-card"]}>
            <h5>{props.title}</h5>
            <img
                src={require(`../../../Assets/images/icons/${props.imgSrc}`)}
            />
            <p>{props.content}</p>
        </div>
    );
}

export default Responcard;
