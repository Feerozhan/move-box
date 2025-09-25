export const movies = [
  // 🔥 Trending (5 movies)
  {
    id: 't1',
    title: 'Midnight Run',
    rating: 8.2,
    category: 'Trending',
    year: 2024,
    poster: '/images/avLXoDhPPbKgdOU7wsoVlOzYfUP.jpg',
    // 👈 thumbnail dikhane ke liye
    //  video: 'https://www.youtube.com/embed/',
    //  video: 'https://www.youtube.com/embed/Geo_tNuNgD8a',
     video:'https://www.youtube.com/embed/N5_kIDcNhl4',
    description: 'A thrilling chase through the city at night.'
  },
  {
    id: 't2',
    title: 'Shadows of Dawn',
    rating: 7.9,
    category: 'Trending',
    year: 2023,
   
    poster: 'https://m.media-amazon.com/images/I/81U4wCt257L._SY425_.jpg',
     video: 'https://www.youtube.com/embed/qzsVQg-fx14',
    description: 'An epic story of survival and courage.'
  },
  {
    id: 't3',
    title: 'Edge of Fear',
    rating: 7.6,
    category: 'Trending',
    year: 2024,
    poster: 'https://nevermore-horror.com/wp-content/uploads/2018/10/TMP_S_000136_TMP.jpg',
    video: 'https://www.youtube.com/embed/Xri2537fef0',
    description: 'A suspense thriller with unexpected twists.'
  },
  {
    id: 't4',
    title: 'Burning Skies',
    rating: 8.0,
    category: 'Trending',
    year: 2022,
    poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&h=750&fit=crop',
    description: 'A battle against time and fire.'
  },
  {
    id: 't5',
    title: 'Echoes of War',
    rating: 8.3,
    category: 'Trending',
    year: 2025,
    poster: 'https://images.unsplash.com/photo-1489599102910-59206b8ca314?w=500&h=750&fit=crop',
    description: 'A dramatic war story of loyalty and betrayal.'
  },

  // ⭐ Popular (5 movies)
  {
    id: 'p1',
    title: 'Broken Shadows',
    rating: 7.5,
    category: 'Popular',
    year: 2023,
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Broken_Shadows.jpg',
  
    description: 'A mystery of a haunted town unfolds.'
  },
  {
    id: 'p2',
    title: 'Golden Hour',
    rating: 7.9,
    category: 'Popular',
    year: 2025,
    poster: '/images/golden-hour.jpg',
    description: 'A heartfelt drama about hope and new beginnings.'
  },
  {
    id: 'p3',
    title: 'Chasing Dreams',
    rating: 7.8,
    category: 'Popular',
    year: 2024,
    poster: '/images/chasing-dreams.jpg',
    description: 'A journey of a young artist chasing success.'
  },
  {
    id: 'p4',
    title: 'Silent Whisper',
    rating: 7.4,
    category: 'Popular',
    year: 2023,
    poster: '/images/silent-whisper.jpg',
    description: 'Secrets that change everything.'
  },
  {
    id: 'p5',
    title: 'Lost Signal',
    rating: 7.7,
    category: 'Popular',
    year: 2024,
    poster: '/images/lost-signal.jpg',
    description: 'A tech thriller about a mysterious signal.'
  },

  // 🏆 Top Rated (5 movies)
  {
    id: 'tr1',
    title: 'iron man ',
    rating: 8.8,
    category: 'Top Rated',
    year: 2022,
    poster: '/images/iron.jpg',
    description: 'A space adventure beyond imagination.'
  },
  {
    id: 'tr2',
    title: 'The Last Kingdom',
    rating: 9.0,
    category: 'Top Rated',
    year: 2021,
    poster: '/images/last-kingdom.jpg',
    description: 'A kingdom\'s fate rests in one warrior\'s hands.'
  },
  {
    id: 'tr3',
    title: 'Rise of Legends',
    rating: 8.9,
    category: 'Top Rated',
    year: 2022,
    poster: '/images/rise-of-legends.jpg',
    description: 'A fantasy epic filled with heroes and villains.'
  },
  {
    id: 'tr4',
    title: 'Silent Path',
    rating: 8.7,
    category: 'Top Rated',
    year: 2020,
    poster: '/images/silent-path.jpg',
    description: 'A journey of discovery and sacrifice.'
  },
  {
    id: 'tr5',
    title: 'Eternal Flame',
    rating: 8.6,
    category: 'Top Rated',
    year: 2023,
    poster: '/images/eternal-flame.jpg',
    description: 'A love story that transcends time.'
  },

  // 🎥 Upcoming (5 movies)
  {
    id: 'u1',
    title: 'The Awakening',
    rating: 0,
    category: 'Upcoming',
    year: 2026,
    poster: '/images/awakening.jpg',
    description: 'A brand new sci-fi adventure is coming soon.'
  },
  {
    id: 'u2',
    title: 'Frozen Truth',
    rating: 0,
    category: 'Upcoming',
    year: 2026,
    poster: '/images/frozen-truth.jpg',
    description: 'A chilling crime story set in the Arctic.'
  },
  {
    id: 'u3',
    title: 'Neon Future',
    rating: 0,
    category: 'Upcoming',
    year: 2026,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Neon_Future_2.jpg',
    description: 'A cyberpunk journey into a neon city.'
  },
  {
    id: 'u4',
    title: 'Valley of Dreams',
    rating: 0,
    category: 'Upcoming',
    year: 2026,
    poster: '/images/valley-of-dreams.jpg',
    description: 'A touching family drama about chasing hope.'
  },
  {
    id: 'u5',
    title: 'Final Countdown',
    rating: 0,
    category: 'Upcoming',
    year: 2026,
    poster: '/images/final-countdown.jpg',
    description: 'A race against time to save the world.'
  },

  // 🎬 Bonus: Trailer Example (Video)
  {
    id: 'v1',
    title: 'Official Trailer',
    rating: 0,
    category: 'Trending',
    year: 2024,
    video: '/videos/trailer.mp4', // 👈 public/videos me rakho
    description: 'Watch the exciting trailer now.'
  }
];
