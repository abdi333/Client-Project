import React, { useState, useRef, useEffect } from "react";
import showPwdImg from '../../pictures/show-password.png';
import hidePwdImg from '../../pictures/hide-password.png';

export default function Login() {
    const [email, setEmail] = useState("");
    const emailEl = useRef();

    const [key, setKey] = useState("");
    const keyEl = useRef();

    const [valid, setValid] = useState(false);
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    

    useEffect(() => {
        if (key.length < 8) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [key]);
    return (
        <div className=" mx-auto my-12 p-12 lg:w-1/2">
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

            <div className="bg-white rounded-t-xl p-8 shadow-xl">
                <p className="text-center text-md">Sign in with</p>
                <div>
                    <div className="flex items-center justify-center space-x-5 mt-3">
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" className="w-6 h-6 mr-3" viewBox="0 0 48 48" />
                            Google
                        </button>
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <img src="https://cdn-icons-png.flaticon.com/512/2504/2504884.png" viewBox="0 0 16 16" className="w-6 h-6 mr-3" />
                            Apple
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-b-lg p-8 lg:px-24 shadow-xl">
                <p className="text-center text-sm text-gray-500 font-light">
                    Or sign in with credentials
                </p>
                <form className="mt-6">
                    <div className="relative">
                        <input className="appearance-none border pl-12 border-grey shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Email" ref={emailEl}/>
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/7887/7887710.png" className="h-7 w-7 ml-3 p-1" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-grey shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            type={isRevealPwd ? "text" : "password"} placeholder="Password" ref={keyEl} onChange={(e) => setKey(e.target.value)} />
                        <div className=" ">
                            <img src="https://cdn-icons-png.flaticon.com/512/345/345575.png" className="absolute inset-y-0 left-0 w-5 ml-3 pt-3"/>
                            <img className="w-6 pt-3 mr-3 absolute inset-y-0 right-0"
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? showPwdImg : hidePwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)} />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center flex-col mt-8 font-bold">
                        <a href="" className="text-white py-2 px-4 rounded bg-lightgreen shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        onClick={function () {
                                setEmail(emailEl.current.value); setKey(keyEl.current.value);
                                emailEl.current.value = ""; keyEl.current.value = "";
                            }} 
                        >Log in</a>
                        <p>or</p>
                        <a href="/SignUp" className="text-white py-2 px-4 rounded bg-lightgreen shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >Sign Up</a>
                    </div>
                </form>

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

            </div>
            {/* <div>
                <h4 className="text-black">                    
                    Email Adress : {email} <br /><br />
                    Password : {key}
                </h4>
            </div> */}
        </div>

    )
}