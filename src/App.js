import React from 'react';
import AuthorisationPage from "./AuthorisationPage";
import UserProfile from "./UserProfile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/profile" exact component={UserProfile}/>
                <Route path="/" exact component={AuthorisationPage}/>
            </Switch>
        </Router>
    );

};

export default App;