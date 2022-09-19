import React, {useRef, useEffect} from 'react';
import * as Yup from 'yup';
import {Formik, Form , Field} from 'formik';
import Select from 'react-select';
import {toast} from 'react-toastify';
import {addVenue} from "../../Services/services.js";
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import history from '../../routerHistory.js';
import withStore from "../Unstated/withStore";
import LandingStore from "../../Store/LandingStore.js";
import Navbar from '../Navbar/navbar.js';

var VENUE_FILE;

const cityOptions = [
    {value: 'Delhi', label: 'Delhi'},
    {value: 'Mumbai', label: 'Mumbai'},
    {value: 'Hyderabad', label: 'Hyderabad'},
    {value: 'Kolkata', label: 'Kolkata'},
    {value: 'Ranchi', label: 'Ranchi'},
    {value: 'Bhubaneshwar', label: 'Bhubaneshwar'},
    {value: 'Bhopal', label: 'Bhopal'},
    {value: 'Vizag', label: 'Vizag'},
    {value: 'Pune', label: 'Pune'},
    {value: 'Bangalore', label: 'Bangalore'},
];

const onVenueUpload = (event) => {
    event.stopPropagation();
    event.preventDefault();
    //console.log(event.target.value);
    let file = event.target.files[0];
    let filepath = event.target.value;
    var i = filepath.lastIndexOf('.') + 1;
    var fileExtension = filepath.substr(i, filepath.length);
    if(fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png'){
        VENUE_FILE = file;
    }
    else{
        toast.error("only image files allowed", {
            position: toast.POSITION.TOP_CENTER
        })
    }
}

const uploadData = async (values) => {
    var data = new FormData();
    data.append('venue_name', values.venue_name);
    data.append('venue_city', values.venue_city.value)
    data.append('venue_address', values.venue_address);
    data.append('venue_contact', values.venue_contact);
    data.append('venue_type_remarks', values.venue_type_remarks);
    data.append('file', VENUE_FILE);
    data.append('token', localStorage.getItem('token'));

    const response = await addVenue(data);
    //console.log(response);
}

const Venue = (props) => {
    const venueUpload = useRef();
    useEffect(() => {
        if(!props.landingStore.state.registerStatus){
            history.push("/account");
            return;
        }
    });
    const initialValues = {
        venue_name: "",
        venue_city: "",
        venue_contact: "",
        venue_address: "",
        venue_type_remarks: ""
    }

    const errMsg = "Required Field !!";
    const FieldStyle = {height: '50px', width: '100%', borderRadius: "8px", border: 'none', paddingLeft: '10px'};
    const ErrorStyle = {textAlign: 'right', width: '90%', marginBottom: '0px', color: 'red', fontSize: '12px'};
    const FileUploadStyle = {width: '90%', height: '50px', border: 'none', borderRadius: '25px', marginBottom: '20px', outline: 'none'};
    const headingStyle = {textAlign: 'left', width: '100%', color: "white", marginTop: "10px", paddingLeft: "8px"};
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <div>
            <Navbar />
            <div className="Dashboard_Container">
                <Header />
                <Overlay />
                <div className="Dashboard_Content">
                    <div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                        <span className="Dashboard_Heading"><u>SUGGEST A VENUE</u></span>
                        <span className = "Dashboard_underliner"></span>
                    </div>
                    <Formik
                        initialValues = {initialValues}
                        validationSchema = {Yup.object().shape(
                            {
                                venue_name: Yup.string().required(errMsg),
                                venue_address: Yup.string().required(errMsg),
                                venue_contact: Yup.string().min(10).max(10).matches(phoneRegExp, "Invalid Mobile Number").required(errMsg),
                                venue_type_remarks: Yup.string().required(errMsg),
                                venue_city: Yup.string().required(errMsg)
                            }
                        )}
                        onSubmit={async (values, {setSubmitting}) => {
                            await uploadData(values);
                            setSubmitting(false);
                        }}
                    >
                        {(props) => {
                            const {values, touched, errors, isSubmitting, handleChange, handleBlur, setFieldValue, setFieldTouched} = props;
                            return (
                                <Form style={{width: "90%", padding: "20px"}}>
                                    <div style={headingStyle}>NAME</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            name='venue_name' 
                                            type='text' 
                                            placeholder='Venue Name'  
                                            value={values.venue_name || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={FieldStyle}
                                        />
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.venue_name && touched.venue_name) ? 'block' : 'none'}}>
                                        {errors.venue_name || "error"}
                                    </div>
                                    <div style={headingStyle}>ADDRESS</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            name='venue_address' 
                                            type='text' 
                                            placeholder='Venue address'  
                                            value={values.venue_address || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={FieldStyle}
                                        />
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.venue_address && touched.venue_address) ? 'block' : 'none'}}>
                                        {errors.venue_address || "error"}
                                    </div>
                                    <div style={headingStyle}>REMARKS</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            component='textarea'
                                            rows='5'
                                            name='venue_type_remarks'
                                            type='number' 
                                            placeholder='Remarks'  
                                            value={values.venue_type_remarks || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{...FieldStyle, height: '100px', paddingTop: '10px'}}
                                        />  
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.venue_type_remarks && touched.venue_type_remarks) ? 'block' : 'none'}}>
                                        {errors.venue_type_remarks || "error"}
                                    </div>
                                    <div style={headingStyle}>VENUE PHONE NUMBER</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            name='venue_contact'
                                            type='number' 
                                            placeholder='Venue Contact Number'  
                                            value={values.venue_contact || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={FieldStyle}
                                        />  
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.venue_contact && touched.venue_contact) ? 'block' : 'none'}}>
                                        {errors.venue_contact || "error"}
                                    </div>
                                    <div style={headingStyle}>VENUE CITY</div>
                                    <div style={{width: '100%'}}>
                                        <Field 
                                            name='venue_city'
                                            style={FieldStyle}
                                            render={() => (
                                                <Select 
                                                    options={cityOptions}
                                                    multi={false}
                                                    value={values.venue_city || ""}
                                                    placeholder="Choose City"
                                                    isClearable={true}
                                                    onChange={(v) => setFieldValue('venue_city', v)}
                                                    onBlur={handleBlur}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div style={{...ErrorStyle, display: (errors.venue_city && touched.venue_city) ? 'block' : 'none'}}>
                                        {errors.venue_city || "error"}
                                    </div>
                                    <button style={FileUploadStyle} onClick={() => {venueUpload.current.click()}}>
                                        UPLOAD FILE
                                    </button>
                                    <input type='file' accept="image/x-png,image/gif,image/jpeg" ref={venueUpload} onChange={onVenueUpload}  style={{display: 'none'}} />
                                    <div style={{width: "100%"}}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="dashboard_submit"
                                        >
                                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
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

export default withStore([LandingStore])(Venue);