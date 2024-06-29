const mongoose = require("mongoose");

//Db connect
const db = mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => {
    console.log("Succesfully connected to the DataBase");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = db;
