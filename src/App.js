import React, { Component} from "react";
import Planner from './Planner'
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
		<h1>Pickyourtrail Sitemap</h1>
        <Planner />
      </div>
    );
  }
}

export default hot(module)(App);