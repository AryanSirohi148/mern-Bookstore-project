import express from "express";
import { 
    getBook, 
    getBookById, 
    createBook, 
    updateBook, 
    deleteBook, 
    getCategories 
} from "../controller/book.controller.js";

const router = express.Router();

// Get all books with filtering and pagination
router.get("/", getBook);

// Get book categories
router.get("/categories", getCategories);

// Get book by ID
router.get("/:id", getBookById);

// Create new book
router.post("/", createBook);

// Update book
router.put("/:id", updateBook);

// Delete book
router.delete("/:id", deleteBook);

export default router;