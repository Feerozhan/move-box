import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const [list, setList] = useState([
    { 
      id: 1, 
      title: "Inception", 
      year: 2010, 
      poster: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 8.8,
      genre: "Sci-Fi"
    },
    { 
      id: 2, 
      title: "Interstellar", 
      year: 2014, 
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 8.6,
      genre: "Sci-Fi"
    },
  ]);

  const removeFromList = (id) => {
    setList(list.filter((movie) => movie.id !== id));
  };

  const clearAll = () => {
    setList([]);
  };

  if (list.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Your Watchlist is Empty</h2>
          <p className="text-gray-400 mb-6">Start adding movies and shows to your watchlist to keep track of what you want to watch.</p>
          <button 
            onClick={() => setList([
              { 
                id: 1, 
                title: "Inception", 
                year: 2010, 
                poster: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                rating: 8.8,
                genre: "Sci-Fi"
              },
              { 
                id: 2, 
                title: "Interstellar", 
                year: 2014, 
                poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                rating: 8.6,
                genre: "Sci-Fi"
              }
            ])}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-red-700 transition-all duration-300"
          >
            Add Sample Movies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">My Watchlist</h1>
            <p className="text-gray-400">{list.length} {list.length === 1 ? 'item' : 'items'} in your list</p>
          </div>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
            Clear All
          </button>
        </div>

        {/* Watchlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {list.map((movie) => (
            <div key={movie.id} className="group bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 relative">
              <div className="relative overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                  ⭐ {movie.rating}
                </div>
                <button
                  onClick={() => removeFromList(movie.id)}
                  className="absolute top-3 left-3 bg-red-600 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Remove from watchlist"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-white mb-1 line-clamp-1">{movie.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">{movie.year}</span>
                  <span className="text-sm text-purple-400">{movie.genre}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors duration-300">
                    Watch Now
                  </button>
                  <button 
                    onClick={() => removeFromList(movie.id)}
                    className="px-3 bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                    aria-label="Remove"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Movies in your watchlist are saved locally in your browser</p>
        </div>
      </div>
    </div>
  );
}