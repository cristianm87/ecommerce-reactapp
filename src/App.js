import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Categories from './views/Categories/Categories';
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext"; //CartContext
import Cart from "./views/Cart/Cart";
import Order from './views/Order/Order';

function App() {
  return (
    <CartProvider> {/*CardContext*/}
      <Router>
        <NavBar brand={'Marca'} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/category/:id' component={Categories} />
          <Route path='/item/:id' component={ItemDetailContainer} />
          <Route path='/cart' component={Cart} />
          <Route path='/order' component={Order} />
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;