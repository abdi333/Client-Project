import {Link} from "react-router-dom"
export default function Nav() {
  return (
    <div>
      <div className=" mx-auto py-6 ">
        <nav className="border-gray-200 px-2 mb-10 pb-5 shadow-xl">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="#" className="flex">
              <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg>
              <span className="self-center text-lg font-semibold whitespace-nowrap">Good Sport Golf Club</span>
            </a>
            <div className="flex md:order-2">
              <div className="relative mr-3 md:mr-0 hidden md:block">
                <button className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">Donate Now</button>
              </div>              
            </div>

            <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link to = "/" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Home</Link>
                </li>
                <li>
                  <Link to = "/Join" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Join</Link>
                </li>
                <li>
                  <Link to = "/Shop" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Shop</Link>
                </li>
                <li>
                  <Link to = "/Media" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Media</Link>
                </li>
                <li>
                  <Link to = "/About" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About Us</Link>
                </li>
              </ul>             
            </div>
          </div>
        </nav>


      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </div>
  );
}


