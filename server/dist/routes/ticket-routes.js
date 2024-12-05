"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketRouter = void 0;
const express_1 = require("express");
const ticketRouter = (0, express_1.Router)();
exports.ticketRouter = ticketRouter;
// Example GET route for tickets
ticketRouter.get('/', (req, res) => {
    res.json({ message: 'All tickets' });
});
// Example POST route for creating a ticket
ticketRouter.post('/', (req, res) => {
    const { name, description } = req.body;
    res.json({ message: `Ticket created: ${name}`, description });
});
