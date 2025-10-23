import React from "react";
import { useCart } from "../context/CartProvider";
import toast from "react-hot-toast";

function Cards({ item }) {
  const { addToCart, isInCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.title} added to cart!`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    
    return stars;
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-80 bg-white shadow-xl hover:scale-105 duration-300 dark:bg-slate-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <figure className="relative">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-64 object-cover"
              onError={(e) => {
                // Try Amazon image with ISBN
                e.target.src = `https://images-na.ssl-images-amazon.com/images/P/${item.isbn?.replace(/[^0-9]/g, '') || '0000000000'}.01.L.jpg`;
                e.target.onError = () => {
                  // Try Open Library as second fallback
                  e.target.src = `https://covers.openlibrary.org/b/isbn/${item.isbn || '9780000000000'}-L.jpg`;
                  e.target.onError = () => {
                    // Final fallback to placeholder
                    e.target.src = "https://via.placeholder.com/300x400/4f46e5/ffffff?text=📚+Book+Cover";
                  };
                };
              }}
            />
            {item.isBestSeller && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Bestseller
              </div>
            )}
            {item.originalPrice && item.originalPrice > item.price && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Sale
              </div>
            )}
          </figure>
          <div className="card-body p-4">
            <div className="flex items-start justify-between mb-2">
              <h2 className="card-title text-lg font-bold line-clamp-2">
                {item.title}
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              by {item.author}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-3">
              {item.description}
            </p>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-2">
                {renderStars(item.rating)}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({item.reviewCount})
              </span>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-indigo-600">
                  {formatPrice(item.price)}
                </span>
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(item.originalPrice)}
                  </span>
                )}
              </div>
              <div className="badge badge-outline text-xs">
                {item.category}
              </div>
            </div>
            
            <div className="card-actions justify-between">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
              </div>
              <button 
                onClick={handleAddToCart}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition duration-200 ${
                  item.stock > 0 
                    ? isInCart(item._id || item.id)
                      ? 'bg-green-600 hover:bg-green-700 text-white transform hover:scale-105'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={item.stock === 0}
              >
                {item.stock > 0 
                  ? isInCart(item._id || item.id) 
                    ? '✓ In Cart' 
                    : 'Add to Cart'
                  : 'Out of Stock'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
