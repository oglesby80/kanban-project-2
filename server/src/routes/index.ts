import { Router } from 'express';
import path from 'path';
console.log('Resolved Path:', path.resolve('./routes/auth-routes.js'));

import authRoutes from './auth-routes.js';
import apiRoutes from './api/index';
import { authenticateToken } from '../middleware/auth'; // Ensure the path is correct

const router = Router();

// Public routes (authentication)
router.use('/auth', authRoutes);

// Protected routes (requires authentication)
router.use('/api', authenticateToken, apiRoutes);

export default router;

