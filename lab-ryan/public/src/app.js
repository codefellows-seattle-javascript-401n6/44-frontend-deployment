import react, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return <Fragment>
            <h1>App</h1>
            <p>My App</p>
        </Fragment>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root)