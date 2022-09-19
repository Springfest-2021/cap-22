import React from 'react';
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import AccountInput from "./account_form_input";
import DatePicker from "./DatePicker";
import SelectOption from "./selectOptions";
import withStore from "../../Unstated/withStore";
import AccountStore from "../store/AccountStore";
import LandingStore from "../../../Store/LandingStore";
import {toast} from "react-toastify";
import {userRegister, getUserDetails, getNotifications} from "../../../Services/services";
import "../../../Styles/dashboard.sass"
import "../../../Styles/accounts.sass"
import history from "../../../routerHistory.js";

const AccountForm  = ({accountStore: {state: {college_options, gender_options, yop_options, state_options}}, landingStore}) => {
    console.log(landingStore.state);
    const initialValues = {
        email: localStorage.getItem("email"), 
        name: localStorage.getItem('name'),
        alt_email: "",
        password: "",
        confirmPassword: "",
        college: "",
        mobile: "",
        gender: "",
        dob: new Date(),
        yop: "",
        por: "",
        addr: "",
        city: "",
        state: ""
    };
    const collegeOptions = JSON.parse(localStorage.getItem("college_options"));
    // console.log(collegeOptions);
    const errMsg = "Required Field !!";
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    
    const fillLoginData = (userdata, notifications) => {
		landingStore.setState({
			ideas: userdata.ideas,
			scoresheet: userdata.scoresheet,
			notifications: notifications,
			profile: userdata.profile,
			score: userdata.user_score
		});
	};

    const register = async (values) => {
        var data;
        if(values.email === values.alt_email){
            toast.error("Alternate email should be different from Primary Email", {
                position: toast.POSITION.TOP_CENTER
            })
            return false;
        }
        if(values.password !== values.confirmPassword){
            toast.error("Password did not match.", {
                position: toast.POSITION.TOP_CENTER
            })
            return false;
        }

        data = {...values, 
            token: localStorage.getItem("token"),
            isRegistered: landingStore.state.registerStatus
        }
        data.college = values.college;
        data.gender = values.gender.value;
        data.state = values.state.value;
        data.yop = values.yop.value;
        data.mobile = values.mobile.toString();
        data.dob = values.dob.getDate() + "/" + (values.dob.getMonth() + 1) + "/" + values.dob.getFullYear();
        
        console.log(data);
        const response = await userRegister(data);
        console.log(response);

        if(response.code === -2){
            toast.error("Invalid Details!", {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        else if(response.code === -4){
            landingStore.setState({registerStatus: true, login: 1});
            toast.success("Profile Updated");
            history.push('/leaderboard');
            console.log(landingStore.state);
        } else if(response.code === 0){
            toast.success("registered successfully");
        }


        if(response.message.token){
            const token = response.message.token;
            localStorage.setItem("token", token);
            landingStore.setState({registerStatus: true, login: 1});

            const send_data = { "token": token };
			const notification_data = { user_id: localStorage.getItem("fb_id")};

			const userallData = await getUserDetails(send_data);
            const notifications = await getNotifications(notification_data);

            console.log(userallData, notifications);
            
            if (userallData.code !== 0) {
				toast.error("Invalid Register", {
					position: toast.POSITION.TOP_CENTER
				});
			} else {
                fillLoginData(userallData.message, notifications.message);
                history.push('/guidelines');
            }
        }
        else if(response.message.college){
            const token = localStorage.getItem("token");
            const no_data = {
                user_id : localStorage.getItem('fb_id')
            }
            const send_data = { "token": token };
            const notifications = await getNotifications(no_data);
            const userallData = await getUserDetails(send_data);

            console.log(userallData, notifications);
            
            if (userallData.code !== 0) {
				toast.error("Invalid Register", {
					position: toast.POSITION.TOP_CENTER
				});
			} else {
                fillLoginData(userallData.message, notifications.message);
                history.push('/guidelines');
			}
        }
        return true;
    }
    const isRegistered = localStorage.getItem('isRegistered')
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(
                {
                    email: Yup.string().email().required(errMsg),
                    name: Yup.string().required(errMsg),
                    college: Yup.string().required(errMsg),
                    mobile: Yup.string().min(10).max(10).matches(phoneRegExp, "Invalid Mobile Number").required(errMsg),
                    password: Yup.string().required(errMsg),
                    confirmPassword: Yup.string().required(errMsg),
                    gender: Yup.string().required(errMsg),
                    dob: Yup.date().required(errMsg),
                    yop: Yup.string().required(errMsg),
                    por: Yup.string().required(errMsg),
                    addr: Yup.string().required(errMsg),
                    city: Yup.string().required(errMsg),
                    state: Yup.string().required(errMsg)
                }
            )}
            onSubmit={async (values, {setSubmitting}) => {
                await register(values);
                setSubmitting(false);
            }}
        >
            {(props) => {
                const {values, touched, errors, isSubmitting, handleChange, handleBlur, setFieldValue, setFieldTouched} = props;
                return (
                    <Form>
                        <AccountInput 
                            name="email" 
                            type="email" 
                            label="Primary Email Address"
                            placeholder="enter email" 
                            icon="fa fa-envelope-o"
                            formik={{value: values.email, touched: touched.email, error: errors.email}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="name" 
                            type="text" 
                            label="name"
                            placeholder="enter name" 
                            icon="fa fa-user-o"
                            formik={{value: values.name, touched: touched.name, error: errors.name}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="alt_email" 
                            type="email" 
                            label="alternate email address"
                            placeholder="enter alternate email" 
                            icon="fa fa-envelope-o"
                            formik={{value: values.alt_email, touched: touched.alt_email, error: errors.alt_email}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="password" 
                            type="password" 
                            label="Password"
                            placeholder="enter password" 
                            icon="fa fa-key"
                            formik={{value: values.password, touched: touched.password, error: errors.password}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="confirmPassword" 
                            type="password" 
                            label="Confirm Password"
                            placeholder="Confirm Password" 
                            icon="fa fa-key"
                            formik={{value: values.confirmPassword, touched: touched.confirmPassword, error: errors.confirmPassword}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="college"
                            type="text"
                            label="college name"
                            placeholder="Choose your College"
                            icon="fa fa-university"
                            formik={{value: values.college, touched: touched.college, error: errors.college}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="mobile" 
                            type="number" 
                            label="phone number"
                            placeholder="enter phone number" 
                            icon="fa fa-phone"
                            formik={{value: values.mobile, touched: touched.mobile, error: errors.mobile}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <Field 
                            name="gender"
                            render = {() => (
                                <SelectOption 
                                    value={values.gender || ""}
                                    showvalue="gender"
                                    label="gender"
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.gender}
                                    touched={touched.gender}
                                    options={gender_options}
                                    placeholder="Choose your Gender"
                                    icon="fas fa-transgender-alt"
                                />
                            )}
                        />
                        <Field 
                            name="dob"
                            render = {() => (
                                <DatePicker 
                                    value={values.dob || null}
                                    showvalue="dob"
                                    label="date of birth"
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.dob}
                                    touched={touched.dob}
                                    text="Enter Date of Birth"
                                    style={{width: '90%'}}
                                    className="account_settings_datepicker"
                                    icon="fa fa-calendar"
                                />
                            )}
                        />
                        <Field 
                            name="yop"
                            render = {() => (
                                <SelectOption 
                                    value={values.yop || ""}
                                    showvalue="yop"
                                    label="year of graduation"
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.yop}
                                    touched={touched.yop}
                                    options={yop_options}
                                    placeholder="Choose Year of Graduation"
                                    icon="fa fa-graduation-cap"
                                />
                            )}
                        />
                        <AccountInput 
                            name="por" 
                            type="text" 
                            label="position of responsibility"
                            placeholder="Position of Responsibility" 
                            icon="fas fa-user-tie"
                            formik={{value: values.por, touched: touched.por, error: errors.por}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="addr" 
                            type="text" 
                            label="address"
                            placeholder="Enter Address" 
                            icon="fa fa-map-marker"
                            formik={{value: values.addr, touched: touched.addr, error: errors.addr}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <AccountInput 
                            name="city" 
                            type="text"
                            label="city" 
                            placeholder="Enter City" 
                            icon="fas fa-city"
                            formik={{value: values.city, touched: touched.city, error: errors.city}} 
                            formikHandlers={{handleChange: handleChange, handleBlur: handleBlur}}
                        />
                        <Field 
                            name="state"
                            render = {() => (
                                <SelectOption 
                                    value={values.state || ""}
                                    showvalue="state"
                                    label="state"
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.state}
                                    touched={touched.state}
                                    options={state_options}
                                    placeholder="Choose State"
                                    icon="fas fa-flag"
                                />
                            )}
                        />
                        <div style={{width: "100%", marginTop: "20px"}}>
                            <button
                                type="submit"
                                disabled={false}
                                className="dashboard_submit"
                            >
                                
                                {isSubmitting ? 
                                    (isRegistered ? "UPDATING..." : "REGISTERING...") : (isRegistered ? "UPDATE": "REGISTER")}
                            </button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default withStore([AccountStore, LandingStore])(AccountForm);
