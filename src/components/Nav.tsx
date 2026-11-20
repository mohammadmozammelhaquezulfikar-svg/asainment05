import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                <img src={logo} alt="Logo" className="h-10" />

                <ul className="flex items-center gap-8 text-gray-700">
                    <li><a href="#" className="text-pink-600 font-medium">Home</a></li>
                    <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
                    <li><a href="#" className="hover:text-pink-600">Projects</a></li>
                    <li><a href="#" className="hover:text-pink-600">About</a></li>
                    <li><a href="#" className="hover:text-pink-600">Contact</a></li>
                </ul>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-700 hover:text-pink-600 whitespace-nowrap">Sign In</a>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full whitespace-nowrap">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav