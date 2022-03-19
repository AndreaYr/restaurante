import React, { useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slideshow from './components/slider/Slideshow';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import ShoppingCart from "./components/card/ShoppingCart";

function App() {
  //posicion del scroll navbar
  const [scrollHeight, setCrollHeight] = useState(0);

  //funcion que controla la posicion
  const handleScoll = () => {
    const position = window.pageYOffset;
    //asignar el valor
    setCrollHeight(position);
  };

  //cada que se haga scroll se actualice
  useEffect(() => {
    window.addEventListener("scroll", handleScoll);
  }, [scrollHeight])

  
  return (
    <div className="App">

      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <Slideshow />
      <About />
      <ShoppingCart />
      <Info />
      <Footer />
      
      
    </div>
  );
}

export default App;
