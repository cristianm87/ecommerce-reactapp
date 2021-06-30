import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBarAlt from "./components/NavBarAlt/NavBarAlt";

//VIEWS
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Categories from './views/Categories/Categories';
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import { ItemsProvider } from "./CartContext"; //CartContext

function App() {
  return (
    <ItemsProvider> {/*CardContext*/}
      <Router>
        <NavBar brand={'Marca'} />
        {/* <NavBarAlt /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/category/:id' component={Categories} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
        <Footer />
      </Router>
    </ItemsProvider>
  );
}

export default App;