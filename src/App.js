import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/ItemListContainer/List"
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
        <List greeting={'Acá va el listado de ítems'}/>
        </main>
      </>
    );
  }
}

export default App;
