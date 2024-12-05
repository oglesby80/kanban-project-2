import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models/user.js'; // Adjust import based on your structure
const authRouter = Router();
// POST /auth/login
authRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the user exists
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid login credentials' });
        }
        // Generate a JWT
        const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
            expiresIn: '1h',
        });
        // Send the token back to the client
        res.status(200).json({ token });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
export default authRouter;
