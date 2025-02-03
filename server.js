const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener')
    .then(() => console.log('Connected to MongoDB via Docker'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('index')
})

app.post('/shortUrls', (req, res) => {

})

app.listen(process.env.PORT || 8080);