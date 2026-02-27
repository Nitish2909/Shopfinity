import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Amazing Products
        </h1>
        <p className="text-lg mb-6">
          Shop the latest trends at the best prices
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Electronics", "Fashion", "Shoes", "Accessories"].map(
            (category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
              >
                <h3 className="font-semibold text-gray-700">
                  {category}
                </h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-700">
                  Product {item}
                </h3>
                <p className="text-indigo-600 font-bold mt-2">
                  ₹999
                </p>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;