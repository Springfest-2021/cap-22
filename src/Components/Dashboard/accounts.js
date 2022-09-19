import React, {useEffect} from 'react';
import AccountStore from "./store/AccountStore.js";
import withStore from "../Unstated/withStore.js";
import "../../Styles/dashboard.sass";
import "../../Styles/accounts.sass";
import {getCollegeList} from "../../Services/services.js";
import AccountForm from "./components/account_form.js";
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import Navbar from "../Navbar/navbar.js";

const Accounts = ({accountStore: {init, setCollegeList}}) => {
    useEffect(() => {
        init();
        (async () => {
            const {message: m} = await getCollegeList();
            setCollegeList(m);
        })();
    }, []) 
    return (
        <div>
            <Navbar />
            <div className="Dashboard_Container">
                <Header />
                <Overlay />
                <div className="Dashboard_Content"><div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                    <span className="Dashboard_Heading"><u>ACCOUNT SETTINGS</u></span>
                    <span className = "Dashboard_underliner"></span>
                </div>
                    <AccountForm />
                </div>
            </div>
        </div>
    )
}

export default withStore([AccountStore])(Accounts);
