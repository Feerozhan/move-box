import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [isLoading, setIsLoading] = useState(true);

  // Sample movie data with more details
  const movieData = [
    { 
      id: 1, 
      title: "Inception", 
      year: 2010, 
      poster: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.8, 
      genre: ["Sci-Fi", "Action"],
      description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a C.E.O."
    },
    { 
      id: 2, 
      title: "The Dark Knight", 
      year: 2008, 
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 9.0, 
      genre: ["Action", "Crime", "Drama"],
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    { 
      id: 3, 
      title: "Interstellar", 
      year: 2014, 
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.6, 
      genre: ["Adventure", "Drama", "Sci-Fi"],
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    { 
      id: 4, 
      title: "The Shawshank Redemption", 
      year: 1994, 
      poster: "https://images.unsplash.com/photo-1551524164-87a9e8f89c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 9.3, 
      genre: ["Drama"],
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    { 
      id: 5, 
      title: "Pulp Fiction", 
      year: 1994, 
      poster: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.9, 
      genre: ["Crime", "Drama"],
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    { 
      id: 6, 
      title: "The Godfather", 
      year: 1972, 
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 9.2, 
      genre: ["Crime", "Drama"],
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    { 
      id: 7, 
      title: "Fight Club", 
      year: 1999, 
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.8, 
      genre: ["Drama"],
      description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
    },
    { 
      id: 8, 
      title: "Forrest Gump", 
      year: 1994, 
      poster: "https://images.unsplash.com/photo-1551524164-87a9e8f89c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.8, 
      genre: ["Drama", "Romance"],
      description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
    },
    { 
      id: 9, 
      title: "The Matrix", 
      year: 1999, 
      poster: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.7, 
      genre: ["Action", "Sci-Fi"],
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    { 
      id: 10, 
      title: "Goodfellas", 
      year: 1990, 
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.7, 
      genre: ["Biography", "Crime", "Drama"],
      description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito."
    },
    { 
      id: 11, 
      title: "The Lord of the Rings: The Fellowship of the Ring", 
      year: 2001, 
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.8, 
      genre: ["Adventure", "Drama", "Fantasy"],
      description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    { 
      id: 12, 
      title: "Parasite", 
      year: 2019, 
      poster: "https://images.unsplash.com/photo-1551524164-87a9e8f89c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.6, 
      genre: ["Comedy", "Drama", "Thriller"],
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    }
  ];

  // Extract unique genres and years for filters
  const genres = ["All", ...new Set(movieData.flatMap(movie => movie.genre))];
  const years = ["All", ...new Set(movieData.map(movie => movie.year.toString()))].sort((a, b) => b - a);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setMovies(movieData);
      setFilteredMovies(movieData);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter and sort movies
    let result = [...movies];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply genre filter
    if (selectedGenre !== "All") {
      result = result.filter(movie => movie.genre.includes(selectedGenre));
    }
    
    // Apply year filter
    if (selectedYear !== "All") {
      result = result.filter(movie => movie.year.toString() === selectedYear);
    }
    
    // Apply sorting
    switch(sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "year-new":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        result.sort((a, b) => a.year - b.year);
        break;
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Default sorting by popularity (id as proxy)
        result.sort((a, b) => a.id - b.id);
    }
    
    setFilteredMovies(result);
  }, [searchQuery, selectedGenre, selectedYear, sortBy, movies]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Movies looby
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our extensive collection of movies. Filter by genre, year, or search for your favorite titles.
          </p>
        </div>

        {/* Filters and Search Section */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="pl-10 pr-4 py-3 w-full rounded-lg bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Genre Filter */}
            <div>
              <select
                className="w-full py-3 px-4 rounded-lg bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <select
                className="w-full py-3 px-4 rounded-lg bg-gray-700/70 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="text-gray-400 flex items-center">Sort by:</span>
            {[
              { value: "popularity", label: "Popularity" },
              { value: "rating", label: "Rating" },
              { value: "year-new", label: "Newest" },
              { value: "year-old", label: "Oldest" },
              { value: "title", label: "Title" }
            ].map(option => (
              <button
                key={option.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${sortBy === option.value 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"}`}
                onClick={() => setSortBy(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredMovies.length}</span> of <span className="text-white font-semibold">{movies.length}</span> movies
          </p>
          {(searchQuery || selectedGenre !== "All" || selectedYear !== "All") && (
            <button 
              className="px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors duration-300 text-sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedGenre("All");
                setSelectedYear("All");
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse">
                <div className="h-60 bg-gray-700"></div>
                <div className="p-3">
                  <div className="h-5 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Movies Grid */}
            {filteredMovies.length > 0 ? (
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No movies found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </>
        )}

        
    
      </div>
    </div>
  );
}