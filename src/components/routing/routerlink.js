import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Crypto from '../crypto/crypto'
import Weather from '../weather/weather'
import Home from '../home/home'
import Bible from '../Bible/bible'

const Routerlink = () => {
    return (
        <nav>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/crypto' component={Crypto} />
                    <Route path='/weather' component={Weather} />
                    <Route path='/bible' component={Bible} />
                </Switch>
            </Router>
        </nav >
    )
}

export default Routerlink