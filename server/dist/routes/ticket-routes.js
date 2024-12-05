import { Router } from 'express';
const ticketRouter = Router();
// Example GET route for tickets
ticketRouter.get('/', (req, res) => {
    res.json({ message: 'All tickets' });
});
// Example POST route for creating a ticket
ticketRouter.post('/', (req, res) => {
    const { name, description } = req.body;
    res.json({ message: `Ticket created: ${name}`, description });
});
export { ticketRouter };
