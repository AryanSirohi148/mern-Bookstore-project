// Book cover utility functions
export const getBookCoverUrl = (book) => {
  // First try the original image
  if (book.image && book.image !== '') {
    return book.image;
  }
  
  // Try Google Books API
  if (book.isbn) {
    const isbn = book.isbn.replace(/[^0-9]/g, '');
    if (isbn.length >= 10) {
      return `https://books.google.com/books/content?id=${book._id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
    }
  }
  
  // Try Open Library
  if (book.isbn) {
    const isbn = book.isbn.replace(/[^0-9]/g, '');
    if (isbn.length >= 10) {
      return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
    }
  }
  
  // Try Amazon
  if (book.isbn) {
    const isbn = book.isbn.replace(/[^0-9]/g, '');
    if (isbn.length >= 10) {
      return `https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.L.jpg`;
    }
  }
  
  // Return category-based fallback
  return getCategoryFallbackCover(book.category);
};

export const getCategoryFallbackCover = (category) => {
  const categoryCovers = {
    'Fiction': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Non-Fiction': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Computer Science': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&auto=format',
    'Philosophy': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Self-Help': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Romance': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Fantasy': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Classic Literature': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Dystopian': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Coming of Age': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Memoir': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'History': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Finance': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Success': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Personal Development': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
    'Software Development': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&auto=format',
    'Programming': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&auto=format',
    'Algorithms': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&auto=format',
    'Software Design': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&auto=format',
    'Existentialism': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Political Philosophy': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
    'Stoicism': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format'
  };
  
  return categoryCovers[category] || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format';
};

export const getBookCoverFallbacks = (book) => {
  const fallbacks = [];
  
  // Original image
  if (book.image && book.image !== '') {
    fallbacks.push(book.image);
  }
  
  // Google Books API
  if (book.isbn) {
    const isbn = book.isbn.replace(/[^0-9]/g, '');
    if (isbn.length >= 10) {
      fallbacks.push(`https://books.google.com/books/content?id=${book._id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`);
    }
  }
  
  // Open Library
  if (book.isbn) {
    const isbn = book.isbn.replace(/[^0-9]/g, '');
    if (isbn.length >= 10) {
      fallbacks.push(`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`);
    }
  }
  
  // Amazon
  if (book.isbn) {
    const isbn = book.isbn.replace(/[^0-9]/g, '');
    if (isbn.length >= 10) {
      fallbacks.push(`https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.L.jpg`);
    }
  }
  
  // Category fallback
  fallbacks.push(getCategoryFallbackCover(book.category));
  
  // Final placeholder
  fallbacks.push(`https://via.placeholder.com/300x400/4f46e5/ffffff?text=${encodeURIComponent(book.title.substring(0, 20))}`);
  
  return fallbacks;
};
