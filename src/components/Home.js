import React, { Component } from "react";
import Lodable from 'react-loadable';
import '../styles/App.css';

function Loading() {
  return <h3>Loading...</h3>;
}
const Login = Lodable ( {
loader  : () => import('./login'),
loading :  Loading
})
  
class Home extends Component {
  constructor (props) {
    super (props) ;
    this.state = {
      show : false
    }
  }
  setShow = () => {
    this.setState({show: true});
  }
    render() {
        return (
            <div>
                {this.state.show ? <Login /> : null }
                <h1>Home</h1>
                <div> <button value="click ME" onClick={this.setShow}/> </div>
            </div>
        );
    }
}

export default Home;