export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  director: string;
  country: string;
  genre: string[];
  rating: number;
  watchedDate: string;
  poster: string;
  color: string;
  review?: string;
  duration?: number;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "The Godfather",
    originalTitle: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    country: "USA",
    genre: ["Crime", "Drama"],
    rating: 5,
    watchedDate: "2024-01-15",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    color: "#8B4513",
    review: "A masterpiece of storytelling. Every frame is perfect.",
    duration: 175
  },
  {
    id: "2",
    title: "In the Mood for Love",
    originalTitle: "花样年华",
    year: 2000,
    director: "Wong Kar-wai",
    country: "Hong Kong",
    genre: ["Romance", "Drama"],
    rating: 5,
    watchedDate: "2024-02-03",
    poster: "https://images.unsplash.com/photo-1594909122849-11daa2a0cf2b?w=400&h=600&fit=crop",
    color: "#9B2335",
    review: "The most beautiful film ever made about unspoken love.",
    duration: 98
  },
  {
    id: "3",
    title: "Parasite",
    originalTitle: "기생충",
    year: 2019,
    director: "Bong Joon-ho",
    country: "South Korea",
    genre: ["Thriller", "Drama", "Comedy"],
    rating: 5,
    watchedDate: "2024-02-20",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    color: "#2F4F4F",
    review: "Genre-defying brilliance. The staircase scene is unforgettable.",
    duration: 132
  },
  {
    id: "4",
    title: "Spirited Away",
    originalTitle: "千と千尋の神隠し",
    year: 2001,
    director: "Hayao Miyazaki",
    country: "Japan",
    genre: ["Animation", "Fantasy", "Adventure"],
    rating: 5,
    watchedDate: "2024-03-08",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    color: "#CD5C5C",
    review: "A magical journey that reminds us of the power of kindness.",
    duration: 125
  },
  {
    id: "5",
    title: "The Grand Budapest Hotel",
    originalTitle: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    country: "USA",
    genre: ["Comedy", "Drama"],
    rating: 4,
    watchedDate: "2024-03-25",
    poster: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=400&h=600&fit=crop",
    color: "#E6A8D7",
    review: "Visually stunning and delightfully quirky. Anderson at his best.",
    duration: 99
  },
  {
    id: "6",
    title: "City of God",
    originalTitle: "Cidade de Deus",
    year: 2002,
    director: "Fernando Meirelles",
    country: "Brazil",
    genre: ["Crime", "Drama"],
    rating: 5,
    watchedDate: "2024-04-10",
    poster: "https://images.unsplash.com/photo-1517604931442-71053e3e2f6f?w=400&h=600&fit=crop",
    color: "#FF6B35",
    review: "Raw, energetic, and devastating. A triumph of Brazilian cinema.",
    duration: 130
  },
  {
    id: "7",
    title: "Roma",
    originalTitle: "Roma",
    year: 2018,
    director: "Alfonso Cuarón",
    country: "Mexico",
    genre: ["Drama"],
    rating: 5,
    watchedDate: "2024-04-28",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    color: "#708090",
    review: "Intimate and epic at the same time. Shot in stunning black and white.",
    duration: 135
  },
  {
    id: "8",
    title: "Shoplifters",
    originalTitle: "万引き家族",
    year: 2018,
    director: "Hirokazu Kore-eda",
    country: "Japan",
    genre: ["Drama", "Crime"],
    rating: 5,
    watchedDate: "2024-05-15",
    poster: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    color: "#8B7355",
    review: "What makes a family? Kore-eda asks profound questions with gentle touch.",
    duration: 121
  },
  {
    id: "9",
    title: "Portrait of a Lady on Fire",
    originalTitle: "Portrait de la jeune fille en feu",
    year: 2019,
    director: "Céline Sciamma",
    country: "France",
    genre: ["Romance", "Drama"],
    rating: 5,
    watchedDate: "2024-06-02",
    poster: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=400&h=600&fit=crop",
    color: "#4A6741",
    review: "Every frame is a painting. A love story told with exquisite restraint.",
    duration: 120
  },
  {
    id: "10",
    title: "Everything Everywhere All at Once",
    originalTitle: "Everything Everywhere All at Once",
    year: 2022,
    director: "Daniels",
    country: "USA",
    genre: ["Sci-Fi", "Comedy", "Adventure"],
    rating: 5,
    watchedDate: "2024-06-20",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
    color: "#9B59B6",
    review: "Chaos and beauty colliding. A maximalist masterpiece about finding meaning.",
    duration: 139
  },
  {
    id: "11",
    title: "Perfect Blue",
    originalTitle: "パーフェクトブルー",
    year: 1997,
    director: "Satoshi Kon",
    country: "Japan",
    genre: ["Animation", "Thriller", "Psychological"],
    rating: 5,
    watchedDate: "2024-07-08",
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop",
    color: "#8B0000",
    review: "A haunting exploration of identity and fame. Ahead of its time.",
    duration: 81
  },
  {
    id: "12",
    title: "The Handmaiden",
    originalTitle: "아가씨",
    year: 2016,
    director: "Park Chan-wook",
    country: "South Korea",
    genre: ["Thriller", "Romance", "Drama"],
    rating: 5,
    watchedDate: "2024-07-25",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    color: "#2E8B57",
    review: "Seductive, twisty, and visually opulent. Park's masterpiece.",
    duration: 144
  }
];

export const stats = {
  totalWatched: movies.length,
  totalHours: movies.reduce((acc, m) => acc + (m.duration || 0), 0) / 60,
  averageRating: (movies.reduce((acc, m) => acc + m.rating, 0) / movies.length).toFixed(1),
  countries: [...new Set(movies.map(m => m.country))].length,
  topGenres: [...new Set(movies.flatMap(m => m.genre))]
    .map(g => ({
      name: g,
      count: movies.filter(m => m.genre.includes(g)).length
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
};

export const years = [2024, 2023, 2022, 2021, 2020];

export const genres = [...new Set(movies.flatMap(m => m.genre))];