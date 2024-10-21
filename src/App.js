import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './ecommerce/Navbar';
import Home from './ecommerce/Home';
import Shop from './ecommerce/Shop'; 
import Cart from './ecommerce/Cart';
import Backgroundimg from './ecommerce/Backgroundimg';
import Singalproduct from './ecommerce/Singalproduct';
import CategoryProduct from './ecommerce/CategoryProduct';

function App() {
  return (
    <BrowserRouter>
      <Navbar />       
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/shop' element={<Shop/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='singalproduct/:pid' element={ < Singalproduct/>}></Route>
         <Route path='shop/:id' element={ < Shop/>}></Route>
         <Route path='category_products' element={<CategoryProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
