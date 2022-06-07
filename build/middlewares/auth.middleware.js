"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission = exports.AuthMiddleWare = void 0;
var auth_validator_1 = __importDefault(require("../utils/auth.validator"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var AuthMiddleWare = function (req, res, nxt) {
    var valid = (0, auth_validator_1.default)(req.body);
    if (valid) {
        req.body.valid = 1;
        nxt();
    }
    else {
        res.status(400).json(auth_validator_1.default.errors);
    }
};
exports.AuthMiddleWare = AuthMiddleWare;
var permission = function (req, res, nxt) {
    var token = req.header('x-auth-token');
    try {
        var decodePayload = jsonwebtoken_1.default.verify(String(token), String(process.env.TOKENSECRT));
        var payload = jsonwebtoken_1.default.decode(String(token));
        req.body.jwt_payload = payload;
        nxt();
    }
    catch (error) {
        return res.status(403).json({ massage: 'Invalid Token' });
    }
};
exports.permission = permission;
