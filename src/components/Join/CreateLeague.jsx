import React, { useState, useRef, useEffect } from "react";

export default function CreateLeague() {
    const [option, setOption] = useState("");
    const optionEl = useRef();

    const [org, setOrg] = useState("");
    const orgEl = useRef();

    const [first, setFirst] = useState("");
    const firstEl = useRef();

    const [last, setLast] = useState("");
    const lastEl = useRef();

    const [phone, setPhone] = useState("");
    const phoneEl = useRef();

    const [email, setEmail] = useState("");
    const emailEl = useRef();

    return (
        <div className="min-h-full  pb-12">
            <div className="w-full pb-24 text-center">
                <h4 className="text-2xl text-black">Choose The Right Custom Golf Event Website</h4>
                <p className="text-sm text-black mt-2">Pick custom or full feature website.</p>
            </div>
            <div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
                <div className="w-auto grid xl:grid-cols-3 gap-8">
                    <div className="bg-white shadow-2xl rounded-lg py-4">
                        <p className="text-xl text-center font-bold text-blue">Basic</p>
                        <p className="text-center py-8">
                            <span className="text-4xl font-bold text-gray-700">
                                $100
                            </span>
                        </p>
                        <p className="text-center">Base Package</p>
                        <ul className="border-t border-gray-300 py-8 space-y-6">
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Email Technical Support</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Accept Online Registrations</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Promote Event Details</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Player and Sponsor Packages</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Accept Donations Online</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Up to the Minute Reports</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Ability to Track Revenue</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Links Social Media Platforms</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-2xl rounded-lg py-4">
                        <p className="text-xl text-center font-bold text-blue">Premium</p>
                        <p className="text-center py-8">
                            <span className="text-4xl font-bold text-gray-700">
                                $250
                            </span>
                        </p>
                        <p className="text-center">Everything in Base plus</p>
                        <ul className="border-t border-gray-300 py-8 space-y-6">
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Free Domain Registration</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Feature Sponsor Logos</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Collect Payments Fast and Easy</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Access Online Marketing Tools</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Access to Perfect Photo Gallery</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Process Credit Cards</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Custom Background Image</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Telephone and Email Support</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-white shadow-2xl rounded-lg py-4">
                        <p className="text-xl text-center font-bold text-blue">Pro</p>
                        <p className="text-center py-8">
                            <span className="text-4xl font-bold text-gray-700">
                                $500
                            </span>
                        </p>
                        <p className="text-center">Everything in Premium plus</p>
                        <ul className="border-t border-gray-300 py-8 space-y-6">
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Hole in One Contest</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Custom QR Code</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Custom Social Media Images</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Social Media Guide</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Unlimited Users</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">User Management</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Reports</span>
                            </li>
                            <li className="flex items-center space-x-2 px-8">
                                <span className="bg-blue rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


            <div className="bg-gray-100 rounded-lg mt-10 py-12 px-4 lg:w-1/2 mx-auto">
                <form className="">
                    <div className="relative">
                        <select className="font-bold appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" ref={optionEl}>
                            <option placeholder="Select">Select Option</option>
                            <option>Basic</option>
                            <option>Premium</option>
                            <option>Pro</option>
                        </select>
                        {/* <div className="w-10 absolute right-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/1665/1665586.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"/>
                        </div> */}
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Organization" ref={orgEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/585/585840.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="First Name" ref={firstEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Last Name" ref={lastEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Phone Number" ref={phoneEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Email" ref={emailEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/7887/7887710.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-black"> <input type="checkbox" id="remember" name="remember" className="mr-2" />
                        <label className="text-sm" />I agree with the<span>&nbsp;</span><a className="text-blue hover:text-indigo-600" href="#">Privacy Policy</a>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <button onClick={function () {
                            setOption(optionEl.current.value); setOrg(orgEl.current.value); setFirst(firstEl.current.value); setLast(lastEl.current.value); setPhone(phoneEl.current.value); setEmail(emailEl.current.value);
                            optionEl.current.value = "Select Option"; orgEl.current.value = ""; firstEl.current.value = ""; lastEl.current.value = ""; phoneEl.current.value = ""; emailEl.current.value = "";
                        }}
                            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Register</button></div>
                </form>
            </div>
            {/* <div>
                <h4 className="text-black mx-auto pt-10">
                    Option: {option} <br /><br />
                    Organization: {org} <br /><br />
                    First Name: {first} <br /><br />
                    Last Name: {last} <br /><br />
                    Phone Number: {phone} <br /><br />
                    Email Adress: {email}
                </h4>
            </div> */}

        </div>

    )
}