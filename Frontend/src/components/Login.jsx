import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
function Login() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("🚀 LOGIN FORM SUBMITTED!");
    console.log("Login form submitted with data:", data);
    console.log("Form validation errors:", errors);
    
    // Simple test first
    toast.success("Form submitted! Check console for details.");
    
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log("Sending login request to:", "https://bookstore-backend-o7xy.onrender.com/user/login");
    
    try {
      // Try with fetch first
      const response = await fetch("https://bookstore-backend-o7xy.onrender.com/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      
      console.log("Fetch response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Login response:", result);
      
      if (result) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(result.user));
        setAuthUser(result.user);
        document.getElementById("my_modal_3").close();
      }
      
    } catch (fetchError) {
      console.error("Fetch failed, trying axios:", fetchError);
      
      // Fallback to axios
      await axios
        .post("https://bookstore-backend-o7xy.onrender.com/user/login", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            toast.success("Logged in Successfully");
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            setAuthUser(res.data.user);
            document.getElementById("my_modal_3").close();
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
            setTimeout(() => {}, 2000);
          }
        });
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
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
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button 
                type="submit" 
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                onClick={() => console.log("🔘 LOGIN BUTTON CLICKED!")}
              >
                Login
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
