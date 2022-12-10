import { useState } from "react";
import 'tailwindcss/tailwind.css';
import Nav from "./components/App/Nav";
import Main from "./components/App/Main";
import Testimonials from "./components/App/Testimonials";
import Footer from "./components/App/Footer"
import {Link, Route, Routes} from "react-router-dom"

export default function App() {
  return (
    
    <div className="app">
      <div className="" style={ImgStyle}>
        <Nav />
        <Routes> 
        <Route path = "/" element = {<Main />}/>
        </Routes>
        <Testimonials />
        <Footer />
      </div>      
    </div>
  );
}

const ImgStyle = {
  width: '100%',
  height: '1200px',
  backgroundImage: `url("https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80")`,
  backgroundSize: 'cover'
};


// "code background image for local file"
// import background from "./img/placeholder.png";

// function App() {
//   return (
//     <div style={{ backgroundImage: `url(${background})` }}>
//       Hello World
//     </div>
//   );
// }
