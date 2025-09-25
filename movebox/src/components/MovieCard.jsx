import React from "react";

export default function MovieCard({ movie, isInWatchlist, initialRemove }) {
  if (!movie) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <p className="text-red-400">Movie data not available</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md relative">
      <img
        src={movie.poster || "https://via.placeholder.com/300x450"}
        alt={movie.title || "No Title"}
        className="w-full h-60 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold">{movie.title || "Unknown"}</h2>
      <p className="text-sm text-gray-400">{movie.year || "N/A"}</p>

      {isInWatchlist && (
        <button
          onClick={initialRemove}
          className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs"
        >
          Remove
        </button>
      )}
    </div>
  );
}
