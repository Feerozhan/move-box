import React, { useState } from "react";
import { movies } from "../data/sampleMovies";

const tabs = ["Trending", "Popular", "Top Rated", "Upcoming"];

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("Trending");
  const [playingId, setPlayingId] = useState(null);

  const filteredMovies = movies
    .filter((movie) => movie.category === activeTab)
    .slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setPlayingId(null);
            }}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition duration-300 cursor-pointer hover:scale-105"
            onClick={() => setPlayingId(movie.id)}
          >
            {playingId === movie.id && movie.video ? (
              // Agar video YouTube link ya embed link hai
              <iframe
               className="w-full h-64 object-cover rounded-t-xl"
                src={`${movie.video.includes("youtube.com/embed") 
                      ? movie.video 
                      : `https://www.youtube.com/embed/${movie.videoId}?autoplay=1&mute=1`
                   }`}
                title={movie.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-xl"
                
              />
            )}

            <div className="p-4 text-white">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.year}</p>
              <p className="text-sm mt-1">⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
