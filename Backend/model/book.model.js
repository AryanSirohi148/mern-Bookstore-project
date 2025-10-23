import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: Number,  // Original price before discount
    category: { type: String, required: true },
    subcategory: String,   // e.g. "Fiction", "Non-Fiction", "Romance", "Thriller"
    image: { type: String, required: true },
    images: [String],      // Multiple images
    description: { type: String, required: true },
    longDescription: String, // Detailed description
    publishedYear: { type: Number, required: true },
    isbn: String,          // ISBN number
    pages: Number,         // Number of pages
    language: { type: String, default: "English" },
    publisher: String,     // Publisher name
    stock: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    tags: [String],        // Tags for search
    dimensions: {          // Book dimensions
        height: Number,
        width: Number,
        depth: Number
    },
    weight: Number,        // Book weight in grams
    format: { type: String, default: "Paperback" }, // Paperback, Hardcover, eBook
    ageGroup: String,      // Target age group
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
const Book = mongoose.model("Book", bookSchema);

export default Book;