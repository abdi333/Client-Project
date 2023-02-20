import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="">
            <footer className="bg-lightgreen pt-4" >
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4 pt-6">
                            <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-white">
                                Find us on any of our platforms, and connect with us.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <a href="https://facebook.com" target="_blank"><button className="bg-white h-8 w-8 rounded-full mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/665/665209.png" /></button></a>
                                <a href="https://twitter.com" target="_blank"><button className="bg-white h-8 w-8 rounded-full mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/665/665228.png" /></button></a>
                                <a href="https://instagram.com" target="_blank"><button className="bg-white h-8 w-8 rounded-full mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/356/356077.png" /></button></a>
                                <a href="https://linkedin.com" target="_blank"><button className="bg-white h-8 w-8 rounded-full mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4628/4628658.png" /></button></a>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-2">

                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-white text-md font-semibold mb-2">Products</span>
                                    <ul className="text-white">
                                        <li>
                                            <Link to="/Shop" className="text-sm"><b>Golf Shop</b></Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-sm"><b>Donate</b></Link>
                                        </li>
                                        <li>
                                            <Link to="/Join" className="text-sm"><b>Join</b></Link>
                                        </li>
                                        <li>
                                            <Link to="/CreateLeague" className="text-sm"><b>Create League</b></Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-white text-md font-semibold mb-2">Company</span>
                                    <ul className="list-unstyled text-white">
                                        <li>
                                            <Link to="/About" className="text-sm"><b>About Us</b></Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-sm"><b>Media</b></Link>
                                        </li>
                                        <li>
                                            <a className="text-sm font-bold" href="https://columbus-good-sports-charity-golf-tournament.perfectgolfevent.com/">Annual Tournament</a>
                                        </li>
                                        <li>
                                            <Link to="/Contact" className="text-sm"><b>Contact Us</b></Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-white text-md font-semibold mb-2">Legal</span>
                                    <ul className="list-unstyled text-white">
                                        <li>
                                            <a className="text-sm font-bold" href="https://perfectgolfevent.com/privacy-policy/">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-sm font-bold" href="https://perfectgolfevent.com/terms-and-conditions/">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-white font-semibold py-1">
                                 <a href="/" className="text-white">Copyright © 2023 Good Sport Golf Club</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}