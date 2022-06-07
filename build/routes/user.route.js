"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controllers/user.controller");
var user = express_1.default.Router();
user.get('/', user_controller_1.getUsers);
user.get('/get-one', user_controller_1.getUser);
user.delete('/delete', user_controller_1.deleteUser);
exports.default = user;
