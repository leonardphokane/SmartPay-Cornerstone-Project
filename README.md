# SmartPay Africa

Cloud-Native Payment Service built with **Spring Boot**, **React**, **PostgreSQL**, and deployed on **Red Hat OpenShift**.

Developed as a Cornerstone Project demonstrating modern cloud-native application development, containerization, API-driven architecture, and scalable deployment patterns for the Financial Services sector.

---

## 🎯 Cornerstone Project Alignment

### Pathway
Cloud-Native Toolkit / OpenShift

### Sector
Financial Services (FinTech)

### Audience Feature
Internal Analytics

### Problem Statement

Financial institutions require secure, scalable, and reliable platforms to manage payment transactions while providing operational visibility into transaction activity.

SmartPay Africa addresses this challenge through a cloud-native payment platform that enables transaction management, account visibility, payment processing workflows, and analytics-ready operational monitoring.

### Solution Overview

SmartPay Africa demonstrates how a modern payment platform can be built using cloud-native technologies and deployed within an OpenShift environment.

The solution provides:

- Payment transaction management
- RESTful API services
- Real-time transaction visibility
- Cloud-native deployment architecture
- Containerized database services
- Operational analytics dashboard

---

## 🏗️ Architecture

```text
┌─────────────────┐
│   React UI      │
│ Payment Portal  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Spring Boot API │
│ Business Logic  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ PostgreSQL DB   │
│ Transactions    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ OpenShift       │
│ Deployment      │
└─────────────────┘
```

---

## 📂 Project Structure

```text
smartpay-africa/
├── backend/          # Spring Boot API
├── frontend/         # React dashboard
├── docs/             # Architecture & project documentation
├── openshift/        # Kubernetes/OpenShift manifests
└── images/           # Screenshots and project assets
```

---

## 🚀 Features

### Backend API

- Spring Boot REST services
- Transaction management endpoints
- Health monitoring endpoint
- JPA/Hibernate integration
- PostgreSQL persistence layer

### Frontend Dashboard

- React-based payment management interface
- Transaction monitoring
- Account visibility
- Payment workflow visualization
- Administrative dashboard

### Database

- PostgreSQL deployment
- Containerized database services
- Persistent transaction storage

### Cloud-Native Deployment

- OpenShift deployment manifests
- Backend deployment configuration
- PostgreSQL deployment configuration
- Service definitions
- Route exposure

---

## 📊 Audience Feature: Internal Analytics

The SmartPay Africa dashboard provides operational insights designed for internal business users.

Analytics capabilities include:

- Transaction monitoring
- Payment activity visibility
- Account-level reporting
- Operational diagnostics
- Service health monitoring
- Administrative transaction oversight

These features enable business stakeholders and administrators to monitor payment platform activity and operational performance.

---

## ⚙️ Technology Stack

### Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Maven

### Frontend

- React
- JavaScript
- CSS

### Database

- PostgreSQL

### Cloud Platform

- Red Hat OpenShift
- Containers
- Kubernetes Resources

---

## ⚙️ Quick Start

### Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

### Health Check

```http
GET /health
```

Verifies API availability.

### Get Transactions

```http
GET /transactions
```

Returns all stored transactions.

### Create Transaction

```http
POST /transactions
```

Creates a new payment transaction.

---

## 📖 API Documentation

Swagger UI is available after starting the backend application.

```text
http://localhost:8080/swagger-ui.html
```

Use Swagger UI to:

- Explore endpoints
- Test requests
- Review API schemas
- Validate responses

---

## ☁️ OpenShift Deployment

Deployment manifests are provided under:

```text
openshift/
├── backend-deployment.yaml
├── backend-service.yaml
├── postgres-deployment.yaml
├── postgres-service.yaml
└── route.yaml
```

These resources demonstrate:

- Containerized application deployment
- Service discovery
- Database connectivity
- Route management
- Cloud-native scaling patterns

---

## 📸 Screenshots

### Payment Dashboard

```text
images/smartpay-ui.jpeg
```

### Swagger API Documentation

```text
images/swagger-ui.jpeg
```

Additional deployment and architecture screenshots are available in the project documentation.

---

## 📚 Documentation

The `/docs` directory contains additional project resources:

### Architecture Guide

```text
docs/architecture.md
```

Covers:

- System architecture
- Component interactions
- Data flow
- Deployment model

### Deployment Guide

Documents:

- OpenShift setup
- Deployment procedures
- Configuration management
- Scaling strategies

### Frontend Guide

Documents:

- React application structure
- Component organization
- Styling approach
- Dashboard implementation

---

## 🎬 Demo Walkthrough

1. Launch PostgreSQL, Backend, and Frontend services
2. Open the SmartPay dashboard
3. Demonstrate transaction visibility
4. Show account and payment workflows
5. Test API endpoints using Swagger
6. Review OpenShift deployment manifests
7. Explain cloud-native architecture and scaling strategy

---

## 🚀 Future Enhancements

- IBM watsonx integration
- AI-powered fraud detection
- Predictive transaction analytics
- Real-time monitoring dashboards
- Event-driven payment processing
- CI/CD automation pipelines

---

## ✅ Cornerstone Deliverables

- Cloud-Native Application
- Spring Boot Backend
- React Frontend
- PostgreSQL Database
- OpenShift Deployment
- Documentation
- Architecture Design
- API Documentation
- Demonstration Walkthrough

---

## 👨🏾‍💻 Author

**Leonard Phokane**

Cornerstone Project Submission  
Cloud-Native Toolkit / OpenShift Pathway

© 2026 Leonard Phokane