import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axiosInstance.post(
        "/products",
        formData
      );

      toast.success("Product added successfully 🎉");

      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
    {
        Object.keys(formData).map((key)=>{
       <input 
       key={key}
       name={key}
       value={form[key]}
       onChange={handleChange}
       placeholder={key}
       className="w-full p-2 border border-gray-300 rounded" />
        })
    }

    <button type="submit" className="w-full bg-green-500 text-white p-2 hover:bg-green-600">
        Add Product
    </button>
      </form>
    </div>
  );
};

export default AddProducts;
