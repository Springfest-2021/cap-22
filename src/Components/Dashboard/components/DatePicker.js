import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const borderStyles = {
    control: styles => ({...styles, borderRadius: '0px 8px 8px 0px', fontFamily: "Roboto"})
}

const MyDatePicker = ({label, value, onChange, onBlur, showvalue, error, touched, style, className, icon}) => {
    const onchange = (val) => {onChange(showvalue, val);};
    const onblur = () => {onBlur(showvalue, true)};
    return (
        <div style={{width: "90%", position:"relative", left: "0%", display: "inline-block"}}>
            <label htmlFor="input" style={{color: "white", float: "left"}}>{(label || "").toUpperCase()}</label>
            <div className="account_input_flex">
                <span className="account_input_icon">
                    <i className={icon}></i>
                </span>
                <DatePicker 
                    autoComplete="off"
                    selected = {value || new Date()}
                    onBlur={onblur}
                    placeholderText="DD/MM/YY"
                    dateFormat="dd/MM/yyyy"
                    onChange={onchange}
                    showYearDropDown
                    scrollableYearDropDown
                    yearDropdownItemNumber={30}
                    showMonthDropdown={true}
                    styles={borderStyles}
                    className={className}
                />
            </div>
        </div>
    )
}

export default MyDatePicker;