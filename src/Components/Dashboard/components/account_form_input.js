import React from 'react';
import {Field} from "formik";

const AccountInput = ({name, type, icon, label, required, placeholder, formik:{value, touched, error}, formikHandlers:{handleChange, handleBlur}}) => {
    return (
        <div className="account_input">
            <label htmlFor="input" style={{color: "white"}}>{(label || "").toUpperCase()}</label>
            <div className="account_input_flex">
                <span className="account_input_icon">
                    <i className={icon}></i>
                </span>
                <Field
                    id="input"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className = "account_input_field"
                />
            </div>
            {!!error && touched && (<div className="account_settings_input_error">{error}</div>)}
        </div>
    )
}

export default AccountInput;