import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  pool.query(
    'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
    [name, email, message],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.json({ success: false });
      }
      res.json({ success: true });
    }
  );
});
