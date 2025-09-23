const db = require("../config/db");

// GET all manufacturers
exports.getAllManufacturers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM manufacturers");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET manufacturer by name
exports.getManufacturerByName = async (req, res) => {
  try {
    const { manufacturerName } = req.params;
    const [rows] = await db.query("SELECT * FROM manufacturers WHERE name = ?", [manufacturerName]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
