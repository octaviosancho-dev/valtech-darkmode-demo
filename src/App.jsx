import React, {Fragment} from 'react';
import Navbar from "./components/Layout/Navbar/Navbar";
import './assets/css/App.css'
import AboutContainer from './components/About/AboutContainer';
function App() {
  return (
    <Fragment>
      <Navbar/>
      <AboutContainer/>
    </Fragment>
  );
}

export default App;
