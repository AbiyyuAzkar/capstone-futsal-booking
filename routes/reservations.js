const router = require('express').Router();
const pool = require('../db');

// Endpoint Ringan (Read)
router.get('/api/fields', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM fields ORDER BY id');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint Berat (Write + Cek Konflik)
router.post('/api/reservations', async (req, res) => {
  try {
    const { field_id, customer_name, start_time, end_time } = req.body;

    // Cek bentrok jadwal (Query OVERLAPS memakan waktu lebih lama)
    const conflict = await pool.query(
      `SELECT 1 FROM reservations
       WHERE field_id = $1
       AND (start_time, end_time) OVERLAPS ($2::timestamp, $3::timestamp)`,
      [field_id, start_time, end_time]
    );

    if (conflict.rowCount > 0) {
      return res.status(409).json({ error: 'Jadwal bentrok' });
    }

    const { rows } = await pool.query(
      `INSERT INTO reservations (field_id, customer_name, start_time, end_time)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [field_id, customer_name, start_time, end_time]
    );

    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;