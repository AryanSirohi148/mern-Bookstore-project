import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
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
        document.getElementById("my_modal_3").close();
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                required
              />
            </div>
            
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                required
              />
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button 
                type="submit" 
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 disabled:opacity-50"
                disabled={isLoading}
                onClick={() => console.log("🔘 LOGIN BUTTON CLICKED!")}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
