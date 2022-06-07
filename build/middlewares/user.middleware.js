"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleWare = void 0;
var user_validator_1 = __importDefault(require("../utils/user.validator"));
var UserMiddleWare = function (req, res, nxt) {
    var valid = (0, user_validator_1.default)(req.body);
    if (valid) {
        req.body.valid = 1;
        nxt();
    }
    else {
        res.status(400).json(user_validator_1.default.errors);
    }
};
exports.UserMiddleWare = UserMiddleWare;
