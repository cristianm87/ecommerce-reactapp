import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"

function App() {
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
  )
}

export default App;
