import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCustomer from "./components/AddCustomer.jsx";
import CustomerList from "./components/CustomerList.jsx";
import Signup from "./components/Signup.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Dashboard() {
    return null;
}

function Signup() {
    return (
    <div>
      <Signup />
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
