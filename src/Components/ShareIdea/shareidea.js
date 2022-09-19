import React, {useEffect} from 'react';
import {Formik, Form , Field} from 'formik';
import "../../Styles/dashboard.sass";
import "../../Styles/accounts.sass";
import Select from 'react-select';
import {addIdeas} from "../../Services/services";
import * as Yup from 'yup';
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import {toast} from 'react-toastify';
import history from '../../routerHistory.js';
import withStore from "../Unstated/withStore.js";
import LandingStore from "../../Store/LandingStore.js";
import Navbar from '../Navbar/navbar.js';

const addIdea = async (values) => {
    const data = {
        title: values.title,
        category: values.category.value,
        idea: values.message,
        token: localStorage.getItem('token')
    }
    const response = await addIdeas(data);
    //console.log(response);
    if(response.code !== 0){
        toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER
        })
    }
    else{
        toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER
        })
    }
    return response;    
}

const ShareIdea = (props) => {
    useEffect(() => {
        if(!props.landingStore.state.registerStatus){
            history.push("/account");
            return;
        }
    })
    const initialValues = {
        title: "",
        category: "",
        message: ""
    };
    const categories = [
        { value: 'Informal Events', label: 'Informal Events' },
        { value: 'Online Events', label: 'Online Events' },
        { value: 'City Specific', label: 'City Specific' },
        { value: 'Other', label: 'Other' },
    ];
    const errMsg = "Required Field !!";
    const FieldStyle = {height: '50px', width: '100%', borderRadius: "8px", border: 'none', paddingLeft: '10px'};
    const ErrorStyle = {textAlign: 'right', width: '90%', marginBottom: '0px', color: 'red', fontSize: '12px'};
    const headingStyle = {textAlign: 'left', width: '100%', color: "white", marginTop: "10px", paddingLeft: "8px"};

    return (
        <div>
            <Navbar />
            <div className="Dashboard_Container">
                <Header />
                <Overlay />
                <div className="Dashboard_Content">
                    <div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                        <span className="Dashboard_Heading"><u>SHARE IDEAS</u></span>
                        <span className = "Dashboard_underliner"></span>
                    </div>
                    <Formik
                        initialValues = {initialValues}
                        validationSchema={Yup.object().shape({
                                title: Yup.string().required(errMsg),
                                category: Yup.string().required(errMsg),
                                message: Yup.string().required(errMsg)
                            }
                        )}
                        onSubmit = {async (values, {setSubmitting}) => {
                            await addIdea(values);
                            setSubmitting(false);
                        }}
                    >
                        {(props) => {
                            const {values, touched, errors, isSubmitting, handleChange, handleBlur, setFieldValue, setFieldTouched} = props;
                            return (
                                <Form style={{width: "90%", padding: "20px"}}>
                                    <div style={headingStyle}>TITLE</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            name='title' 
                                            type='text' 
                                            placeholder='Enter Title'  
                                            value={values.title || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={FieldStyle}
                                        />
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.title && touched.title) ? 'block' : 'none'}}>{errors.title || "error"}</div>
                                    <div style={headingStyle}>CATEGORY</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            name='category'
                                            style={FieldStyle}
                                            render={() => (
                                                <Select 
                                                    options={categories}
                                                    multi={false}
                                                    value={values.category || ""}
                                                    placeholder="Choose Category"
                                                    isClearable={true}
                                                    onChange={(v) => setFieldValue('category', v)}
                                                    onBlur={handleBlur}
                                                    
                                                />
                                            )}
                                        />
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.category && touched.category) ? 'block' : 'none'}}>{errors.category || "error"}</div>
                                    <div style={headingStyle}>MESSAGE</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            component="textarea"
                                            name='message'
                                            rows="6"
                                            type='text' 
                                            placeholder='Type Message'  
                                            value={values.message || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{...FieldStyle, height: '100px', paddingTop: '10px'}}
                                        />  
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.message && touched.message) ? 'block' : 'none'}}>{errors.message || "error"}</div>
                                    <div style={{width: "100%"}}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="account_settings_submit"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default withStore([LandingStore])(ShareIdea);