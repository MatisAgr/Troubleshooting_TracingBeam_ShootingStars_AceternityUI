"use client";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
    ];

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg px-6 py-3">
                <div className="flex items-center space-x-6">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">T</span>
                        </div>
                    </Link>

                    <div className="flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;