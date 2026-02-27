import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  
 // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //State to handle loading while API call is in progress
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData, // keeps previous values
      [e.target.name]: e.target.value,  // updates specific field
    });
  };

  //  Validate form before sending to backend
  const validate = () => {
    if(!formData.name || !formData.email || !formData.password){
      return "All Fields are Required"
    }
    if (!formData.name.trim()) {
      return "Name is required";
    }

    if (!formData.email.includes("@")) {
      return "Enter a valid email";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validate();

    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.post(
        "/auth/register",
        formData
      );

      //  Success Toast
      toast.success("Account Created Successfully");

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Redirect after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup Failed "
      );
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-green-500 px-4">

    {/* Glass Card */}
    <div className="w-full max-w-md p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

      <h2 className="text-3xl font-bold text-center text-white mb-2">
        Create Account 
      </h2>
      <p className="text-center text-white/80 text-sm mb-6">
        Join us and start your shopping
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 transition duration-300"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 transition duration-300"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 transition duration-300"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold transition duration-300 ${
            loading
              ? "bg-white/40 text-white cursor-not-allowed"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

      </form>

      <p className="text-center text-sm text-white/80 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold underline hover:text-white"
        >
          Login
        </Link>
      </p>
    </div>
  </div>
);
};

export default Signup;
