import React, { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import CategoryTabs from '../components/CategoryTabs'
import { movies as allMovies } from '../data/sampleMovies'

export default function Home({ searchQuery = '' }){
  const [activeCategory, setActiveCategory] = useState('Trending')
  const [query, setQuery] = useState(searchQuery)

  // Update local query when searchQuery props changes
  React.useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const filtered = useMemo(() => {
    return allMovies.filter(m => {
      const matchesCat = activeCategory ? m.category === activeCategory : true
      const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  },[activeCategory, query])

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero onSearch={setQuery} />
      <CategoryTabs active={activeCategory} setActive={setActiveCategory} />
      
      {/* REMOVED THE EXTRA MOVIES GRID SECTION */}
    </div>
  )
}