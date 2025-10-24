import React, { useState } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import LoginForm from "./components/LoginForm";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

// Protected Route Component
function ProtectedRoute({ children }) {
  const [authUser] = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (!authUser) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Please Login to Access Books
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You need to be logged in to view our book collection.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-200"
          >
            Login Now
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
        {showLoginModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Login</h3>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <LoginForm onClose={() => setShowLoginModal(false)} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return children;
}

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("🔍 App component - authUser:", authUser);
  console.log("🔍 App component - authUser type:", typeof authUser);
  console.log("🔍 App component - authUser is truthy:", !!authUser);
  
  return (
    <>
      <CartProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/course"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
