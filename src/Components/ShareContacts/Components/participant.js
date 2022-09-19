import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';


const ParticipantForm = () => {
    const initialValues = {
        name: "",
        phone: "",
        email: '',
        college: '',
        involvements: '',
        city: ''
    };

    const FieldStyle = {height: '50px', width: '100%', borderRadius: "8px", border: 'none', paddingLeft: '10px'};
    const ErrorStyle = {textAlign: 'right', width: '90%', marginBottom: '10px', color: 'red', fontSize: '12px'};
    const errMsg = "Required Field !!";
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            initialValues={initialValues}
            validationSchema = {Yup.object().shape({
                name: Yup.string().required(errMsg),
                phone: Yup.string().required(errMsg).min(10).max(10).matches(phoneRegExp, "Invalid Mobile Number"),
                email: Yup.string().email().required(errMsg),
                college: Yup.string().required(errMsg),
                involvements: Yup.string().required(errMsg),
                city: Yup.string().required(errMsg)
            })}
        >
            {(props) => {
                const {values, touched, errors, isSubmitting, handleChange, handleBlur, setFieldValue, setFieldTouched} = props;
                return (
                    <Form style={{backgroundColor: "transparent", width: "90%", left: "0%"}}>
                        <div style={{textAlign: 'left', width: '90%'}}>NAME</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='name' 
                                type='text' 
                                placeholder='Enter name'  
                                value={values.name || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.name && touched.name) ? 'visible' : 'hidden'}}>{errors.name || "error"}</div>
                        <div style={{textAlign: 'left', width: '90%'}}>PHONE NUMBER</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='phone' 
                                type='text' 
                                placeholder='Enter phone number'  
                                value={values.phone || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.phone && touched.phone) ? 'visible' : 'hidden'}}>{errors.phone || "error"}</div>
                        <div style={{textAlign: 'left', width: '90%'}}>EMAIL</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='email' 
                                type='email' 
                                placeholder='Enter email'  
                                value={values.email || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.email && touched.email) ? 'visible' : 'hidden'}}>{errors.email || "error"}</div>
                        <div style={{textAlign: 'left', width: '90%'}}>COLLEGE</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='college' 
                                type='text' 
                                placeholder='Enter college'  
                                value={values.college || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.college && touched.college) ? 'visible' : 'hidden'}}>{errors.college || "error"}</div>
                        <div style={{textAlign: 'left', width: '90%'}}>CITY</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='city' 
                                type='text' 
                                placeholder='Enter city'  
                                value={values.city || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.city && touched.city) ? 'visible' : 'hidden'}}>{errors.city || "error"}</div>
                        <div style={{textAlign: 'left', width: '90%'}}>INVOLVEMENTS</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='involvements' 
                                type='text' 
                                placeholder='Enter involvements'  
                                value={values.involvements || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.involvements && touched.involvements) ? 'visible' : 'hidden'}}>{errors.involvements || "error"}</div>
                        
                        <div style={{width: "100%"}}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="dashboard_submit"
                                style={{marginBottom: "0"}}
                            >
                                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            </button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default ParticipantForm;