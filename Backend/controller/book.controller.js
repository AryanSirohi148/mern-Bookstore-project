import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const { category, search, featured, bestseller, limit = 20, page = 1 } = req.query;
        let query = {};
        
        // Filter by category
        if (category && category !== 'all') {
            query.category = category;
        }
        
        // Search functionality
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } }
            ];
        }
        
        // Filter featured books
        if (featured === 'true') {
            query.isFeatured = true;
        }
        
        // Filter bestseller books
        if (bestseller === 'true') {
            query.isBestSeller = true;
        }
        
        // Only show available books
        query.isAvailable = true;
        
        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        const books = await Book.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));
            
        const total = await Book.countDocuments(query);
        
        res.status(200).json({
            books,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / parseInt(limit))
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const getBookById = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const createBook = async(req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const updateBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const deleteBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const getCategories = async(req, res) => {
    try {
        const categories = await Book.distinct('category');
        res.status(200).json(categories);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};