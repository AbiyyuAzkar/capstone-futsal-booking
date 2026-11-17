# Sistem Reservasi Lapangan Futsal — Capstone Project Komputasi Awan

RESTful API untuk layanan reservasi lapangan futsal berbasis arsitektur multi-container di atas Virtual Private Server (VPS) Ubuntu[cite: 2, 4]. Proyek ini mengimplementasikan horizontal scaling, load balancing, otomatisasi CI/CD, observability real-time, serta hardening keamanan berlapis[cite: 13, 14].

## Arsitektur & Stack Teknologi

- **Runtime & Framework:** Node.js 20 LTS + Express.js 4[cite: 11]
- **Database:** PostgreSQL 16 (`postgres:16-alpine`) dengan Sequelize ORM & validasi jadwal bentrok (`OVERLAPS`)[cite: 3, 11]
- **Reverse Proxy & Load Balancer:** Nginx (`nginx:alpine`) dengan 2 container backend (`app1`, `app2`) menggunakan algoritma **Least Connection** (`least_conn`)[cite: 4, 11]
- **Containerization:** Docker & Docker Compose[cite: 11]
- **CI/CD Pipeline:** GitHub Actions (Build, Syntax Test, & Automated SSH Deploy)[cite: 11]
- **Monitoring & Observability:** Prometheus + Node Exporter + Grafana (CPU, RAM, Disk, Network)[cite: 11, 13]
- **Security & Hardening:** SSH Key-Only, UFW Firewall (22, 80, 443), Fail2Ban, TLS/SSL, Helmet.js, & Nginx Security Headers[cite: 6, 11]

## Struktur Repositori

```text
capstone-futsal-booking/
├── .github/workflows/deploy.yml   # Pipeline CI/CD GitHub Actions
├── src/                           # Source code aplikasi Node.js & Express
├── .env.example                   # Template variabel lingkungan
├── .gitignore                     # Pengecualian file sensitif (.env, kunci SSH/SSL)
├── Dockerfile                     # Image builder aplikasi Node.js 20
├── docker-compose.yml             # Orkestrasi 7 container (db, app1, app2, nginx, monitoring)
├── nginx.conf                     # Konfigurasi Reverse Proxy, TLS & Load Balancer
├── prometheus.yml                 # Konfigurasi target scraping metrik server
└── risk-register.md               # Analisis 5 risiko keamanan (P x I) & mitigasi