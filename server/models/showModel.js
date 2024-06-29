const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Show", showSchema);
