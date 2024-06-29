const express = require('express');
const router = express.Router();
const Show = require('../models/showModel');

router.post('/add-show', async (req, res) => {
    try {
        const newShow = new Show(req.body)
        await newShow.save()
        res.send({
            success: true,
            message: "Show added successfully"
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;