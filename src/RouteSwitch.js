import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav";
import Item from "./Item";

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