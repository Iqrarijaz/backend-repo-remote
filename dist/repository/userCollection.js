"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebaseConfig_1 = require("../config/firebaseConfig");
const userCollection = firebaseConfig_1.db.collection('USERS');
exports.default = userCollection;
