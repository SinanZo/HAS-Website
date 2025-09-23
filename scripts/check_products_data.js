// Simple validation script for src/data/productsData.js
try {
  const data = require('../src/data/productsData.js').default || require('../src/data/productsData.js');
  if (!Array.isArray(data)) {
    console.error('FAIL: exported value is not an array');
    process.exit(2);
  }
  if (data.length === 0) {
    console.error('FAIL: products array is empty');
    process.exit(2);
  }
  // Spot-check first few entries for expected fields
  const sample = data.slice(0, 5).map((p, i) => ({ idx: i, id: p.id, name: p.name || null, image: p.image || null }));
  console.log('OK: products array looks good. count=' + data.length);
  console.log('SAMPLE:', JSON.stringify(sample, null, 2));
  process.exit(0);
} catch (err) {
  console.error('ERROR:', err && err.message ? err.message : err);
  process.exit(3);
}
