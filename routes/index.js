const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) => {
    let books
    try {
        books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()

    } catch {
        boocks = []
    }
    res.render('index', { books: books })

})

//5YG5pQSoDUOAhCso

module.exports = router

//heroku config:set DATABASE_URL="mongodb+srv://user:5YG5pQSoDUOAhCso@cluster0.ejnxh.mongodb.net/test?retryWrites=true&w=majority"