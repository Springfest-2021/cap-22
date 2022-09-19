import React, {useRef, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import XLSX from 'xlsx';
import TableModal from './TableModal';
import {addContacts} from "../../../Services/services";

var HEADERS, DATA, NUMBER_ENTRIES;


/*UTILITY FUNCTIONS*/
const fixdata = (data) => {
    let o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
}

const get_header_row = (sheet) => {
    let headers = [], range = XLSX.utils.decode_range(sheet['!ref']);
    let C, R = range.s.r; /* start in the first row */
    for(C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        let cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */
        let hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
    }
    return headers;
}

const sendContact = async (data) => {
    const res = await addContacts(data);
    if(res === null){
        toast.error('null response received', {
            position: toast.POSITION.TOP_CENTER
        })
        return;
    }
    //console.log(res.code);
    if(res.code === -4){
        toast.error('Authentication error! Please login again to continue.', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    else if(res.code === -5){
        toast.error('User not found.', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    else if(res.code === 0){
        toast.success('Contact shared is successfully Recorded!', {
            position: toast.POSITION.TOP_CENTER
        });
        this.setState({
            sheetData:[]
        })
    }
    else if(res === -4){
        toast.error('Use the exact same format as shown in the sample file', {
            position: toast.POSITION.TOP_CENTER
        });
    }
}



const SheetUpload = (props) => {
    const sheetUpload = useRef();
    const sheetDownload = useRef();

    const [headers, setHeaders] = useState([]);
    const [data, setData] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [numberEntries, setNumberEntries] = useState(0);

    const Modal = () => {
        return (
            modalState ?
            <TableModal
                headers={headers}
                sheetData={data}
                number={numberEntries}
                toggleTable={() => {setModalState(!modalState)}}
                setHeaders={(headers) => {setHeaders(headers)}}
                setSheetData={(data,num) => {
                    setData(data);
                    setNumberEntries(num);
                }}
            />
            :<div/>
        )
    }

    const onSheetUpload = (event) => {
        event.stopPropagation();
        event.preventDefault();
        let sheet = event.target.files[0];
        let allowedExtensions = /(\.xlsx)$/i;
    
        if(!allowedExtensions.exec(sheet.name)){
            toast.error('The uploaded file type is not valid. Please provide us with files having .xlsx extension only.', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        } 
        let reader = new FileReader();
        reader.onload = function(event){
            let data = event.target.result;
            let fixedData = fixdata(data);
            let workbook = XLSX.read(btoa(fixedData), {type: 'base64'});
            let firstSheetName = workbook.SheetNames[0];
            let worksheet = workbook.Sheets[firstSheetName];
            let headers = get_header_row(worksheet);
            let columns = [];
    
            
            let results = XLSX.utils.sheet_to_json(worksheet);
            if(results.length === 0){
                toast.error('The sheet is empty.', {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            }
            
            setData(results);
            
            setHeaders(headers);
            setUploaded(true);
            setNumberEntries(results.length);
        }
        reader.readAsArrayBuffer(sheet);
    }

    const submitData = () => {
        let sheetData = new FormData();
        sheetData.append("token", localStorage.getItem("token"));
        sheetData.append("contact_type", props.type === 1 ? "media" : "publi");
        sheetData.append("data", JSON.stringify(data));
        sendContact(sheetData);
    }

    

    return (
        <div style={{width: "90%", margin: "20px auto 0 auto", textAlign: "center"}}>
            <p style={{textAlign: "center"}}>
                To submit multiple contacts at once, simply fill up the details in an Excel spreadsheet and upload it. For the correct format of the sheet, download the sample file using the button below.
            </p>
            <button className="account_settings_submit" onClick={() => {sheetUpload.current.click()}}>
                {uploaded ? "CHANGE SHEET" : "UPLOAD SHEET"}
            </button>
            <button className="account_settings_submit" onClick={() => {sheetDownload.current.click()}}>
                DOWNLOAD SHEET
            </button>
            <br />
            <div>
                {uploaded ? "The data from the excel sheet has been read. Check the data and make the necessary edits by clicking the button below. If everything looks fine, press \"SUBMIT\" to proceed" : ""}
            </div>
            <br />
            {uploaded ? 
                <div style={{display: "inline-flex", width: "60%", justifyContent: "space-around"}}>
                    <button 
                        className="account_settings_submit" 
                        style={{backgroundColor: "#03198a", width: "45%"}}
                        onClick={() => {setModalState(!modalState)}}
                    >
                        VIEW DATA
                    </button>
                    <button 
                        className="account_settings_submit" 
                        style={{backgroundColor: "#03198a", width: "45%"}}
                        onClick={submitData}
                    >
                        SUBMIT
                    </button>
                </div>:
                <div />    
            }
            <input 
                type="file" 
                ref={sheetUpload}
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                style={{display: "none"}}
                onChange={onSheetUpload}
            >
            </input>
            <a 
                ref={sheetDownload}
                href={props.type === 0 ? 
                    "https://ca20.springfest.in/assets/Demo - Participant.xlsx" : 
                    "https://ca20.springfest.in/assets/Demo - Professional.xlsx"} 
                target = "_blank"
                style={{display: "none"}}
            >
            </a>
            <Modal />
        </div>
    )
}

export default SheetUpload;