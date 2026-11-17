CREATE TABLE IF NOT EXISTS fields (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  price_per_hour NUMERIC(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS reservations (
  id SERIAL PRIMARY KEY,
  field_id INTEGER REFERENCES fields(id),
  customer_name VARCHAR(100) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO fields (name, price_per_hour) VALUES
  ('Lapangan A - Sintetis VIP', 150000.00),
  ('Lapangan B - Vinyl Standar', 120000.00),
  ('Lapangan C - Outdoor Reguler', 100000.00);