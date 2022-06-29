import React, {Fragment} from 'react';
import Navbar from "./components/Layout/Navbar/Navbar";
import './assets/css/App.css'
import About from './components/About/About';
import Footer from './components/Layout/Footer/Footer';
function App() {
  return (
    <Fragment>
      <Navbar/>
      <About/>
      <Footer/>
    </Fragment>
  );
}

export default App;
