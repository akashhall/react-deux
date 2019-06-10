import React, { Component } from "react";
import MainRoutes from './../components/Routes';
import '../styles/App.css';

class App extends Component {
/*Added MainRoute Component For App Routing*/
    render() {
        return (
            <div>
                <header >
                    <h1></h1>
                    </header>
                <MainRoutes/>
                <footer>
                    <h1></h1>
                    </footer>
            </div>
        );
    }
}

export default App;