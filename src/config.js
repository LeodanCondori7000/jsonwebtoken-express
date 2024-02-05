const { config } =require("dotenv");
config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/apicompany";
const PORT = process.env.PORT || 4000;
const SECRET = "yoursecretkey";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

module.exports ={
  MONGODB_URI,
  PORT,
  SECRET,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_USERNAME
}