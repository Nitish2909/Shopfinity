import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            ShopFinity
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-1/2">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button className="absolute right-1 top-1 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-8">

            <Link
              to="/orders"
              className="relative text-gray-600 hover:text-indigo-600 transition"
            >
              Orders
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-indigo-600 transition"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                2
              </span>
            </Link>

            {/* User */}
            <Link
              to="/login"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <User size={22} />
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 p-4">

            <Link
              to="/orders"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600"
            >
              Orders
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600"
            >
              Cart
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600"
            >
              Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;