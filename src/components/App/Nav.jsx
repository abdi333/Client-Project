import {Link} from "react-router-dom";
import Logo from '../Join/Pictures/circleface.png';

export default function Nav() {
  return (
    <div className="">
      <div className=" py-6">
        <nav className="px-2 mb-6 pb-5 shadow-2xl">
          <div className="mx-auto flex items-center justify-between">
            <a href="#" className="flex">
              <img className="mr-5" width="30" height="30" src={Logo} />
              <span className="self-center text-lg text-black font-semibold whitespace-nowrap">Good Sport Golf Club</span>
            </a>
            <div className="flex md:order-2">
              <div className="relative mr-3 md:mr-0 hidden md:block">
                <button className="bg-lightgreen text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">Donate Now</button>
              </div>
            </div>
            <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link to = "/" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><b>Home</b></Link>
                </li>
                <li>                
                  <Link to = "/Join" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><b>Join</b></Link>
                </li>
                <li>
                <Link to = "/RegisterLeague" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><b>Register League</b></Link>
                </li>
                <li>
                  <Link to = "/Shop" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><b>Shop</b></Link>
                </li>
                <li>
                  <Link to = "/Media" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><b>Media</b></Link>
                </li>
                <li>
                  <Link to = "/About" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"><b>About Us</b></Link>
                </li>                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}


