# SmartPay Africa Architecture

SmartPay Africa is a cloud‑native payment service built with **Spring Boot**, **React**, and deployed on **OpenShift** with **PostgreSQL** as the database.

---

## System Overview

Frontend (React)  --->  Backend API (Spring Boot)  --->  PostgreSQL Database
|                         |
|                         v
|                  OpenShift Deployment & Route
|
User Interface


---

## Components

### 1. Backend (Spring Boot)
- REST API for transactions
- Health check endpoint (`/health`)
- Transaction CRUD endpoints (`/transactions`)
- JPA integration with PostgreSQL

### 2. Frontend (React)
- Dashboard UI for users
- Displays transaction history
- Connects to backend API via REST

### 3. Database (PostgreSQL)
- Stores transaction records
- Managed via OpenShift deployment
- Exposed internally via `postgres-service`

### 4. OpenShift Deployment
- **Backend Deployment**: Runs Spring Boot container
- **Postgres Deployment**: Runs PostgreSQL container
- **Services**: Expose backend and database
- **Route**: Provides external access to backend API

---

## Data Flow

1. User interacts with **React frontend**.
2. Frontend sends requests to **Spring Boot backend**.
3. Backend processes requests and interacts with **PostgreSQL**.
4. Responses are returned to frontend and displayed to the user.
5. OpenShift manages scaling, routing, and container orchestration.

---

## Key Endpoints

- `GET /health` → API health check
- `GET /transactions` → List all transactions
- `POST /transactions` → Create a new transaction

---

## Deployment Notes

- Backend and database are containerized and deployed via OpenShift.
- Environment variables configure database connection:
  - `SPRING_DATASOURCE_URL`
  - `SPRING_DATASOURCE_USERNAME`
  - `SPRING_DATASOURCE_PASSWORD`
- Route exposes backend API to external clients.

---

## Next Steps

- Add authentication & JWT security
- Implement transaction validation
- Expand frontend dashboard with charts and analytics
