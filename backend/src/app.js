import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/healthRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { config } from './config/env.js';

const app = express();

// Middleware
app.use(cors({ origin: config.clientOrigin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api', healthRoutes);
app.use('/api', itemRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Dremo API Server',
    documentation: '/api/health',
  });
});

// Error handling middleware
app.use(errorHandler);

export default app;
