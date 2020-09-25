import React from 'react';
import './App.css';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route> 
            <Route path='/registration' component={Registration}></Route> 
            <Route path='/dashboard' component={Dashboard}></Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
