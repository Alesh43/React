import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import ProductPage from "./Pages/Products/Products";
import SingleProduct from "./Pages/Products/product-detail";
import Post from "./component/Blog/post";
import SinglePost from "./Pages/Posts/post-detail";
import RegisterForm from "./Pages/register/register-form";
import SigninForm from "./Pages/sign-in/signin-form";
import ContactPage from "./Pages/Contact/contact-page";
import NotFound from "./Pages/not-found/not-found";
import Dashboard from "./Pages/Dashboard/dashboard";
import Authlayout from "./layout/Auth-layout/auth";
import Defaultlayout from "./layout/Default/Default-layout";


const App = () => {
  return (
    <BrowserRouter>
      
    
      
      {/* Default layout */}
      <Routes>
      <Route element={<Defaultlayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path="/Products/:id" element={<SingleProduct/>} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Post" element={<Post/>} />
        <Route path="/Post/:id" element={<SinglePost/>} />
        <Route path="/Register" element={<RegisterForm/>} />
        <Route path="/Signin" element={<SigninForm/>} />
        <Route path="/Contactpage" element={<ContactPage/>} />
      </Route>
    
      <Route path="*" element={<NotFound/>} />
        
      {/* Authentication Layout */}
        <Route element={<Authlayout/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
        
        
        
  );
};

export default App;
