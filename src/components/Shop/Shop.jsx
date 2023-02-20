import { useState } from 'react';

export default function Shop() {
    const [count, setCount] = useState(0);
    
    const addCount = () => {
        setCount(count + 1);
      };

      const removeCount = () => {
        if(count === 0){
          return;  
        }
        setCount(count - 1);
      };

    return (
        <div>
        <div className="py-12 px-6 grid grid-cols-4">
            <div className=" w-44 bg-white shadow-xl rounded ">
                <div className="h-28 py-4 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/21TFLMTPFLT21XLMRSET_Red_Black?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Golf Clubs</h1>
                    <p className="text-center ">$299.99</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>

            <div className="w-44 bg-white shadow-xl rounded">
                <div className="h-28 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/21CWYU2022CHRMSFTGBLE?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Golf Ball</h1>
                    <p className="text-center ">$59.99</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>

            <div className="w-44 bg-white shadow-xl rounded">
                <div className="h-28 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/SS13FJPURETOUCH_White-1?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Gloves</h1>
                    <p className="text-center ">$30</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>

            <div className="w-44 bg-white shadow-xl rounded">
                <div className="h-28 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/314WHTPTS135TEES-1?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Golf Tee's</h1>
                    <p className="text-center ">$14.99</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>
        </div>
        <div className="py-12 px-6 grid grid-cols-4">
            <div className=" w-44 bg-white shadow-xl rounded ">
                <div className="h-28 py-4 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/21TFLMTPFLT21XLMRSET_Red_Black?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Golf Clubs</h1>
                    <p className="text-center ">$299.99</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>

            <div className="w-44 bg-white shadow-xl rounded">
                <div className="h-28 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/21CWYU2022CHRMSFTGBLE?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Golf Ball</h1>
                    <p className="text-center ">$59.99</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>

            <div className="w-44 bg-white shadow-xl rounded">
                <div className="h-28 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/SS13FJPURETOUCH_White-1?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Gloves</h1>
                    <p className="text-center ">$30</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>

            <div className="w-44 bg-white shadow-xl rounded">
                <div className="h-28 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://dks.scene7.com/is/image/GolfGalaxy/314WHTPTS135TEES-1?wid=2000&fmt=pjpeg")' }}>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center">
                    <h1 className="pt-6 text-center ">Golf Tee's</h1>
                    <p className="text-center ">$14.99</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <button onClick={removeCount} className="border m-2 px-2">-</button>
                    <p className="border m-2 px-2">{count}</p>
                    <button onClick={addCount} className="border m-2 px-2">+</button>
                </div>
            </div>
        </div>  
        </div>
    )
}