import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import "./css/style.css"




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Main} />
        
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
