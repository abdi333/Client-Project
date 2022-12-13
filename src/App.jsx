import {Link, Route, Routes} from "react-router-dom"
import 'tailwindcss/tailwind.css';
import Nav from "./components/App/Nav";
import Footer from './components/App/Footer';
import Title from './components/App/Title';
import CreateLeague from './components/join/CreateLeague';
import Login from './components/Join/Login';
import ProfilePage from './components/Join/ProfilePage';
import SignUp from "./components/Join/SignUp";
import About from "./components/About/About"
import ContactUs from './components/About/ContactUs';



export default function App() {
  return (
    
    <div className="app">
      <div className="" style={ImgStyle}>
      <Nav />

        <Routes>
        <Route path='/' element={<Title />}/>
        <Route path='/Join' element={<SignUp />}/>
        <Route path='/CreateLeague' element={<CreateLeague />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
        </Routes>

       
        
      </div>      
      <Footer />
    </div>
  );
}


const ImgStyle = {
  width: '100%',
  height: '1000px',
  backgroundImage: `url("https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80")`,
  backgroundSize: 'cover'
};

