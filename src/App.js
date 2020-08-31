import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Parameters from './components/parameters'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path="/:key/:color?/:background?" component={Parameters}/>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
