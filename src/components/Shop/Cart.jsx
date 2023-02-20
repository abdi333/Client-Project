

export default function Cart() {
    return (
        <div>
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

            <div className="font-bold h-full w-1/2 mx-12 my-12">
                <div className="grid grid-cols-2">
                <div className="w-1/2 my-6 border-2 rounded-xl p-6 border-lightgreen">
                    <div className="">
                        <img className="h-24 w-24"
                            src="https://dks.scene7.com/is/image/GolfGalaxy/21TFLMTPFLT21XLMRSET_Red_Black?wid=2000&fmt=pjpeg" />
                    </div>
                    <div className="pt-4">
                        <h1>Golf Clubs</h1>
                        <h2>$299.99</h2>
                    </div>
                </div>
                <div className="w-1/2 my-6 border-2 rounded-xl p-6 border-lightgreen">
                    <div className="">
                        <img className="h-24 w-24"
                            src="https://dks.scene7.com/is/image/GolfGalaxy/21CWYU2022CHRMSFTGBLE?wid=2000&fmt=pjpeg" />
                    </div>
                    <div className="pt-4">
                        <h1>Golf Balls</h1>
                        <h2>$59.99</h2>
                    </div>
                </div>
                <div className="w-1/2 my-6 border-2 rounded-xl p-6 border-lightgreen">
                    <div className="">
                        <img className="h-24 w-24"
                            src="https://dks.scene7.com/is/image/GolfGalaxy/SS13FJPURETOUCH_White-1?wid=2000&fmt=pjpeg" />
                    </div>
                    <div className="pt-4">
                        <h1>Gloves</h1>
                        <h2>$30</h2>
                    </div>
                </div>
                <div className="w-1/2 my-6 border-2 rounded-xl p-6 border-lightgreen">
                    <div className="">
                        <img className="h-24 w-24"
                            src="https://dks.scene7.com/is/image/GolfGalaxy/314WHTPTS135TEES-1?wid=2000&fmt=pjpeg" />
                    </div>
                    <div className="pt-4">
                        <h1>Golf Tee's</h1>
                        <h2>$14.99</h2>
                    </div>
                </div>
                </div>

                <div className="my-16">
                    <div className="flex justify-between py-4">
                        <h1>Subtotal</h1>
                        <h1>$374.97</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>Shipping</h1>
                        <h1>$50.00</h1>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div>
                        <h1>Total</h1>
                    </div>
                    <div>
                        <h1>$424.97</h1>
                    </div>
                </div>
            </div>
            <div className="mx-12 my-12 bg-lightgreen text-white h-8 w-1/6 flex justify-center rounded">
                <button>Place order</button>
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