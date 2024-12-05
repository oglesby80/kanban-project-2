import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"
    if (!token) {
        res.status(401).json({ message: 'Access Denied. No token provided.' });
        return; // Explicitly return to avoid TypeScript errors
    }
    try {
        const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Attach decoded user to the request
        next(); // Call the next middleware
    }
    catch (error) {
        console.error('Token verification error:', error);
        res.status(403).json({ message: 'Invalid or expired token.' });
    }
};
