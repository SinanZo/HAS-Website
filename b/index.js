const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create a connection pool to MySQL database
const pool = mysql.createPool({
  host: "localhost",
  user: "root", // Replace with your MySQL user
  password: "your_mysql_password", // Replace with your MySQL password
  database: "your_database_name", // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test DB connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database!");
    connection.release();
  }
});

// API endpoint to add a new product
app.post("/api/products", (req, res) => {
  const {
    name,
    category,
    subCategory,
    subSubCategory,
    distributor,
    image,
    description,
    brief,
    colors,
    sizes,
    colorVariants,
    gallery,
    additionalInfo,
  } = req.body;

  const sql = `INSERT INTO products 
    (name, category, subCategory, subSubCategory, distributor, image, description, brief, colors, sizes, colorVariants, gallery, additionalInfo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  pool.query(
    sql,
    [
      name,
      category,
      subCategory,
      subSubCategory,
      distributor,
      image,
      description,
      brief,
      JSON.stringify(colors),
      JSON.stringify(sizes),
      JSON.stringify(colorVariants),
      JSON.stringify(gallery),
      JSON.stringify(additionalInfo),
    ],
    (err, results) => {
      if (err) {
        console.error("Error inserting product:", err);
        return res.status(500).json({ error: "Error inserting product" });
      }
      res.json({ message: "Product added successfully", productId: results.insertId });
    }
  );
});

// Similarly, add endpoints for editing and deleting products
// And endpoints for managing manufacturers...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
