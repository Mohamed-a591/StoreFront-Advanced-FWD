"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = exports.getOrdersByUserId = exports.getOrders = void 0;
var cart_model_1 = __importDefault(require("../models/cart.model"));
var order_model_1 = __importDefault(require("../models/order.model"));
var response_module_1 = require("../modules/response.module");
var Order = new order_model_1.default();
var Cart = new cart_model_1.default();
var getOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Order.index(Number(req.body.jwt_payload.userid))];
            case 1:
                orders = _a.sent();
                res.json((0, response_module_1.handelResponse)(orders.length ? orders : 'No orders found 🤷‍♂️'));
                return [2 /*return*/];
        }
    });
}); };
exports.getOrders = getOrders;
var getOrdersByUserId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, orders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_id = req.body.jwt_payload.userid;
                if (!user_id)
                    return [2 /*return*/, res.json((0, response_module_1.handelResponse)([], 'user not valid'))];
                return [4 /*yield*/, Order.selectByUserId(user_id, req.body.order_id)];
            case 1:
                orders = _a.sent();
                res.json((0, response_module_1.handelResponse)(orders.length ? orders : 'No orders found 🤷‍♂️'));
                return [2 /*return*/];
        }
    });
}); };
exports.getOrdersByUserId = getOrdersByUserId;
var addOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderData, products, order_id, i, row, cart, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                orderData = {
                    user_id: req.body.jwt_payload.userid,
                    status: req.body.status
                };
                products = req.body.products;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                return [4 /*yield*/, Order.create(orderData)];
            case 2:
                order_id = _a.sent();
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < products.length)) return [3 /*break*/, 6];
                row = {
                    order_id: Number(order_id[0].id),
                    product_id: products[i].id,
                    qty: products[i].qty
                };
                return [4 /*yield*/, Cart.insert(row)];
            case 4:
                cart = _a.sent();
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 3];
            case 6:
                // if (!req.body.valid) return res.json(handelResponse([], 'invalide response', 400))
                res.json((0, response_module_1.handelResponse)(orderData, 'Product added successfuly', 200));
                return [3 /*break*/, 8];
            case 7:
                error_1 = _a.sent();
                throw Error("Add order erro: ".concat(error_1));
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.addOrder = addOrder;
