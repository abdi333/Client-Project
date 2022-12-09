import React, { useState, useRef, useEffect } from "react";
import showPwdImg from './Pictures/show-password.png';
import hidePwdImg from './Pictures/hide-password.png';


export default function JoinLeague() {
    const [first, setFirst] = useState("");
    const firstEl = useRef();

    const [last, setLast] = useState("");
    const lastEl = useRef();

    const [phone, setPhone] = useState("");
    const phoneEl = useRef();

    const [email, setEmail] = useState("");
    const emailEl = useRef();

    const [password, setPassword] = useState("");
    const passwordEl = useRef();
    
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [valid, setValid] = useState(false);

    useEffect (() => {
        if (password.length < 8) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [ password ]);

    return (
        <div className="p-8 lg:w-1/2 mx-auto">
            <div className="bg-gray-100 rounded-t-lg p-8">
                <p className="text-center text-md">Sign up with</p>
                <div>
                    <div className="flex items-center justify-center space-x-5 mt-3">
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" className="w-6 h-6 mr-3" viewBox="0 0 48 48"/>
                            Google
                        </button>
                         <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <img src="https://cdn-icons-png.flaticon.com/512/2504/2504884.png" viewBox="0 0 16 16" className="w-6 h-6 mr-3"/>
                            Apple
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <p className="text-center text-md">Or sign up with credentials</p>
                <form className="mt-6">
                    <div className="relative">
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
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Email" ref={emailEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/7887/7887710.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Phone Number" ref={phoneEl} />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                             type={isRevealPwd ? "text" : "password"}  placeholder="Password" value={pwd}  onChange={(e) => setPwd(e.target.value)} />
                        <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25215.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                            <img className="w-1/12 ml-48"
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? showPwdImg : hidePwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)} />
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text" placeholder="Confirm Password" ref={passwordEl} value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25215.png" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor" />
                        </div>
                    </div>
                    <p className="mt-4 italic text-black font-light text-sm">Password should be greater than 8 characters</p>
                    <p className="mt-4 italic text-black font-light text-sm">Password strength: <span style={{ color: valid ? 'red' : 'green' }}>{valid ? 'Weak' : 'Strong'}</span></p>

                    <div className="mt-4 flex items-center text-black"> <input type="checkbox" id="remember" name="remember" className="mr-2" />
                        <label className="text-sm" />I agree with the <a className="text-indigo-400 hover:text-indigo-500" href="#">Privacy Policy</a>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                        <button className=" border text-black py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            onClick={function () { setFirst(firstEl.current.value); setLast(lastEl.current.value); setEmail(emailEl.current.value); setPhone(phoneEl.current.value); setPwd(passwordEl.current.value) }}>Sign Up</button>
                    </div>
                </form>
            </div>
            <div>
                <h4 className="text-black">                
                    First Name : {first} <br /><br />
                    Last Name : {last} <br /><br />
                    Phone Number : {phone} <br /><br />
                    Email Adress : {email} <br /><br />
                    Password : {password}
                </h4>
            </div>
        </div>

    )
}


