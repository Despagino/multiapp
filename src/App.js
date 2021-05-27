import React from 'react'
import Crypto from './components/crypto/crypto'
import Home from './components/home/home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Weather from './components/weather/weather'
import Bible from './components/Bible/bible'


class App extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/crypto' component={Crypto} />
                        <Route path='/weather' component={Weather} />
                        <Route path='/bible' component={Bible} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App