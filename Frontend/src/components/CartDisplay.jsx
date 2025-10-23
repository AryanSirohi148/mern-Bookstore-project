import React, { useState } from "react";
import { useCart } from "../context/CartProvider";
import toast from "react-hot-toast";

function CartDisplay() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    toast.success(`Order successful! Total: ${formatPrice(getCartTotal())}`, {
      duration: 5000,
      style: {
        background: '#10B981',
        color: '#fff',
        fontSize: '16px',
        padding: '16px',
      },
    });
    
    // Clear cart after successful checkout
    clearCart();
    setIsCheckingOut(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Add some books to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Shopping Cart ({cartItems.length} items)
        </h2>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item._id} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-20 object-cover rounded"
                onError={(e) => {
                  // Try Amazon image with ISBN
                  e.target.src = `https://images-na.ssl-images-amazon.com/images/P/${item.isbn?.replace(/[^0-9]/g, '') || '0000000000'}.01.M.jpg`;
                  e.target.onError = () => {
                    // Try Open Library as second fallback
                    e.target.src = `https://covers.openlibrary.org/b/isbn/${item.isbn || '9780000000000'}-M.jpg`;
                    e.target.onError = () => {
                      // Final fallback to placeholder
                      e.target.src = "https://via.placeholder.com/64x80/4f46e5/ffffff?text=📚";
                    };
                  };
                }}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">
                  by {item.author}
                </p>
                <p className="text-indigo-600 font-semibold text-sm">
                  {formatPrice(item.price)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Remove from cart"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span className="text-gray-800 dark:text-white">Total:</span>
          <span className="text-indigo-600">{formatPrice(getCartTotal())}</span>
        </div>
        <button 
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className={`w-full mt-4 font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 ${
            isCheckingOut 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white`}
        >
          {isCheckingOut ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            'Proceed to Checkout'
          )}
        </button>
      </div>
    </div>
  );
}

export default CartDisplay;
