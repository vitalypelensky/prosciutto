import React, {Component} from 'react';
import './App.css'
import {auth} from "./model/firebase";
import Main from "./components/pages/main-page/Main";
import Admin from "./components/pages/admin/Admin";
import {
    BrowserRouter,
    Route, Switch,
} from "react-router-dom";
import AuthContext from './context/AuthContext'
import Preloader from "./components/elements/preloader/Preloader";

class App extends Component {

    state = {
        preloader: true,
    }

    togglePreloader = (value) => {
        this.setState({preloader: value})
    }

    checkUserAuth = () => {
        auth.onAuthStateChanged((user) => {
            this.context.setUserAuthValue(!!user)
            this.togglePreloader(false)
        });
    }

    componentDidMount() {
        this.checkUserAuth()
    }

    render() {
        return (
            <div className="App">
                {  this.state.preloader ?

                    <Preloader show={this.state.preloader}/>

                :

                    <BrowserRouter>
                        <Switch>
                            <Route path="/admin">
                                <Admin/>
                            </Route>
                            <Route path="*">
                                <Main/>
                            </Route>
                        </Switch>
                    </BrowserRouter>

                }
            </div>
        );
    }
}

App.contextType = AuthContext

export default App;
