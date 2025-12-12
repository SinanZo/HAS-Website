// config/db.js
// Export a mutable DB wrapper. Start in fallback mode (safe for dev) and
// attempt to create a real mysql2 pool in the background. If successful,
// the wrapper is upgraded to forward to the real pool.promise().
const mysql = require("mysql2");

const db = {
  __isFallback: true,
  // query returns a [rows, fields] tuple like mysql2 promise API
  query: async (sql, params) => {
    const s = (sql || "").toString().trim().toUpperCase();
    if (s.startsWith("SELECT")) {
      return [[], []];
    }
    if (s.startsWith("INSERT") || s.startsWith("UPDATE") || s.startsWith("DELETE")) {
      return [{ affectedRows: 0, insertId: 0 }, []];
    }
    return [[], []];
  }
};

// Try to create a pool asynchronously and upgrade the db wrapper on success
(async function tryCreatePool() {
  try {
    const pool = mysql.createPool({
      host: process.env.MYSQL_HOST || "localhost",
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DATABASE || "safety_products",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Attach an error listener so pool errors don't crash the process
    pool.on && pool.on('error', (err) => {
      console.error('[db] Pool error:', err && err.message ? err.message : err);
    });

    // Verify connection by getting a connection; if it fails, we leave the fallback
    pool.getConnection((err, connection) => {
      if (err) {
        console.warn('[db] Could not connect to MySQL; staying in fallback mode.');
        console.warn('[db] Connection error:', err && err.message ? err.message : err);
        try { pool.end && pool.end(); } catch (e) {}
        return;
      }
      console.log('[db] Connected to MySQL database! Upgrading DB wrapper.');
      connection.release();

      // Upgrade wrapper to real pool.promise().query forwarding
      db.__isFallback = false;
      db.query = async (sql, params) => {
        return pool.promise().query(sql, params);
      };
    });
  } catch (err) {
    console.warn('[db] Exception while creating pool, staying in fallback mode:', err && err.message ? err.message : err);
  }
})();

module.exports = db;
