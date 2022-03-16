import './App.css'
import AboutUs from './Components/Aboutus/AboutUs'
import NavBar  from './Components/NavBar/NavBar'
import ContactUs from './Components/ContactUs/ContactUs'
import FeedBack from './Components/FeedBack/FeedBack'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Dehatiz</title>
                <link rel="canonical" href="http://http://localhost:3000/" />
            </Helmet>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/FeedBack' element={<FeedBack />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
