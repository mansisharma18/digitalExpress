import React from 'react'
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import TodaysDetail from './LandingPage/TodaysDetail';
import Cart from './LandingPage/Cart';

const MainComponent = () => {
  return (
    <div>

<Router>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/todaysdetail/:id" element={<TodaysDetail/>} />
      </Routes>
    </Router>

    </div>
  )
}

export default MainComponent