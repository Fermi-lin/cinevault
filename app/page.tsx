"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Film, 
  Calendar, 
  Star, 
  Globe, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  X,
  Heart,
  Quote
} from "lucide-react";
import { movies, stats, Movie } from "@/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-[#d4a574] text-[#d4a574]"
              : "text-[#2a2a2a]"
          }`}
        />
      ))}
    </div>
  );
}

function MovieCard({ 
  movie, 
  onClick,
  index 
}: { 
  movie: Movie; 
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={onClick}
      className="scroll-item flex-shrink-0 w-[140px] cursor-pointer group"
    >
      {/* Film Strip Container */}
      <div className="relative">
        {/* Film perforations */}
        <div className="absolute -left-2 top-0 bottom-0 w-4 flex flex-col justify-between py-2 z-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-3 bg-[#0a0a0a] rounded-sm" />
          ))}
        </div>
        <div className="absolute -right-2 top-0 bottom-0 w-4 flex flex-col justify-between py-2 z-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-3 bg-[#0a0a0a] rounded-sm" />
          ))}
        </div>
        
        {/* Poster */}
        <div 
          className="relative aspect-[2/3] rounded-sm overflow-hidden bg-[#141414] transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundColor: movie.color }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Film className="w-12 h-12 text-white/20" />
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-[#d4a574]/90 flex items-center justify-center">
                <Quote className="w-5 h-5 text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Info */}
      <div className="mt-3 px-1">
        <h3 className="text-sm font-medium text-[#f5f5f5] truncate group-hover:text-[#d4a574] transition-colors">
          {movie.title}
        </h3>
        <p className="text-xs text-[#888888] mt-0.5">{movie.year}</p>
        <div className="mt-2">
          <StarRating rating={movie.rating} />
        </div>
      </div>
    </motion.div>
  );
}

function MovieDetail({ 
  movie, 
  onClose 
}: { 
  movie: Movie; 
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl bg-[#141414] rounded-2xl overflow-hidden border border-[#2a2a2a]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col md:flex-row">
          {/* Poster */}
          <div 
            className="w-full md:w-64 h-80 md:h-auto flex-shrink-0 relative"
            style={{ backgroundColor: movie.color }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Film className="w-20 h-20 text-white/20" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent md:bg-gradient-to-r" />
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#f5f5f5]">
                  {movie.title}
                </h2>
                {movie.originalTitle && movie.originalTitle !== movie.title && (
                  <p className="text-[#888888] mt-1">{movie.originalTitle}</p>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#d4a574]">
                <Heart className="w-5 h-5 fill-[#d4a574]" />
                <span className="text-lg font-medium">{movie.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#a0a0a0]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{movie.duration} min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                <span>{movie.country}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {movie.genre.map((g) => (
                <span 
                  key={g}
                  className="px-3 py-1 text-xs rounded-full bg-[#1a1a1a] text-[#d4a574] border border-[#2a2a2a]"
                >
                  {g}
                </span>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
              <p className="text-[#888888] text-sm mb-2">Directed by</p>
              <p className="text-[#f5f5f5] text-lg">{movie.director}</p>
            </div>
            
            {movie.review && (
              <div className="mt-6">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <p className="text-[#a0a0a0] italic leading-relaxed">
                    {movie.review}
                  </p>
                </div>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-[#2a2a2a] text-sm text-[#666666]">
              Watched on {new Date(movie.watchedDate).toLocaleDateString("en-US", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatCard({ 
  icon: Icon, 
  value, 
  label,
  delay 
}: { 
  icon: React.ElementType; 
  value: string | number; 
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#d4a574]/30 transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#d4a574]" />
        </div>
      </div>
      <p className="text-3xl font-[family-name:var(--font-playfair)] text-[#f5f5f5]">{value}</p>
      <p className="text-sm text-[#888888] mt-1">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef) {
      const scrollAmount = 400;
      scrollRef.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#2a2a2a] text-sm text-[#888888] mb-8">
              <Film className="w-4 h-4 text-[#d4a574]" />
              <span>Year in Cinema</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-[#f5f5f5] tracking-tight">
              Cine
              <span className="text-[#d4a574]">Vault</span>
            </h1>
            
            <p className="mt-6 text-lg text-[#888888] max-w-xl mx-auto leading-relaxed">
              A curated collection of cinematic experiences. 
              Each film a world, each viewing a journey.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <StatCard 
              icon={Film} 
              value={stats.totalWatched} 
              label="Films Watched" 
              delay={0.2}
            />
            <StatCard 
              icon={Clock} 
              value={`${stats.totalHours.toFixed(0)}h`} 
              label="Hours Viewed" 
              delay={0.3}
            />
            <StatCard 
              icon={Star} 
              value={stats.averageRating} 
              label="Avg Rating" 
              delay={0.4}
            />
            <StatCard 
              icon={Globe} 
              value={stats.countries} 
              label="Countries" 
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Shelf Section */}
      <section className="relative py-16">
        <div className="px-6 mb-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[#f5f5f5]">
                Year-In-Watching Shelf
              </h2>
              <p className="text-sm text-[#888888] mt-1">
                {movies.length} films collected in 2024
              </p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-[#f5f5f5] hover:border-[#d4a574]/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-[#f5f5f5] hover:border-[#d4a574]/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Film Strip Container */}
        <div className="relative">
          {/* Top film perforation */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-[#0a0a0a] z-10 flex items-center justify-around">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="w-3 h-4 bg-[#1a1a1a] rounded-sm" />
            ))}
          </div>
          
          {/* Scroll Container */}
          <div 
            ref={setScrollRef}
            className="scroll-container bg-[#141414] py-12 px-6"
          >
            <div className="flex gap-8 min-w-max">
              {movies.map((movie, index) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  onClick={() => setSelectedMovie(movie)}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Bottom film perforation */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#0a0a0a] z-10 flex items-center justify-around">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="w-3 h-4 bg-[#1a1a1a] rounded-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Genre Distribution */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[#f5f5f5] mb-8">
            Genre Palette
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {stats.topGenres.map((genre, index) => (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="px-5 py-3 bg-[#141414] border border-[#2a2a2a] rounded-xl hover:border-[#d4a574]/50 transition-colors cursor-default">
                  <span className="text-[#f5f5f5] font-medium">{genre.name}</span>
                  <span className="ml-2 text-sm text-[#888888]">{genre.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#666666] text-sm">
            CineVault — Personal cinema collection
          </p>
          <p className="text-[#444444] text-xs mt-2">
            Data stored locally in your browser
          </p>
        </div>
      </footer>

      {/* Movie Detail Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <MovieDetail 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}