const Sequelize = require("sequelize");

const DATABASE = process.env.DATABASE || "";
const USERNAME = process.env.DATABASE_USERNAME || "";
const PASSWORD = process.env.DATABASE_PASSWORD || "";
const HOST = process.env.DATABASE_HOST || "";

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  dialect: "mysql",
  host: HOST,
});

const connectToDb = async function () {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
  } catch (error) {
    console.log("Error connecting to database: " + error);
  }
};

// USE sequelize-cli instead of this
const syncDb = async function () {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
};

module.exports = {
  sequelize,
  connectToDb,
  syncDb,
};
