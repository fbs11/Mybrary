const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

//5YG5pQSoDUOAhCso

module.exports = router

//heroku config:set DATABASE_URL="mongodb+srv://user:5YG5pQSoDUOAhCso@cluster0.ejnxh.mongodb.net/test?retryWrites=true&w=majority"