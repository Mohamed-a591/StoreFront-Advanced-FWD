"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var ajv = new ajv_1.default();
var productProperties = {
    name: { type: 'string' },
    category: { type: 'string' },
    price: { type: 'number' },
    qty: { type: 'number' }
};
var productSchema = {
    type: 'object',
    properties: productProperties,
    required: ['name', 'category', 'price', 'qty']
};
var validator = ajv.compile(productSchema);
exports.default = validator;
