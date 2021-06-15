import React, { Component, Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar brand={'Marca'}/>
        </header>
        <main>
        <ItemListContainer />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
