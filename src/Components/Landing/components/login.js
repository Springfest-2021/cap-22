import React, { useEffect, useState } from "react";
import withStore from "../../Unstated/withStore";
import LandingStore from "../../../Store/LandingStore";
import history from "../../../routerHistory";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {
    checkRegister,
    getUserDetails,
    getNotifications,
    getMessages,
} from "../../../Services/services";
import { setHeaders } from "../../../Services/config";
import { makeStyles } from "@material-ui/core";
//import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const useStyles = makeStyles({
    root: {
        height: window.screen.availHeight * 0.03,
        fontSize: "2.2vw",
        zIndex: 10000,
        color: "white",
        boxShadow: "none",
        border: "none",
        borderRadius: "5%",
        ["@media (max-width: 1024px"]: {
            height: window.screen.availHeight * 0.07,
            top: 0,
            right: 0,
        },
    },
});
function LoginComponent(props) {
    const classes = useStyles();
    const fillLoginData = (userdata, notifications) => {
        props.landingStore.setState({
            ideas: userdata.ideas,
            scoresheet: userdata.scoresheet,
            notifications: notifications,
            profile: userdata.profile,
            score: userdata.user_score,
        });
    };
    const [key, setKey] = useState(Math.random());
    // Have no idea what is the reason,
    // but we need to re-render button once more to load sdk properly.
    useEffect(() => {
        setTimeout(() => setKey(Math.random()), 100);
    }, []);
    const response = async (data) => {
        const response = await checkRegister(data);
        console.log(response)
        props.landingStore.setState({
            registerStatus: !!response.message.token,
            login: 1,
        });
        if (response.code === -2) {
            toast.error(response.message, {
                position: toast.POSITION.TOP_CENTER,
            })
            return
        }
        if ((response.code === -4) || (response.code === -1)) {
            setHeaders(
                response.message.token,
                data.email,
                ""
            );
            props.landingStore.setState({
                messageToken: localStorage.getItem("token"),
                registerStatus: false,
            });
            localStorage.setItem("isLoggedIn", 1);
            localStorage.setItem("isRegistered", 0);
        }
        else {
            //registered
            setHeaders(
                response.message.token,
                data.email,
                response.message.name
            );
            props.landingStore.setState({
                messageToken: localStorage.getItem("token"),
                registerStatus: true,
            });
            localStorage.setItem("isRegistered", 1);
            const token = localStorage.getItem("token");
            const send_data = { token: token };
            const notification_data = { user_id: 1 };

            const userallData = await getUserDetails(send_data);
            console.log(userallData)
            const notifications = await getNotifications(notification_data);

            // console.log(userallData/* , notifications */);

            if (userallData.code !== 0) {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                localStorage.setItem("isLoggedIn", 1);
            } else {
                fillLoginData(userallData.message, notifications.message);
                localStorage.setItem("isLoggedIn", 1);
                let messages = await getMessages({
                    ca_id: userallData.message.profile.id,
                });
                // console.log(messages);
                props.landingStore.setState({ messages: messages.message });
            }
        }

        if (props.landingStore.state.registerStatus)
            history.push("/leaderboard");
        else history.push("/account");
    }

    const [open, set_open] = useState(false)
    const toggle = () => set_open(!open);

    return (
        <div className={classes.root}>
            {/* <GoogleLogin
                autoLoad={false}
                clientId="288246232799-vls1j50o63u2cqm4c6obcfqijgrgjp37.apps.googleusercontent.com"
                buttonText="Login with Google"
                cookiePolicy={'single_host_origin'}
                render={(renderProps ) => (
                    <button onClick={renderProps.onClick} className="btn btn-danger login">
                        <span>Login</span>
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={() => {toast.error("Error in signing in", {
                    position: toast.POSITION.TOP_CENTER,
                });}}
                isSignedIn={false}
            /> */}
            <button className="btn btn-danger login" onClick={toggle}>
                <span>Login</span>
            </button>
            <Modal isOpen={open} toggle={toggle}>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('Required').email('Invalid email')
                    })}
                    onSubmit={(values) => {
                        console.log(values)
                        response(values)
                    }}
                >
                    <Form>
                        <ModalHeader toggle={toggle}>
                            Log In
                        </ModalHeader>
                        <ModalBody>
                            <Field type="email" name="email" className="form-control" placeholder="Email"/>
                            <div style={{color: 'red', fontSize: '10px'}}><ErrorMessage name="email"/></div>
                            <br/>
                            <Field type="password" name="password" className="form-control" placeholder="Password (New user should write NA)"/>
                            <div style={{color: 'red', fontSize: '10px'}}><ErrorMessage name="password"/></div>
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Login" class="btn btn-info"/>
                            <button type="button" class="btn btn-default"  onClick={toggle}>Close</button>
                        </ModalFooter>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}

export default withStore([LandingStore])(withRouter(LoginComponent));
