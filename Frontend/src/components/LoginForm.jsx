import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function LoginForm({ onClose }) {
  const [authUser, setAuthUser] = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 LOGIN FORM SUBMITTED!");
    console.log("Form data:", formData);
    
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    toast.success("Form submitted! Attempting login...");
    
    try {
      console.log("Sending login request to:", "https://bookstore-backend-o7xy.onrender.com/user/login");
      
      const response = await axios.post("https://bookstore-backend-o7xy.onrender.com/user/login", {
        email: formData.email,
        password: formData.password
      });
      
      console.log("Login response:", response.data);
      
      if (response.data && response.data.user) {
        console.log("✅ Login successful! User data:", response.data.user);
        toast.success("Logged in Successfully!");
        
        // Store user data in localStorage
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        console.log("✅ User stored in localStorage");
        
        // Update auth state
        setAuthUser(response.data.user);
        console.log("✅ Auth state updated");
        
        // Close modal
        if (onClose) {
          onClose();
        }
        console.log("✅ Modal closed");
        
        // Reset form
        setFormData({ email: "", password: "" });
        console.log("✅ Form reset");
        
        // Force page reload to ensure state update
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
      
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        toast.error("Error: " + (error.response.data.message || "Login failed"));
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
          required
        />
      </div>
      
      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
          required
        />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
