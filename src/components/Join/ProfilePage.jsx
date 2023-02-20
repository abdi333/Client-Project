import ProfilePic from "../../pictures/profile.png"

export default function ProfilePage() {
    return (
        <div className="flex justify-center py-16">

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

            <div className="p-12 bg-white shadow w-1/2 rounded-xl">
                <div className="flex justify-between">
                    <div className="grid grid-cols-4">
                        <div className="rounded-full shadow-2xl  inset-x-0 top-0 -mt-4">
                            <img src={ProfilePic} alt="ProfilePic" />
                        </div>
                    </div>
                    <button
                        className="h-24 text-white py-2 px-4 rounded bg-lightgreen shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
                        Edit Profile
                    </button>
                </div>
                <div className="mt-20 text-center border-b border-blue-400 pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">John Doe, <span className="font-light text-gray-500">30</span></h1>
                    <p className="font-light text-gray-600 mt-3">Columbus, OH</p>
                    <p className="mt-8 text-gray-500">UX Designer - Color Coded Labs</p>
                    <p className="mt-2 text-gray-500">University of Computer Science</p>
                </div>
                <div className="mt-12 flex flex-col justify-center">
                    <p>Name: <input className="mt-2 w-36 rounded border border-2 border-black" placeholder="Name"></input></p>

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
        </div>
    )
}