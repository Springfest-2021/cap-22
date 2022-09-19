import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ProfessionalForm from "./Components/professional";
import ParticipantForm from "./Components/participant";
import SheetUpload from "./Components/sheetUpload";
import "../../Styles/dashboard.sass";
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import history from '../../routerHistory.js';
import withStore from "../Unstated/withStore.js";
import LandingStore from "../../Store/LandingStore.js";
import Navbar from '../Navbar/navbar.js';


const ShareContacts = (props) => {
    const [type, setType] = useState(0);
    const [form, setForm] = useState(1);

    useEffect(() => {
        if(!props.landingStore.state.registerStatus){
            history.push("/account");
            return;
        }
    })

    const changeType = (event, newVal) => {
        setType(newVal);
    }

    const changeForm = (event, newVal) => {
        setForm(newVal);
    }

    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: "rgba(150, 150, 150, 0.7)"
            }
        }
    });

    return (
        <div>
            <Navbar />
            <div className="Dashboard_Container">
                <Header />
                <Overlay />
                <div className="Dashboard_Content">
                    <div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                        <span className="Dashboard_Heading"><u>SHARE CONTACTS</u></span>
                        <span className = "Dashboard_underliner"></span>
                    </div>
                    <div className={"tab_panel_wrapper"} style={{width: "80%", margin: "30px auto 30px auto", paddingTop: "12px"}}>
                        <ThemeProvider theme={darkTheme}>
                            <AppBar position="static" color="default" style={{borderRadius: "12px"}}>
                                <Tabs selectionFollowsFocus value={type} onChange={changeType} indicatorColor="primary">
                                    <Tab label="PARTICIPANT" />
                                    <Tab label="PROFESSIONAL" />
                                </Tabs>
                                <Box>
                                    <Tabs selectionFollowsFocus value={form} indicatorColor="primary" onChange={changeForm}>
                                        <Tab label="fill form"  />
                                        <Tab label="upload a sheet"  />
                                    </Tabs>
                                    <Box style={{maxHeight: "60vh", overflowY: "scroll"}}>
                                        {(form === 1) ? <SheetUpload type={type} /> : (type === 0 ? <ParticipantForm /> : <ProfessionalForm/>)}
                                    </Box>
                                </Box>
                            </AppBar>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStore([LandingStore])(ShareContacts);