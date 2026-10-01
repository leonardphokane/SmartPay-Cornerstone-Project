# SmartPay Africa

Cloud‑Native Payment Service built with **Spring Boot**, **React**, and deployed on **OpenShift** with **PostgreSQL**.

---

## 📂 Project Structure

smartpay-africa/
├── backend/       # Spring Boot API
├── frontend/      # React dashboard
├── docs/          # Architecture & documentation
└── openshift/     # Deployment manifests


---

## 🚀 Features
- **Backend API**: Transaction endpoints, health check, JPA integration
- **Frontend UI**: React dashboard for payments
- **Database**: PostgreSQL containerized in OpenShift
- **Cloud Deployment**: OpenShift manifests for backend, DB, and route

---

## ⚙️ Quick Start

### Backend
```bash
cd backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm start
```
### 🔗 Endpoints

- GET /health → API health check

- GET /transactions → List all transactions

- POST /transactions → Create a new transaction

### 📖 Documentation

**Architecture:** See docs/architecture.md for system design, service interactions, and deployment details.

**API Reference:** The backend exposes a Swagger UI for interactive testing.

Start the backend (mvn spring-boot:run)

Open http://localhost:8080/swagger-ui.html (localhost in Bing)

Explore endpoints (/health, /transactions, etc.) directly in the browser.

**Screenshots:**
[Looks like the result wasn't safe to show. Let's switch things up and try something else!]

Additional guides in docs/ cover:

**Deployment Guide** – OpenShift setup and scaling

**Frontend Guide** – React dashboard structure and styling

© 2026 Leonard Phokane
