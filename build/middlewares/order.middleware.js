"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMiddleWare = void 0;
var order_validator_1 = __importDefault(require("../utils/order.validator"));
var OrderMiddleWare = function (req, res, nxt) {
    var token = req.header('x-auth-token');
    try {
        /**
         * Get user id from token
         */
        // const decodePayload = jwt.decode(String(token))
        // req.body.jwt_payload = decodePayload
        /**
         * Validate req data
         */
        var valid = (0, order_validator_1.default)(req.body);
        if (valid) {
            req.body.valid = 1;
        }
        else {
            return res.status(400).json(order_validator_1.default.errors);
        }
        nxt();
    }
    catch (error) {
        return res.status(403).json({ massage: 'Invalid order data' });
    }
};
exports.OrderMiddleWare = OrderMiddleWare;
