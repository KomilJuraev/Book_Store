const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

//Route to Save a new Book 
router.post('/', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({message: 'Send all required fields: title, author, publishYear'});
        } else {
            const newBook = {
                title: req.body.title,
                author: req.body.author,
                publishYear: req.body.publishYear,
                description: req.body.description,
                availability: req.body.availability
            }    
            const book = await Book.create(newBook);
            return res.status(201).send(book);    
        }
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

//Route to GET all Books from database
router.get('/', async (req, res) => {
    try {
        // Add Cache-Control header to disable caching
        res.setHeader('Cache-Control', 'no-store');
        const books = await Book.find({});
        console.log('Database books', books);
        return res.status(200).json({
            count: books.length, 
            data: books
        });
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

//Route to GET one Book from database by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json({book});
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

//Route for Update a Book
router.put('/:id', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear || !req.body.availability) {
            return res.status(400).send({message: 'Send all required fields: title, author, publishYear, availability'});
        } else {
            const { id } =req.params;
            const result = await Book.findByIdAndUpdate(id, req.body);
            if(!result) {
                return res.status(404).json({message: 'Book not found'});
            } else {
                return res.status(200).send({message: 'Book updated successfully'});
            }
        }
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})

//Route for Deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return res.status(404).json({message: 'Book not found'});
        } else {
            return res.status(200).send({message: 'Book deleted successfully'});
        }
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
}) 

module.exports = router;