import logo from './logo.svg';
import './App.css';
import Home from "./home/Home";
import Admin from "./admin/Admin";
import Login from "./login/Login";
import RegDriver from "./register/RegDriver";
import RegUser from "./register/RegUser";
import UpdtUser from "./update/UpdtUser";
import UpdtDriver from "./update/UpdtDriver";
import SetPickup from "./setPickup/SetPickup";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="regDriver" element={<RegDriver />} />
        <Route path="regUser" element={<RegUser/>} />
        <Route path="updtUser" element={<UpdtUser/>} />
        <Route path="updtDriver" element={<UpdtDriver/>} />
        <Route path="setPickup" element={<SetPickup/>} />
      
      
      
          
      
       
     
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
