import Dashboard from "./redux/admin pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./redux/login/Login";
import Register from "./redux/login/Register";
import Home from "./redux/user pages/Home"
import About from "./redux/user pages/About"
import Cart from "./redux/user pages/Cart";
import Product from "./redux/admin pages/Product";
import { Adminprivate, Userprivate } from "./redux/private/Private";
import Order from "./redux/admin pages/Order";
import Details from "./redux/user pages/Details";
function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={< Userprivate />} >
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<Details />} />
        </Route>
        <Route element={<Adminprivate />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes >
    </>
  )
}

export default App;
