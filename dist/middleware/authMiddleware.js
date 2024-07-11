"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        // Here you can add logic to validate the token
        // For example, using Firebase Admin SDK to verify token
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};
exports.default = authMiddleware;
