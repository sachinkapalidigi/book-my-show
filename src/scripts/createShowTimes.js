const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

// ORDER IS IMP! dotenv must come before this
const { sequelize } = require("../config/mysqldb");
const Movies = require("../models/movies");
const Screen = require("../models/screens");
const ShowTime = require("../models/showtimes");

(async () => {
  try {
    // Sync the model with the database
    // await sequelize.sync();

    // TODO:
    // Get movies from the database
    const movies = await Movies.findAll({
      where: {
        endDate: null,
      },
    });
    // Get Screens from the database
    const screens = await Screen.findAll({});

    // For each movie, pick a few screens, then create atleast 2 show times a day to 5, for next 7 days
    for (let index = 0; index < movies.length; index++) {
      const movie = movies[index];
      // 1. pick screens randomly
    }

    console.log("Movies created successfully!");
  } catch (error) {
    console.error("Error creating movies:", error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
})();
