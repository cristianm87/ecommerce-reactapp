import React, {Component, Fragment} from 'react';
import './App.css';

// hay dos tipos de componentes dentro de react los Class y los Function

class App extends Component {
  render() {
    
    return (
      <>
        <header>
          <nav>
            <div className="container">
              <div className="logo">
                <a href="index.html"><img src="./images/logo.png" alt="logo"/></a>
              </div>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Help</a></li>
                <li><a href="index.html">Contact</a></li>            
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <h1>Bienvenide</h1>
          <img src="./images/logo.png" alt="" />
        </main>
        
      </>
    )
  }
}

export default App;