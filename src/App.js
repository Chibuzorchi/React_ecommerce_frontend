import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  //Step 1: Fetch data from database
  const {productItems} = Data
  const {shopItems} = Sdata

  const [ cartItem, setCardItem ] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit) {
      setCardItem(cartItem.map((item) => 
        (item.id === product.id ?
          {...productExit, qty: productExit.qty + 1} : item)))
    } else {
        setCardItem([...cartItem, { ...product, qty: 1}])
    }
  }


  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
      if(productExit.qty === 1) {
        setCardItem(cartItem.filter((item) => item.id !== product.id))
      } else {
        setCardItem(cartItem.map((item) => (item.id === product.id? 
          {...productExit, qty: productExit.qty-1} : item)))
      }
  }
  return (
    <>
     <Router>
      <Header cartItem={cartItem} />

      <Routes>
        <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty = {decreaseQty} />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      
      <Footer />
      </Router>
    </>
  );
}

export default App;
