import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import Home from "./components/Home/Home";
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'

function App() {
  return (
    <Router>
      <div className="App">
        <hr />
        <Navbar Link={Link} />
        <Switch>
          <Route path="/" exact>
            <Home   />
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
