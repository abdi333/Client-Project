import { Link } from "react-router-dom";
import Logo from '../../pictures/circleface.png';

export default function Nav() {
  return (
    <div className="sm bg-lightgreen">
      <nav className="px-6 py-4 shadow-2xl">
        <div className=" flex items-center justify-between">
          <a href="/" className="flex">
            <img className="mr-5" width="40" height="40" src={Logo} />
            <span className="self-center text-lg text-white font-semibold whitespace-nowrap">Good Sport Golf Club</span>
          </a>

          <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1">
            <ul className="text-white flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/" className=""><b>Home</b></Link>
              </li>
              <li>
                <Link to="/Join" className=""><b>Join</b></Link>
              </li>              
              <li>
                <Link to="/Shop" className=""><b>Shop</b></Link>
              </li>
              <li>
                <Link to="/Media" className=""><b>Media</b></Link>
              </li>
              <li>
                <Link to="/About" className=""><b>About Us</b></Link>
              </li>
            </ul>
          </div>
          <div className="flex md:order-2">
            <a href="/Login" ><img className="h-5 w-5 mr-4" src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"/></a> 
            <a href="/Cart"><img className="h-5 w-6" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"/></a>                                   
          </div>
        </div>
      </nav>
    </div>
  );
}


