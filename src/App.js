import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import './App.css'

const  App = () =>  {
  return (
    <div  className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
