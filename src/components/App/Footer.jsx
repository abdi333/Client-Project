export default function Footer() {
    return (
        <div className="">
            <footer className="bg-lightgreen pt-4" >
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-white">
                                Find us on any of our platforms, and connect with us.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">                                
                                <a href="https://facebook.com" target="_blank"><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-6 w-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" /></button></a>
                                <a href="https://twitter.com" target="_blank"><button className="bg-white text-lightBlue-400 shadow-lg font-normal h-6 w-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" /></button></a>
                                <a href="https://instagram.com" target="_blank"><button className="bg-white text-pink-400 shadow-lg font-normal h-6 w-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" /></button></a>
                                <a href="https://linkedin.com" target="_blank"><button className="bg-white text-blueGray-800 shadow-lg font-normal h-6 w-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" /></button></a>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-2">

                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-white text-sm font-semibold mb-2">Products</span>
                                    <ul className="list-unstyled text-white">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Golf Shop</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Donate</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Join</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Register Tournament</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-white text-sm font-semibold mb-2">Company</span>
                                    <ul className="list-unstyled text-white">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Media</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://columbus-good-sports-charity-golf-tournament.perfectgolfevent.com/">Annual Tournament</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-white text-sm font-semibold mb-2">Legal</span>
                                    <ul className="list-unstyled text-white">                                        
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://perfectgolfevent.com/privacy-policy/">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://perfectgolfevent.com/terms-and-conditions/">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-white font-semibold py-1">
                                Copyright © <span id="get-current-year">2022 </span><a href="https://www.creative-tim.com?ref=njs-profile" className="text-white hover:text-blueGray-800">Good Sport Golf Club</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}