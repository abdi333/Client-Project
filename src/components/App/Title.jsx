import ImageSlider from "./ImageSlider"


const slides = [
    {
        url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1443706340763-4b60757a36ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1622819219010-7721328f050b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1542436833-75ef72a576e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxnb2xmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1606333830910-bbf0eb3b984e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGdvbGYlMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1602991174407-a015b35a7b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGdvbGYlMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    }]

const sliderStyle = {    
    height: "500px",
};



export default function Title() {


    return (
        <div className="mb-12 mt-10">
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
            <div>
                <div className="px-10">
                    <div className="flex justify-evenly">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center ">Outstading Golf Experience</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center"><b>For Good, For Fun</b></p>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">
                                <a href="#" className="inline-block rounded-lg bg-lightgreen px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lightgreen hover:bg-lightgreen hover:ring-lightgreen">
                                    Get started
                                    <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" width="300" className="rounded-xl" />
                    </div>

                    <div className=''>
                        <div className="m-20 flex flex-row justify-evenly">
                            <div className="w-52 rounded-xl">
                                <div className="h-48 flex items-center justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4086/4086231.png" className="h-20 w-20" />
                                </div>
                                <div className="p-2 border-gray-200 center">
                                    <div className="">
                                        <p className="text-black text-center font-medium"><b>Build a community</b></p>
                                    </div>
                                    <p className="text-gray-400 text-center text-sm my-1">Enjoy the best golfing experience in Central Ohio while building a great community.</p>
                                </div>
                            </div>
                            <div className="w-52 rounded-xl bg-lightgreen">
                                <div className="h-48 flex items-center justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1302/1302718.png" className="h-20 w-20" />
                                </div>
                                <div className="p-2 border-gray-200 center">
                                    <div className="">
                                        <p className="text-black text-center font-medium"><b>Elite Play</b></p>
                                    </div>
                                    <p className="text-gray-400 text-center text-sm my-1">Competitive yet fun atmosphere.</p>
                                </div>
                            </div>
                            <div className="w-52 rounded-xl">
                                <div className="h-48 flex items-center justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2967/2967188.png" className="h-20 w-20" />
                                </div>
                                <div className="p-2 border-gray-200 center">
                                    <div className="">
                                        <p className="text-black text-center font-medium"><b>Support Charity</b></p>
                                    </div>
                                    <p className="text-gray-400 text-center text-sm my-1">Play for fun, and be a force for good.</p>
                                </div>
                            </div>
                        </div>

                        <div style={sliderStyle} className="mb-20 bg-hintgreen bg-opacity-20">
                            <ImageSlider slides={slides} />
                        </div>
                        </div>

                    

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4FA730"></stop>
                                <stop offset="1" stopColor="#4FA730"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="mt-20 pb-6 text-center">
                    <h4 className="text-2xl text-black">Choose The Right Custom Golf Event Website</h4>
                    <p className="text-sm text-black mt-2">Pick custom or full feature website.</p>
                </div>

                <div className="flex flex-row justify-evenly pt-2 pb-2">
                    <div className="w-3/4 flex gap-8">
                        <div className="bg-white shadow-2xl rounded-lg py-4">
                            <p className="text-xl text-center font-bold text-lightgreen">Basic</p>
                            <p className="text-center py-8">
                                <span className="text-4xl font-bold text-gray-700">
                                    $100
                                </span>
                            </p>
                            <p className="text-center pb-4">Base Package</p>
                            <ul className="border-t border-lightgreen py-8 space-y-6">
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <h1 className="text-gray-600 capitalize">Email Technical Support</h1>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Accept Online Registrations</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Promote Event Details</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Accept Donations Online</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center mt-6">
                                <a href="#" className="bg-lightgreen hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Purchase</a>
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl rounded-lg py-4">
                            <p className="text-xl text-center font-bold text-lightgreen">Premium</p>
                            <p className="text-center py-8">
                                <span className="text-4xl font-bold text-gray-700">
                                    $250
                                </span>
                            </p>
                            <p className="text-center pb-4">Everything in Base plus</p>
                            <ul className="border-t border-lightgreen py-8 space-y-6">
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Free Domain Registration</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Feature Sponsor Logos</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Collect Payments Fast and Easy</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Access Online Marketing Tools</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center mt-6">
                                <a href="#" className="bg-lightgreen hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Purchase</a>
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl rounded-lg py-4">
                            <p className="text-xl text-center font-bold text-lightgreen">Pro</p>
                            <p className="text-center py-8">
                                <span className="text-4xl font-bold text-gray-700">
                                    $500
                                </span>
                            </p>
                            <p className="text-center pb-4">Everything in Premium plus</p>
                            <ul className="border-t border-lightgreen py-8 space-y-6">
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Hole in One Contest</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Custom QR Code</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Custom Social Media Images</span>
                                </li>
                                <li className="flex items-center space-x-2 px-8">
                                    <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="text-gray-600 capitalize">Social Media Guide</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center mt-6">
                                <a href="#" className="bg-lightgreen hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Purchase</a>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div>
                    <div className="py-20 flex flex-col">
                        {/* <!-- Section: Design Block --> */}
                        <div className="flex flex-wrap justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1627307887011-8a5029b6adcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt=""
                                className=" w-1/3 h-1/2 rounded-lg"
                            />
                            <div className="grow-0 shrink-0 ml-10 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                <h2 className="text-3xl font-bold mb-6">Contact us</h2>
                                <p className="text-black mb-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laudantium, modi accusantium ipsum corporis quia asperiores
                                    dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                                    autem omnis fugiat perspiciatis? Ad, veritatis.
                                </p>
                                <p className="text-black mb-2">New York, 94126, United States</p>
                                <p className="text-black mb-2">+ 01 234 567 89</p>
                                <p className="text-black mb-2">info@gmail.com</p>
                                <form>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput7"
                                            placeholder="Name"
                                        ></input>
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="email"
                                            className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput8"
                                            placeholder="Email address"
                                        ></input>
                                    </div>
                                    <div className="form-group mb-6">
                                        <textarea
                                            className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                                            id="exampleFormControlTextarea13"
                                            rows="3"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <div className="form-group form-check text-center mb-6">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-lightgreen checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                            id="exampleCheck87"
                                        ></input>
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="exampleCheck87"
                                        >
                                            Send me a copy of this message
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="
          w-full
          px-6
          py-2.5
          bg-lightgreen
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-white hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto  mt-20 md:mb-0 w-full md:w-6/12 px-3 lg:px-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mb-20">
                        <div className="px-6 text-gray-600">
                            <h2 className="mb-12 text-center text-2xl font-bold md:text-4xl">Testimonials:</h2>
                            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                                <div className=" rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-2">
                                    <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="120" width="220" loading="lazy" />
                                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                        <p className="text-black text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                                        <div>
                                            <h6 className="text-black text-lg font-semibold leading-none">John Doe</h6>
                                            <span className="text-xs text-black">Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" rounded-xl bg-lightgreen sm:flex sm:space-x-8 sm:p-2">
                                    <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                        <p className="text-white text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                                        <div>
                                            <h6 className="text-white text-lg font-semibold leading-none">John Doe</h6>
                                            <span className="text-xs text-white">Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" rounded-xl bg-lightgreen sm:flex sm:space-x-8 sm:p-2">
                                    <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="120" width="220" loading="lazy" />
                                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                        <p className="text-white text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                                        <div>
                                            <h6 className="text-white text-lg font-semibold leading-none">John Doe</h6>
                                            <span className="text-xs text-white">Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-2">
                                    <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                        <p className="text-black text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                                        <div>
                                            <h6 className="text-black text-lg font-semibold leading-none">John Doe</h6>
                                            <span className="text-xs text-black">Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

