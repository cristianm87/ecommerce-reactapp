import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar brand={'Marca'} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/about" component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/detail/:id" component={ItemDetailContainer} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;