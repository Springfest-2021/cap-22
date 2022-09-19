import React from 'react';
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import Select from 'react-select';

const ProfessionalForm = () => {
    const initialValues = {
        name: "",
        phone: "",
        email: '',
        organization: '',
        category: '',
        city: ''
    };
    const errMsg = "Required Field !!";
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const categories = [
        { value: "Celebrity & Artist", label: "Celebrity & Artist" },
        { value: "Media contacts", label: "Media contacts" },
        { value: "Sponsors", label: "Sponsors" },
        { value: "Event association", label: "Event association" },
        { value: "Other", label: "Other" }
    ];

    const FieldStyle = {height: '50px', width: '100%', borderRadius: "8px", border: 'none', paddingLeft: '10px'};
    const ErrorStyle = {textAlign: 'right', width: '90%', marginBottom: '10px', color: 'red', fontSize: '12px'};

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
                name: Yup.string().required(),
                phone: Yup.string().required(errMsg).min(10).max(10).matches(phoneRegExp, "Invalid Mobile Number"),
                email: Yup.string().email().required(errMsg),
                organization: Yup.string().required(errMsg),
                category: Yup.string().required(errMsg),
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
                        <div style={{textAlign: 'left', width: '90%'}}>ORGANIZATION</div>
                        <div style={{width: '100%'}}>
                            <Field 
                                name='organization' 
                                type='text' 
                                placeholder='Enter organization'  
                                value={values.organization || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={FieldStyle}
                            />
                        </div>
                        <div style={{...ErrorStyle, visibility: (errors.organization && touched.organization) ? 'visible' : 'hidden'}}>{errors.organization || "error"}</div>
                        <div style={{textAlign: 'left', width: '90%'}}>CATEGORY</div>
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
                        <div style={{...ErrorStyle, visibility: (errors.category && touched.category) ? 'visible' : 'hidden'}}>{errors.category || "error"}</div>
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
    )
}

export default ProfessionalForm;