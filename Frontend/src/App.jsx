import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./components/Home";
import ProductList from "./admin/ProductList";
import AddProducts from "./admin/addProducts";
import EditProduct from "./admin/EditProduct";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home/>} />

          <Route path="/admin/products" element={<ProductList/>} />
          <Route path="/admin/products/add" element={<AddProducts/>} />
          <Route path="/admin/products/edit/:id" element={<EditProduct/>} />
        </Routes>
         
      </BrowserRouter>
    </>
  );
}

export default App;
