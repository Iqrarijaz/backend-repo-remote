import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        // Here you can add logic to validate the token
        // For example, using Firebase Admin SDK to verify token
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

export default authMiddleware;
