const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModel');

router.post('/add-movie', async (req, res) => {
    try {
        const newMovie = new Movie(req.body)
        await newMovie.save()
        res.send({
            success: true,
            message: "Movie added successfully"
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.get('/get-all-movies', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.send({
            success: true,
            message: "All movies fetched successfully",
            data: allMovies
        
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.put('/update-movie', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body)
        const updatedMovie = await Movie.findById(req.body.movieId)
        res.send({
            success: true,
            message: "Movie updated successfully",
            data: updatedMovie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.delete('/delete-movie', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.body.movieId)
        res.send({
            success: true,
            message: "Movie deleted successfully"
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.get('/movie/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.send({
            success: true,
            message: "Movie fetched successfully",
            data: movie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;