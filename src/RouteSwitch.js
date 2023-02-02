import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Item from "./components/Item";
import CartProvider from './components/CartItems'

const RouteSwitch = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nav/>
        
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default RouteSwitch;