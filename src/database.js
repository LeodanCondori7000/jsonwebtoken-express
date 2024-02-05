const mongoose = require("mongoose");
// const { MONGODB_URI } = require("./config.js");

mongoose.connect("mongodb://localhost/apicompany",{
  // useCreateIndex:true
})
  .then(db=>console.log("Db is connected"))
  .catch(error=>console.log(error))

// try {
//   const db = await mongoose.connect(MONGODB_URI);
//   console.log("Database is connected to", db.connection.name);
// } catch (error) {
//   console.error(error.message);
// }
