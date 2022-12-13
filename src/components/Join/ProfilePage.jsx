import ProfilePic from "./Pictures/profile.png"

export default function ProfilePage() {
    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow w-1/2 rounded-lg">
                <div className="grid  md:grid-cols-3">                    
                    <div className="relative">
                        <div className=" bg-indigo-100  rounded-full shadow-2xl  inset-x-0 top-0 -mt-4  text-indigo-500">
                        <img src={ProfilePic} alt="ProfilePic" />
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Edit Profile
                        </button>                        
                    </div>
                </div>
                <div className="mt-20 text-center border-b border-blue-400 pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">John Doe, <span className="font-light text-gray-500">30</span></h1>
                    <p className="font-light text-gray-600 mt-3">Columbus, OH</p>
                    <p className="mt-8 text-gray-500">UX Designer - Color Coded Labs</p>
                    <p className="mt-2 text-gray-500">University of Computer Science</p>
                </div>
                <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16"></p>
                    <button className="text-indigo-500 py-2 px-4  font-medium mt-4">Show more</button>
                </div>
            </div>
        </div>
    )
}