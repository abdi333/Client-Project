import {Link, Route, Routes} from "react-router-dom"
import 'tailwindcss/tailwind.css';
import Nav from "./components/App/Nav";
import Footer from './components/App/Footer';
import Title from './components/App/Title';
import Shop from "./components/Shop/Shop";
import CreateLeague from './components/Join/CreateLeague'
import SignUp from "./components/Join/SignUp";
import About from "./components/About/About"
import ContactPage from "./components/App/Contact";
import RegisterCards from "./components/App/RegisterCards";
import Login from "./components/Join/Login";
import ProfilePage from './components/Join/ProfilePage';
import Cart from "./components/Shop/Cart";


export default function App() {
  return (   
    
    <div className="app">
      <Nav />      
      <div className="">
      <Routes>
        <Route path='/' element={<Title />}/>
        <Route path='/Join' element={<RegisterCards />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/CreateLeague' element={<CreateLeague />}/>
        <Route path='/Shop' element={<Shop />}/>   
        <Route path='/About' element={<About />}/> 
        <Route path='/Contact' element={<ContactPage />}/>   
        <Route path='/RegisterCards' element={<RegisterCards />}/>  
        <Route path='/Login' element={<Login />}/>    
        <Route path='/ProfilePage' element={<ProfilePage />}/>
        <Route path='/Cart' element={<Cart />}/>  
      </Routes> 
      </div>      
      <Footer />
    </div>
    
  );
}

