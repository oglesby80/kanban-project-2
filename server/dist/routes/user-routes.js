"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
// Example GET route for fetching all users
userRouter.get('/', (req, res) => {
    res.json({ message: 'All users fetched successfully.' });
});
// Example POST route for creating a new user
userRouter.post('/', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `User created: ${username}` });
});
// Example GET route for fetching a user by ID
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User with ID: ${id} fetched successfully.` });
});
