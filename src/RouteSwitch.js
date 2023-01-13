import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Item from "./components/Item";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;