import { Router } from 'express';

const userRouter = Router();

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

export { userRouter };
