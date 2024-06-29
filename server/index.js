const express = require('express')
const mongoose = require('mongoose')
const dburl = 'mongodb://anurag:patil@localhost:27017/dev?authSource=admin';
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const showRoutes = require('./routes/showRoutes')

const app = express()
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/theatres', theatreRoutes)
app.use('/api/shows', showRoutes)

mongoose.connect(dburl).then(() => {
    console.log('Connected to database');
    }).catch((err) => {
    console.log('Error connecting to database', err);
})

app.listen(8081, () => {
  console.log('Server is running');
})