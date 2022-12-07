export default function Testimonials() {
    return (

        <div className="py-40">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                {/* <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">Testimonials:</h2> */}
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">


                    <div className="border rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-2">
                        <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="120" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-black text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-black text-lg font-semibold leading-none">John Doe</h6>
                                <span className="text-xs text-black">Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-2">
                        <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-white text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-white text-lg font-semibold leading-none">John Doe</h6>
                                <span className="text-xs text-white">Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-nonerounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-2">
                        <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="120" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-black text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-black text-lg font-semibold leading-none">John Doe</h6>
                                <span className="text-xs text-black">Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray rounded-xl bg-blue sm:flex sm:space-x-8 sm:p-2">
                        <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-white text-md"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-white text-lg font-semibold leading-none">John Doe</h6>
                                <span className="text-xs text-white">Product Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}