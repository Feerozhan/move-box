import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "🎬 Welcome to MoveBox",
    subtitle: "Your favorite movies, all in one place.",
    description: "Discover, watch, and enjoy thousands of movies and TV shows with our premium streaming service.",
    bg: "bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
  },
  {
    id: 2,
    title: "🔥 Trending Now",
    subtitle: "Watch the latest hits right here.",
    description: "Stay up to date with the most popular movies and shows that everyone is talking about.",
    bg: "bg-gradient-to-r from-red-900 via-red-800 to-red-900",
    image: "https://www.hollywoodreporter.com/movies/movie-reviews/jurassic-world-film-review-801334/",
  },
  {
    id: 3,
    title: "⭐ Popular Picks",
    subtitle: "Movies everyone is talking about.",
    description: "Curated selection of the highest rated films and series from across all genres.",
    bg: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
  },
  {
    id: 4,
    title: "🍿 Start Watching",
    subtitle: "Grab popcorn and enjoy the show.",
    description: "Your next favorite movie is just a click away. Start your entertainment journey now.",
    bg: "bg-gradient-to-r from-green-900 via-green-800 to-green-900",
    image: "https://images.unsplash.com/photo-1551524164-87a9e8f89c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-[500px] w-full overflow-hidden relative rounded-xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 flex ${slides[current].bg}`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 md:px-8 w-full">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {slides[current].title}
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 font-light"
            >
              {slides[current].subtitle}
            </motion.p>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl text-sm md:text-base mb-8 font-light"
            >
              {slides[current].description}
            </motion.p>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
