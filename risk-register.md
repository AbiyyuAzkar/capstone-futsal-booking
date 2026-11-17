# Risk Register — Capstone Project: Reservasi Lapangan Futsal

| No | Risiko | Probabilitas (1-5) | Dampak (1-5) | Skor (P x I) | Mitigasi |
| :---: | :--- | :---: | :---: | :---: | :--- |
| 1 | Brute-force SSH | 4 | 4 | 16 | SSH key-only, fail2ban, UFW batasi port 22 |
| 2 | SQL Injection pada form booking | 3 | 5 | 15 | Gunakan parameterized query `$1, $2` pada `pg` |
| 3 | Satu container app mati | 3 | 3 | 9 | Nginx Load Balancer otomatis alihkan ke container lain |
| 4 | Data terhapus tidak sengaja | 2 | 5 | 10 | Backup manual harian menggunakan `pg_dump` |
| 5 | Kebocoran kredensial DB | 2 | 5 | 10 | Simpan password di `.env`, masukkan `.env` ke `.gitignore` |