import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <div className="max-w-screen-2xl container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About <span className="text-indigo-600">BookHaven</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your gateway to a world of knowledge, imagination, and endless stories. 
              We're passionate about connecting readers with their next favorite book.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At BookHaven, we believe that books have the power to transform lives. 
                Our mission is to make quality literature accessible to everyone, fostering 
                a community of passionate readers and lifelong learners.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We curate an extensive collection of books across all genres, from 
                timeless classics to contemporary bestsellers, ensuring there's 
                something special for every reader.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">10K+</div>
                  <div className="text-gray-600 dark:text-gray-300">Books Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
                  <div className="text-gray-600 dark:text-gray-300">Happy Readers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-300">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-300">Customer Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Quality First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We carefully curate our collection to ensure every book meets our 
                  high standards of quality and value.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Community Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We build a community of readers, authors, and book lovers who 
                  share their passion for literature.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We embrace technology to enhance your reading experience while 
                  preserving the timeless joy of books.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Alex Smith
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about literature and technology, Alex founded BookHaven 
                  to bridge the gap between traditional bookstores and modern convenience.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">MJ</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Maria Johnson
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">Head of Curation</p>
                <p className="text-gray-600 dark:text-gray-300">
                  With 15 years in publishing, Maria ensures our collection represents 
                  the best of contemporary and classic literature.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">DK</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  David Kim
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">Tech Lead</p>
                <p className="text-gray-600 dark:text-gray-300">
                  David leads our technical team, creating seamless experiences that 
                  make discovering and purchasing books effortless.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                BookHaven was born from a simple belief: that everyone deserves access 
                to great books. What started as a small online bookstore in 2020 has 
                grown into a comprehensive platform serving readers worldwide.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We've weathered the challenges of the digital age while staying true 
                to our core mission: fostering a love of reading and making literature 
                accessible to all. Today, we're proud to serve a global community of 
                book lovers, from casual readers to serious collectors.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join us on this journey as we continue to grow, evolve, and bring you 
                the very best in books and reading experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
