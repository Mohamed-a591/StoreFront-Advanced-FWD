"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var ajv = new ajv_1.default();
var userProperties = {
    email: { type: 'string' },
    password: { type: 'string' }
};
var userSchema = {
    type: 'object',
    properties: userProperties,
    required: ['email', 'password']
};
var validator = ajv.compile(userSchema);
exports.default = validator;
