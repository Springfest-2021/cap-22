import React, {useState, useEffect} from 'react';
import Creatable from 'react-select/creatable';


const borderStyles = {
    control: styles => ({...styles, borderRadius: '0px 8px 8px 0px', height: '50px', fontFamily: "Roboto"})
}

const CreatableOption = ({options, label, value, onChange, onBlur, showvalue, error, touched, placeholder, icon}) => {
    const [list, setList] = useState([]);

    const onchange = (val) => {onChange(showvalue, val);};
    const onblur = (val) => {onBlur(showvalue, true)};
    
    const handleCreate = (newVal) => {
        const newOption = {label:newVal, value:newVal};
        setList([...list, newOption]);
    }
    useEffect(() => {
        setList(options);
    }, []);
    return (
        <div style={{width: "90%", position:"relative", left: "0%", display: "inline-block", marginBottom: "10px"}}>
            <label htmlFor="input" style={{color: "white", float: "left"}}>{(label || "").toUpperCase()}</label>
            <div className="account_input_flex">
                <span className="account_input_icon">
                    <i className={icon}></i>
                </span>
                <Creatable
                    options = {list}
                    multi={false}
                    value={value}
                    isClearable={true}
                    onChange={onchange}
                    onBlur={onblur}
                    onCreateOption = {handleCreate}
                    placeholder={placeholder}
                    styles={borderStyles}
                />
            </div>
            {!!error && touched && (<div className="account_settings_input_error">{error}</div>)}
        </div>
    )
}

export default CreatableOption;