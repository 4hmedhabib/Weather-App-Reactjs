import {useState} from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import './App.css';

const  App = () =>  {
    const API_KEY = '03d80addf67b4f69569eeae03f49fda8';

  return (
    <div  className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main apiKey={API_KEY} />
      <Footer />
    </div>
  );
}

export default App;
