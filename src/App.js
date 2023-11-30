import { Routes, Route, useLocation } from "react-router-dom"
import './App.css';
import Home from "./Pages/Home.js";
import Service from "./Pages/service";
import About from "./Pages/About";
import { useEffect } from "react";

function App() {
  const { pathname} = useLocation();
  useEffect(()=>{
    window.scroll({top: 0, behavior:"smooth"});
  } ,[pathname]);
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/service" element={<Service/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   </>
  );
}

export default App;
