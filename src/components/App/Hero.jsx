export default function Hero() {
    return (
        <div className="opacity-90" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            <div className="py-36">
                <h1 className="text-6xl text-white font-bold tracking-tight sm:text-center ">Good Sport Golf <br/> A More Enjoyable Golf Experience</h1>
                <p className="mt-24 text-4xl text-white sm:text-center"><b>Fun. Competitive. Organized.</b></p>
                <div className="pt-48 flex gap-x-24 sm:justify-center">
                    <a href="/RegisterCards" className="inline-block rounded-lg bg-lightgreen px-8 py-1.5 text-md font-semibold leading-7 text-white shadow-sm ring-1 ring-lightgreen hover:bg-lightgreen hover:ring-lightgreen">
                        Get started                        
                    </a>
                    <a href="/" className="inline-block rounded-lg bg-lightgreen px-4 py-1.5 text-md font-semibold leading-7 text-white shadow-sm ring-1 ring-lightgreen hover:bg-lightgreen hover:ring-lightgreen">
                        Make a Donation                        
                    </a>                    
                </div>
            </div>                        
        </div>
    )
}