require('dotenv').config()
const mongoose = require("mongoose");
const Show = require("./models/showModel");

mongoose.connect(process.env.DB_URL)
//last ran 25 august
const theatreId = "667e7f28aeb8bd3d4fbc6ca4"
const movieId = "66bcc4ac8d01959dad1efc18"

const generateShows = async () => {
  const today = new Date();
  const totalDays = 10;
  for (let i = 0; i < totalDays; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    currentDate.setUTCHours(0, 0, 0, 0);
    const isoDate = currentDate.toISOString().replace(".000Z", ".000+00:00");

    const showTimes = ["9:30 AM", "12:00 PM", "15:00 PM", "18:00 PM", "21:00 PM"];
    
    for (const time of showTimes) {
      const show = new Show({
        name: `${time} show`,
        date: isoDate,
        time: time,
        ticketPrice: 100,
        theatre: theatreId,
        movie: movieId,
        totalSeats: 120,
        bookedSeats: [],
      });

      await show.save();
      console.log(`Show created for ${isoDate} at ${time}`);
    }
  }
};

generateShows()
  .then(() => {
    console.log("All shows created successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error creating shows:", err);
  });
