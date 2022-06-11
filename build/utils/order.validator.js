"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var ajv = new ajv_1.default();
var orderProperties = {
    status: { type: 'boolean' }
};
var orderSchema = {
    type: 'object',
    properties: orderProperties,
    required: ['status', 'products']
};
var validator = ajv.compile(orderSchema);
exports.default = validator;
