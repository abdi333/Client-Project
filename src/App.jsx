import {Link, Route, Routes} from "react-router-dom"
import 'tailwindcss/tailwind.css';
import Nav from "./components/App/Nav";
import Footer from './components/App/Footer';
import Title from './components/App/Title';
import Login from './components/Join/Login';
import ProfilePage from './components/Join/ProfilePage';
import RegisterLeague from './components/Join/RegisterLeague'
import SignUp from "./components/Join/SignUp";
import About from "./components/About/About"


export default function App() {
  return (    
    <div className="app">
      <div className="">
      <Nav />      
      <Routes>
        <Route path='/' element={<Title />}/>
        <Route path='/Join' element={<SignUp />}/>
        <Route path='/RegisterLeague' element={<RegisterLeague />}/>
        <Route path='/About' element={<About />}/>
        
      </Routes> 
      </div>      
      <Footer />
    </div>
  );
}

