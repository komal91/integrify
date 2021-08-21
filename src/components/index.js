import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './home';
import User from './user';

const Components = () =>{
    return(
        <Router>
            <Route exact path ="/" component = {Home} />
            <Route exact path ="/user/:id" component = {User} />

        </Router>
    );
}

export default Components;