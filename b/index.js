const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Use shared DB config (it exports either a mysql2 promise pool or a fallback)
const db = require("./config/db");
// Fallback product dataset used when MySQL is unavailable
let productsFallback = [];
try {
  // require the frontend data file when available
  // use a relative path that points to the workspace src data
  productsFallback = require("../src/data/productsData.js");
  // productsData may be exported as `default` (ES module transpilation)
  if (productsFallback && productsFallback.default) productsFallback = productsFallback.default;
} catch (e) {
  console.warn('[server] Could not load products fallback data:', e && e.message ? e.message : e);
  productsFallback = [];
}
// Load small mock dataset for predictable UI in dev if requested
let productsMock = [];
try {
  productsMock = require('./mock/productsMock.js');
} catch (e) {
  productsMock = [];
}

// Simple check to detect whether the exported object is a real pool or our fallback
const dbIsReal = db && db.__isFallback === false;
if (dbIsReal) {
  console.log('[server] Database module loaded (MySQL pool or compatible).');
} else {
  console.warn('[server] Database module loaded (fallback mock). SQL queries will return empty results.');
}

// API endpoint to add a new product
app.post("/api/products", async (req, res) => {
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

  try {
    // db.query follows mysql2 promise API: returns [result, fields]
    const params = [
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
    ];

    const result = await db.query(sql, params);
    // result may be [rows, fields] (mysql2) or a single object from fallback
    let insertId = 0;
    if (Array.isArray(result)) {
      const [resObj] = result;
      insertId = resObj && resObj.insertId ? resObj.insertId : 0;
    } else if (result && result.insertId) {
      insertId = result.insertId;
    }

    res.json({ message: "Product added successfully", productId: insertId });
  } catch (err) {
    console.error("Error inserting product:", err);
    return res.status(500).json({ error: "Error inserting product" });
  }
});

// Health endpoint
app.get('/api/health', async (req, res) => {
  res.json({ ok: true, dbConnected: db && db.__isFallback === false });
});

// GET products: return DB rows if connected, otherwise fallback dataset
app.get('/api/products', async (req, res) => {
  try {
    if (process.env.USE_MOCK === '1') {
      return res.json(productsMock || []);
    }

    if (db && db.__isFallback === false) {
      const [rows] = await db.query('SELECT * FROM products');
      return res.json(rows || []);
    }

    // if productsFallback is empty, use the small productsMock for predictable UI
    if (!productsFallback || productsFallback.length === 0) {
      return res.json(productsMock || []);
    }

    return res.json(productsFallback || []);
  } catch (err) {
    console.error('Error fetching products:', err && err.message ? err.message : err);
    return res.status(500).json({ error: 'Error fetching products' });
  }
});

// Similarly, add endpoints for editing and deleting products
// And endpoints for managing manufacturers...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  if (!dbIsReal) {
    console.log('[server] Running in DB-fallback mode: safe for frontend/dev work but not for production.');
  }
});
