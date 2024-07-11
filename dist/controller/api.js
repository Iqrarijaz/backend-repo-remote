"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const firebaseConfig_js_1 = require("../config/firebaseConfig.js"); // Updated import statement
const _ApiError_js_1 = __importDefault(require("../entities/ ApiError.js"));
const updateUserData = async (req, res) => {
    try {
        const { userId, userData } = req.body;
        await firebaseConfig_js_1.db.collection('USERS').doc(userId).set(userData, { merge: true });
        res.status(200).send({ message: 'User data updated successfully' });
    }
    catch (error) {
        res.status(500).send(new _ApiError_js_1.default('Internal Server Error', 500, error.message));
    }
};
exports.updateUserData = updateUserData;
const fetchUserData = async (req, res) => {
    try {
        const { userId } = req.params;
        const userDoc = await firebaseConfig_js_1.db.collection('USERS').doc(userId).get();
        if (!userDoc.exists) {
            res.status(404).send(new _ApiError_js_1.default('User not found', 404));
        }
        else {
            res.status(200).send(userDoc.data());
        }
    }
    catch (error) {
        res.status(500).send(new _ApiError_js_1.default('Internal Server Error', 500, error.message));
    }
};
exports.fetchUserData = fetchUserData;
