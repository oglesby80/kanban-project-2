"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_js_1 = __importDefault(require("./auth-routes.js")); // Authentication routes
const ticket_routes_js_1 = require("./ticket-routes.js"); // Ticket-related routes
const user_routes_js_1 = require("./user-routes.js"); // User-related routes
const router = (0, express_1.Router)();
// Attach each route
router.use('/auth', auth_routes_js_1.default); // Authentication routes
router.use('/tickets', ticket_routes_js_1.ticketRouter); // Ticket-related routes
router.use('/users', user_routes_js_1.userRouter); // User-related routes
exports.default = router;
