import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import Landing from "../../Components/Landing/Landing";
import Dashboard from "../../Components/Dashboard/accounts.js";
import ShareIdea from "../../Components/ShareIdea/shareidea.js";
import Venue from "../../Components/Venue/venue.js";
import Guidelines from "../../Components/Guidelines/guidelines.js";
import LeaderBoard from "../../Components/Leaderboard/leaderboard.js";
import ContactUs from "../../Components/Contact/contact.js";
import ShareContacts from "../../Components/ShareContacts/shareContacts.js";
import Chat from "../../Components/chat/chat.js";
import Ca from "../../Components/ca/ca.js";
import "../../Styles/index.sass";
import { ToastContainer } from "react-toastify";
import Navbar from "../../Components/Navbar/navbar.js";
import { PrivateRoute } from "../../Utils/PrivateRoute.js";
import Landing1 from "../../Components/Landing/Landing1";

const App = () => {
    //warn user of the console
    return (
        <div className="App">
            <ToastContainer />
            <Switch>
                <Route exact path="/" component={Landing1} />
                <PrivateRoute exact path="/account" component={Dashboard} />
                <PrivateRoute exact path="/idea" component={ShareIdea} />
                <PrivateRoute exact path="/venue" component={Venue} />
                <PrivateRoute exact path="/guidelines" component={Guidelines} />
                <PrivateRoute exact path="/share" component={ShareContacts} />
                <PrivateRoute
                    exact
                    path="/leaderboard"
                    component={LeaderBoard}
                />
                <PrivateRoute exact path="/contact" component={ContactUs} />
                <PrivateRoute exact path="/chat" component={Chat} />
                <PrivateRoute exact path="/ca" component={Ca} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
};

export default App;
