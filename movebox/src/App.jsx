import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("movebox-dark") === "1");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("movebox-dark", dark ? "1" : "0");
  }, [dark]);

  // Add this useEffect to handle the search event
  useEffect(() => {
    const handleSearch = (event) => {
      setSearchQuery(event.detail);
      // Navigate to home when searching from other pages
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    };

    window.addEventListener('movebox-search', handleSearch);
    
    return () => {
      window.removeEventListener('movebox-search', handleSearch);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar dark={dark} setDark={setDark} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}