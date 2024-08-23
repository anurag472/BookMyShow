const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const showRoutes = require('./routes/showRoutes')
const bookingRoute = require('./routes/bookingRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/theatres', theatreRoutes)
app.use('/api/shows', showRoutes)
app.use('/api/bookings', bookingRoute)

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to database');
    }).catch((err) => {
    console.log('Error connecting to database', err);
})

app.listen(8081, () => {
  console.log('Server is running');
})