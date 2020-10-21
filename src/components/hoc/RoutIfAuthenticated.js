import React from 'react'
import {Route, Redirect} from "react-router-dom";
import AuthContext from '../../context/AuthContext'

const RoutIfAuthenticated =  ({ children, ...rest }) => {



    return (
        <AuthContext.Consumer>
            {({userIsAuth})=>
                <Route
                    {...rest}
                    render={({ location }) =>
                        userIsAuth ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/admin/login",
                                    state: { from: location }
                                }}
                            />
                        )
                    }
                />
            }
        </AuthContext.Consumer>
    );
}

export default RoutIfAuthenticated
