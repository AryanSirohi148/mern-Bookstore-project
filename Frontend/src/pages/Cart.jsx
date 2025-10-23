import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDisplay from "../components/CartDisplay";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl container mx-auto px-4 py-20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Shopping <span className="text-indigo-600">Cart</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Review your selected books and proceed to checkout when you're ready.
            </p>
          </div>

          {/* Cart Content */}
          <div className="max-w-4xl mx-auto">
            <CartDisplay />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
