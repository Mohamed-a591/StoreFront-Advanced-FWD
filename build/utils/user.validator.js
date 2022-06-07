"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var ajv = new ajv_1.default();
var userProperties = {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    password: { type: 'string' }
};
var userSchema = {
    type: 'object',
    properties: userProperties,
    required: ['first_name', 'last_name', 'email', 'phone', 'password']
};
var validator = ajv.compile(userSchema);
exports.default = validator;
