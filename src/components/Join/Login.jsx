import React, { useState, useRef, useEffect } from "react";
import showPwdImg from './Pictures/show-password.png';
import hidePwdImg from './Pictures/hide-password.png';

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
        <div className="p-8 lg:w-1/2 mx-auto">
            <div className="bg-white rounded-t-lg p-8">
                <p className="text-center text-md">Sign in with</p>
                <div>
                    <div className="flex items-center justify-center space-x-5 mt-3">
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" className="w-6 h-6 mr-3" viewBox="0 0 48 48" />
                            Google
                        </button>
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <img src="https://cdn-icons-png.flaticon.com/512/2504/2504884.png" viewBox="0 0 16 16" className="w-6 h-6 mr-3" />
                            Apple
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <p className="text-center text-sm text-gray-500 font-light">
                    Or sign in with credentials
                </p>
                <form className="mt-6">
                    <div className="relative">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Email" ref={emailEl}/>
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/7887/7887710.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            type={isRevealPwd ? "text" : "password"} placeholder="Password" ref={keyEl} onChange={(e) => setKey(e.target.value)} />
                        <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25215.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                            <img className="w-1/12 ml-48"
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? showPwdImg : hidePwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)} />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-gray-500">
                        <input type="checkbox" id="remember" name="remember" className="mr-3" />
                        <label for="remember">Remember me</label>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <button className="text-white py-2 px-4 uppercase rounded bg-lightgreen hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        onClick={function () {
                                setEmail(emailEl.current.value); setKey(keyEl.current.value);
                                emailEl.current.value = ""; keyEl.current.value = "";
                            }} 
                        >Log in </button>
                    </div>
                </form>
            </div>
            {/* <div>
                <h4 className="text-white">                    
                    Email Adress : {email} <br /><br />
                    Password : {key}
                </h4>
            </div> */}
        </div>

    )
}