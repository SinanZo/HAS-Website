// config/db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",      // update with your MySQL username
  password: "Sinan@4780963",  // update with your MySQL password
  database: "safety_products",  // update with your database name
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
    } else {
      console.log("Connected to MySQL database!");
      connection.release();
    }
  });
  
  module.exports = pool.promise();
