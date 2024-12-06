import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/login";
import Home from "./components/Home";
import Admin from "./components/Admin";

import AddProduct from "./components/Add";
import EditProduct from "./components/edit";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </Router>
      </AuthProvider>




    </>
  )
}

export default App