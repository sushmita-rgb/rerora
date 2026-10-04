# Dremo Fullstack Workspace (Next.js + Express)

A modern fullstack web application directory structure featuring a decoupled **Next.js (App Router)** frontend and **Node.js (Express)** backend.

## 📁 Directory Structure Overview

```
dremo/
├── frontend/                     # Next.js App Router Client Application
│   ├── app/                      # Next.js App Directory
│   │   ├── layout.js             # Root layout & Google Fonts configuration
│   │   ├── page.js               # Home page client component
│   │   └── globals.css           # Modern design system & glassmorphic styles
│   ├── components/               # Reusable UI components
│   │   ├── Navbar.jsx            # Header navigation & server health badge
│   │   ├── Hero.jsx              # Hero section with dynamic gradient text
│   │   ├── StatusCard.jsx        # Architecture status cards grid
│   │   ├── ItemManager.jsx       # Interactive REST API CRUD tester
│   │   └── Footer.jsx            # Footer component
│   ├── services/
│   │   └── api.js                # API fetch helper for Express backend
│   ├── next.config.js            # Next.js configuration & API rewrites proxy
│   └── package.json              # Next.js dependencies
│
├── backend/                      # Node.js (Express) REST API Service
│   ├── src/
│   │   ├── config/
│   │   │   └── env.js            # Environment config loader
│   │   ├── controllers/          # Business logic controllers
│   │   │   ├── healthController.js
│   │   │   └── itemController.js
│   │   ├── middleware/           # Express middleware (Error handling)
│   │   │   └── errorHandler.js
│   │   ├── routes/               # API endpoint routers
│   │   │   ├── healthRoutes.js
│   │   │   └── itemRoutes.js
│   │   └── app.js                # Express app & route definitions
│   ├── server.js                 # Server entry point
│   ├── .env                      # Local environment configuration
│   ├── .env.example              # Environment template
│   └── package.json              # Backend dependencies
│
├── .gitignore                    # Global git ignore file
├── package.json                  # Root monorepo script runner
└── README.md                     # Documentation
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Run the following command at the root directory:
```bash
npm run install:all
```

### 2. Start Development Servers
To run both **Next.js** (port 3000) and **Express API** (port 5000) concurrently:
```bash
npm run dev
```

Alternatively, run them separately:
- **Backend**: `npm run dev:backend` (runs on `http://localhost:5000`)
- **Frontend (Next.js)**: `npm run dev:frontend` (runs on `http://localhost:3000`)

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status & uptime |
| `GET` | `/api/items` | Fetch all items |
| `POST` | `/api/items` | Create new item (`title`, `category`) |
| `DELETE` | `/api/items/:id` | Remove item by ID |
