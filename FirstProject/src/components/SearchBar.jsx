import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchTerm, onSearchChange, resultCount }) {

  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">

        {/* 🔍 Icon */}
        <span className="search-icon">🔍</span>

        {/* 🔤 Input */}
        <input 
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />

        {/* ❌ Clear Button */}
        {searchTerm && (
          <button 
            className="clear-search"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}

      </div>

      {/* 📊 Result Count */}
      {searchTerm && resultCount !== undefined && (
        <p className="search-result-count">
          {resultCount} {resultCount === 1 ? 'result' : 'results'} found
        </p>
      )}

    </div>
  );
}

export default SearchBar;