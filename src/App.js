
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';

import Services from './components/Services/Services';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/banner" element={<Banner></Banner>}></Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
    
   
     <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
