import { Router } from 'express';
import authRoutes from './api/auth-routes.js'; // Ensure this path is correct
import { authenticateToken } from '../middleware/auth.js'; // Middleware for authentication
import apiRoutes from './api/index.js'; // Import all routes under `/api`

const router = Router();

// Public routes (e.g., authentication)
router.use('/auth', authRoutes);

// Protected API routes (require authentication)
router.use('/api', authenticateToken, apiRoutes);



export default router;

