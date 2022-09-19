import React, {useState} from 'react';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css";

const TableModal = (props) => {
    //console.log(props);
    const [data, setData] = useState(props.sheetData);

    const overlayStyles = {
        width: "100vw", 
        height: "100vh", 
        position: "fixed", 
        top: "0", 
        left: "0", 
        zIndex: "3000", 
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        textAlign: "center"
    }

    const modalStyles = {
        position: "relative",
        width: "60%",
        height: "60%",
        top: "15%",
        margin: "auto",
        zIndex: "5000",
        backgroundColor: "#27242a",
        paddingTop: "30px",
        opacity: "1"
    }

    const RenderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#27242a"}}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    var d = [...data]
                    d[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    setData(d);
                    props.setSheetData(d, d.length);
                }}
                dangerouslySetInnerHTML={{
                    __html: data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    var columns  = [];
    props.headers.map((header, index) => {
        columns.push({
            Header: header,
            accessor: header,
            Cell: RenderEditable
        })
    })
    
    return(
        <div style={overlayStyles}>
            <div className="tableModal" style={modalStyles}>
                <i 
                    style={{position: "absolute", top: "8px", right: "8px"}} 
                    className="fa fa-close"
                    onClick={() => props.toggleTable()}
                >
                </i>
                <h1 className="pageTitle">Read Contacts from Sheet</h1>
                <ReactTable
                    data={data}
                    columns={columns}
                    className="-striped -highlight"
                    defaultPageSize={5} 
                />
                <p className="tableEditReminder">Click on any data to edit as per requirement.</p>
            </div>
        </div>
    )
}

export default TableModal;

