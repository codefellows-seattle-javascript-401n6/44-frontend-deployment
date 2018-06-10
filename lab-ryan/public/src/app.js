import React, {Component, Fragment} from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SpotItPage from './components/spot-it/SpotItPage.js';

class HomePage extends Component {
    render() {
        return <Fragment>
                <h1>App</h1>
                <p>My Homepage</p>
                <p>Select a Link below:</p>
                <p><Link to="/spot-it">Spot-It</Link></p>
        </Fragment>  
    }
}

class App extends Component {
    render() {
        return <BrowserRouter>
            <Fragment>
                <h1>Routed</h1>
                <Route exact path="/" component={HomePage} />
                <Route path="/spot-it" component={SpotItPage} />
            </Fragment>
        </BrowserRouter>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root)