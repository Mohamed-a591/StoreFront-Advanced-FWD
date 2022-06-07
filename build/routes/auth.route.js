"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_controller_1 = require("../controllers/auth.controller");
var user_middleware_1 = require("../middlewares/user.middleware");
var auth_middleware_1 = require("../middlewares/auth.middleware");
var auth = express_1.default.Router();
auth.post('/register', user_middleware_1.UserMiddleWare, auth_controller_1.registerUser);
auth.post('/login', auth_middleware_1.AuthMiddleWare, auth_controller_1.loginUser);
exports.default = auth;
