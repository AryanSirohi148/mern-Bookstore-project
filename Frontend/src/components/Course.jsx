import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    const getBook = async () => {
      try {
        setLoading(true);
        const url = searchQuery 
          ? `https://bookstore-backend-o7xy.onrender.com/book?search=${encodeURIComponent(searchQuery)}`
          : "https://bookstore-backend-o7xy.onrender.com/book";
        const res = await axios.get(url);
        console.log(res.data);
        // Handle the new API response structure
        setBook(res.data.books || res.data || []);
      } catch (error) {
        console.log(error);
        setError("Failed to load books");
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, [searchQuery]);
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Our Book Collection"}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {searchQuery 
                ? `Found ${book.length} book(s) matching your search.`
                : "Discover our carefully curated collection of books from classic literature to contemporary bestsellers. Find your next favorite read today."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105">
                  ← Back to Home
                </button>
              </Link>
              {searchQuery && (
                <Link to="/course">
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105">
                    View All Books
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">😞</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                {error}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Please try again later or contact support if the problem persists.
              </p>
            </div>
          )}

          {/* Books Grid */}
          {!loading && !error && book.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {book.map((item) => (
                <Cards key={item._id || item.id} item={item} />
              ))}
            </div>
          )}

          {/* No Books State */}
          {!loading && !error && book.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No books available
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Check back later for new arrivals!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
