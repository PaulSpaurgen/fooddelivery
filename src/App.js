import './App.css'
import AboutUs from './Components/Aboutus/AboutUs'
import NavBar  from './Components/NavBar/NavBar'
import ContactUs from './Components/ContactUs/ContactUs'
import FeedBack from './Components/FeedBack/FeedBack'
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/FeedBack' element={<FeedBack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
