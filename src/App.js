import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return( 
  <div className="w-full h-full bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>


    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
      <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard></Dashboard></PrivateRoute>}></Route>

    </Routes>
  </div>
  )
}

export default App;
