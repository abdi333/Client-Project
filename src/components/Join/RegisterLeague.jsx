import React, { useState, useRef, useEffect } from "react";
import Logo from '../Join/Pictures/circleface.png';

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
        <div>
            <div className="bg-lightgrey mb-12 rounded-lg py-10 px-28 w-1/2 mx-auto">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4FA730"></stop>
                                <stop offset="1" stopColor="#4FA730"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex justify-center pb-12">
                    <img className=" h-44 w-44" src={Logo} />
                </div>
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
                            className="text-white py-2 px-4 uppercase rounded bg-lightgreen hover:bg-lightgreen shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Register</button></div>
                </form>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4FA730"></stop>
                            <stop offset="1" stopColor="#4FA730"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div>
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
        </div>
    )
}