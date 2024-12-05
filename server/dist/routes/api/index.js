import { Router } from 'express';
import authRoutes from './auth-routes.js'; // Authentication routes
import { ticketRouter } from './ticket-routes.js'; // Ticket-related routes
import { userRouter } from './user-routes.js'; // User-related routes
const router = Router();
// Attach each route
router.use('/auth', authRoutes); // Authentication routes
router.use('/tickets', ticketRouter); // Ticket-related routes
router.use('/users', userRouter); // User-related routes
export default router;
