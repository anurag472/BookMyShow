const express = require('express');
const router = express.Router();
const Theatre = require('../models/theatreModel');

router.post('/add-theatre', async (req, res) => {
    try {
        const theatre = new Theatre(req.body);
        await theatre.save();
        res.send({
            success: true,
            message: 'Theatre added successfully',
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
})

router.get('/get-all-theatres', async (req, res) => {
    try {
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success: true,
            message: 'All theatres fetched successfully',
            data: allTheatres,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
})

router.get('/get-all-theatres-by-owner', async (req, res) => {
    try {
        const allTheatres = await Theatre.find({ owner: req.body.owner }).populate('owner');
        res.send({
            success: true,
            message: 'All theatres fetched successfully',
            data: allTheatres,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
})

router.put('/update-theatre', async (req, res) => {
    try {
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body)
        res.send({
            success: true,
            message: 'Theatre updated successfully',
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
})

router.delete('/delete-theatre', async (req, res) => {
    try {
        await Theatre.findByIdAndDelete(req.body.theatreId)
        res.send({
            success: true,
            message: 'Theatre deleted successfully',
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
})

module.exports = router;