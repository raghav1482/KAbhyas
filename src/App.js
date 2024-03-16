import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components//Navbar'
import "./components/css/style.css"
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Classes from './components/Classes';
import Products from './components/Products';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Aos from "aos";
import { useEffect } from 'react';
import PrivateRoutes from './components/Private';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
  <Router>
  <Navbar/>
    <Routes>
      <Route exact path={`/`} element={<Home/>}></Route>
      <Route path={`/classes`} element={<Classes />}></Route>
      <Route  path={`/products`} element={<Products />}></Route>
      <Route  path={`/aboutus`} element={<Aboutus/>}></Route>
      <Route  path={`/signup`} element={<Signup/>}></Route>
      <Route  path={`/login`} element={<Login/>}></Route>
      <Route element={<PrivateRoutes />}>
        <Route  path={`/profile`} element={<Profile/>}></Route>
      </Route>
      <Route  path={`/cart`} element={<Cart/>}></Route>
    </Routes>
  <Footer />
  </Router>
  );
}

export default App;
