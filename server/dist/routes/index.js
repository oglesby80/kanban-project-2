"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_js_1 = __importDefault(require("./api/auth-routes.js")); // Ensure this path is correct
const auth_js_1 = require("../middleware/auth.js"); // Middleware for authentication
const index_js_1 = __importDefault(require("./api/index.js")); // Import all routes under `/api`
const router = (0, express_1.Router)();
// Public routes (e.g., authentication)
router.use('/auth', auth_routes_js_1.default);
// Protected API routes (require authentication)
router.use('/api', auth_js_1.authenticateToken, index_js_1.default);
exports.default = router;
