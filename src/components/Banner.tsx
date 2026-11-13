import hero from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">
                <div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 max-w-md">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                    <div className="mt-10 flex items-center gap-3">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-medium py-3 px-4 rounded-lg hover:opacity-90">
                            Explore Technologies
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-700 text-sm py-3 px-8 rounded-lg hover:bg-gray-50">
                            Learn More
                        </button>
                    </div>
                </div>
           <div className="flex justify-center">
                    <img src={hero} alt="Dev Stack" className="w-full max-w-md" />
                </div>
           
            </div>
        </section>
    );
};

export default Banner;