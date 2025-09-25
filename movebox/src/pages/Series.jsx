import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [isLoading, setIsLoading] = useState(true);

  // Sample series data with more details
  const seriesData = [
    { 
      id: 1, 
      title: "Breaking Bad", 
      year: 2008, 
      poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 9.5, 
      genre: ["Crime", "Drama", "Thriller"],
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      seasons: 5
    },
    { 
      id: 2, 
      title: "Stranger Things", 
      year: 2016, 
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.7, 
      genre: ["Drama", "Fantasy", "Horror"],
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      seasons: 4
    },
    { 
      id: 3, 
      title: "Game of Thrones", 
      year: 2011, 
      poster: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 9.2, 
      genre: ["Action", "Adventure", "Drama"],
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      seasons: 8
    },
    { 
      id: 4, 
      title: "The Witcher", 
      year: 2019, 
      poster: "https://images.unsplash.com/photo-1593351415071-2f10954ca6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.0, 
      genre: ["Action", "Adventure", "Fantasy"],
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      seasons: 3
    },
    { 
      id: 5, 
      title: "Peaky Blinders", 
      year: 2013, 
      poster: "https://images.unsplash.com/photo-16389139717844-6845c91bb3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.8, 
      genre: ["Crime", "Drama"],
      description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      seasons: 6
    },
    { 
      id: 6, 
      title: "The Boys", 
      year: 2019, 
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.7, 
      genre: ["Action", "Comedy", "Crime"],
      description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
      seasons: 3
    },
    { 
      id: 7, 
      title: "Money Heist", 
      year: 2017, 
      poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.3, 
      genre: ["Action", "Crime", "Mystery"],
      description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
      seasons: 5
    },
    { 
      id: 8, 
      title: "Sherlock", 
      year: 2010, 
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 9.1, 
      genre: ["Crime", "Drama", "Mystery"],
      description: "Modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      seasons: 4
    },
    { 
      id: 9, 
      title: "The Mandalorian", 
      year: 2019, 
      poster: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.8, 
      genre: ["Action", "Adventure", "Sci-Fi"],
      description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      seasons: 3
    },
    { 
      id: 10, 
      title: "Loki", 
      year: 2021, 
      poster: "https://images.unsplash.com/photo-1593351415071-2f10954ca6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.2, 
      genre: ["Action", "Adventure", "Fantasy"],
      description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
      seasons: 2
    },
    { 
      id: 11, 
      title: "The Crown", 
      year: 2016, 
      poster: "https://images.unsplash.com/photo-16389139717844-6845c91bb3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.6, 
      genre: ["Biography", "Drama", "History"],
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
      seasons: 5
    },
    { 
      id: 12, 
      title: "The Last of Us", 
      year: 2023, 
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", 
      rating: 8.9, 
      genre: ["Action", "Adventure", "Drama"],
      description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      seasons: 1
    }
  ];

  // Extract unique genres and years for filters
  const genres = ["All", ...new Set(seriesData.flatMap(show => show.genre))];
  const years = ["All", ...new Set(seriesData.map(show => show.year.toString()))].sort((a, b) => b - a);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setSeries(seriesData);
      setFilteredSeries(seriesData);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter and sort series
    let result = [...series];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(show => 
        show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply genre filter
    if (selectedGenre !== "All") {
      result = result.filter(show => show.genre.includes(selectedGenre));
    }
    
    // Apply year filter
    if (selectedYear !== "All") {
      result = result.filter(show => show.year.toString() === selectedYear);
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
    
    setFilteredSeries(result);
  }, [searchQuery, selectedGenre, selectedYear, sortBy, series]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            TV Series
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the best TV series from various genres and years. Find your next binge-worthy show!
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
                  placeholder="Search series..."
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
            Showing <span className="text-white font-semibold">{filteredSeries.length}</span> of <span className="text-white font-semibold">{series.length}</span> series
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
            {/* Series Grid */}
            {filteredSeries.length > 0 ? (
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredSeries.map((show) => (
                  <div key={show.id} className="group bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={show.poster}
                        alt={show.title}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                        ⭐ {show.rating}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                        {show.seasons} Season{show.seasons !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-1 line-clamp-1">{show.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{show.year}</span>
                        <span className="text-sm text-purple-400">{show.genre[0]}</span>
                      </div>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-3">{show.description}</p>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-red-600 text-white py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No series found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </>
        )}

       
      </div>
    </div>
  );
}