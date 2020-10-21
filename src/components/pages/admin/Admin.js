import React from 'react'
import {Route, Switch, useRouteMatch} from "react-router-dom";
import RoutIfAuthenticated from "../../hoc/RoutIfAuthenticated";
import Login from "./admin-login/Login";
import Contacts from "./admin-contacts/Contacts";

const Admin = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <RoutIfAuthenticated exact path={`${path}`}>
                <Contacts/>
            </RoutIfAuthenticated>
            <Route path={`${path}/login`}>
                <Login/>
            </Route>
        </Switch>
    )
}

export default Admin
