import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import ProductPage from "./Pages/Products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
