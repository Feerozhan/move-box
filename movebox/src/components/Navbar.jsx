import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ dark, setDark }) {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Detect scroll for navbar styling
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchValue(value)
    window.dispatchEvent(
      new CustomEvent('movebox-search', { detail: value })
    )
  }

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`)
      setSearchValue('')
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-lg' : 'bg-transparent'} border-b border-gray-200/30 dark:border-gray-800/30`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo with animation */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L20 4M20 4L18 2M20 4H10C7.79086 4 6 5.79086 6 8M6 20L4 18M4 18L6 16M4 18H14C16.2091 18 18 16.2091 18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">MoveBox</span>
          </button>

          {/* Search bar with animation */}
          <div className="hidden md:block relative">
            <div className="relative">
              <input
                value={searchValue}
                onChange={handleSearch}
                onKeyPress={handleSearchSubmit}
                placeholder="Search movies, shows..."
                className="pl-10 pr-4 py-2 rounded-full w-64 text-sm bg-gray-100/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* Navigation links with hover effects */}
          <div className="hidden lg:flex items-center gap-1 ml-2">
            {[
              { path: "/", label: "Home" },
              { path: "/movies", label: "Movies" },
              { path: "/series", label: "Series" },
              { path: "/watchlist", label: "Watchlist" }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center gap-3">
          {/* Theme toggle with smooth animation */}
          <button
            onClick={() => setDark((d) => !d)}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>

          {/* Login button with gradient */}
          <button
            className="hidden sm:flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-red-600 text-white hover:from-purple-700 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            onClick={() => alert('this project is in progressing mood ... ')}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            Login
          </button>

          {/* Mobile menu button with animation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            <span className={`bg-gray-600 dark:bg-gray-300 transition-all duration-300 block h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
            <span className={`bg-gray-600 dark:bg-gray-300 transition-all duration-300 block h-0.5 w-6 rounded-sm my-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-gray-600 dark:bg-gray-300 transition-all duration-300 block h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200/30 dark:border-gray-800/30">
          {/* Mobile search */}
          <div className="relative">
            <input
              value={searchValue}
              onChange={handleSearch}
              onKeyPress={handleSearchSubmit}
              placeholder="Search movies, shows..."
              className="pl-10 pr-4 py-2 rounded-full w-full text-sm bg-gray-100/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          {/* Mobile navigation links */}
          <div className="flex flex-col gap-2">
            {[
              { path: "/", label: "Home" },
              { path: "/movies", label: "Movies" },
              { path: "/series", label: "Series" },
              { path: "/watchlist", label: "Watchlist" }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile theme toggle and login */}
          <div className="flex gap-3 pt-2 border-t border-gray-200/50 dark:border-gray-800/50">
            <button
              onClick={() => setDark((d) => !d)}
              className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
              {dark ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                  Dark Mode
                </>
              )}
            </button>

            <button
              className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-red-600 text-white"
              onClick={() => {
                alert('Login placeholder')
                setIsMenuOpen(false)
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}