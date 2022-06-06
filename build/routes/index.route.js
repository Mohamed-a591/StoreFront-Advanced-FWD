"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index = express_1.default.Router();
index.get('/', function (_req, res) {
    res.status(200).json({
        massage: 'Hello World 💙'
    });
});
exports.default = index;
