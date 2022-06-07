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
exports.deleteProduct = exports.addProduct = exports.getProductsByCategoryName = exports.getProductsById = exports.getProducts = void 0;
var product_model_1 = __importDefault(require("../models/product.model"));
var response_module_1 = require("../modules/response.module");
var Product = new product_model_1.default();
var getProducts = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product.index()];
            case 1:
                products = _a.sent();
                res.json((0, response_module_1.handelResponse)(products.length ? products : 'No products found 🤷‍♂️'));
                return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
var getProductsById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.body.product_id;
                if (!productId)
                    return [2 /*return*/, res.json((0, response_module_1.handelResponse)([], 'product_id required'))];
                return [4 /*yield*/, Product.selectById(productId)];
            case 1:
                products = _a.sent();
                res.json((0, response_module_1.handelResponse)(products.length ? products[0] : 'No products found 🤷‍♂️'));
                return [2 /*return*/];
        }
    });
}); };
exports.getProductsById = getProductsById;
var getProductsByCategoryName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productCategoryName, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productCategoryName = req.body.category_name;
                if (!productCategoryName)
                    return [2 /*return*/, res.json((0, response_module_1.handelResponse)([], 'category_name required'))];
                return [4 /*yield*/, Product.selectByCategoryName(productCategoryName)];
            case 1:
                products = _a.sent();
                res.json((0, response_module_1.handelResponse)(products.length ? products : 'No products found 🤷‍♂️'));
                return [2 /*return*/];
        }
    });
}); };
exports.getProductsByCategoryName = getProductsByCategoryName;
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productData = req.body;
                return [4 /*yield*/, Product.create(productData)];
            case 1:
                _a.sent();
                if (!req.body.valid)
                    return [2 /*return*/, res.json((0, response_module_1.handelResponse)([], 'invalide response', 400))];
                res.json((0, response_module_1.handelResponse)(productData, 'Product added successfuly', 200));
                return [2 /*return*/];
        }
    });
}); };
exports.addProduct = addProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, productDetails;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.body.product_id;
                if (!productId)
                    return [2 /*return*/, res.status(400).json((0, response_module_1.handelResponse)([], 'product_id required', 400))];
                return [4 /*yield*/, Product.selectById(productId)];
            case 1:
                productDetails = _a.sent();
                if (!productDetails.length) return [3 /*break*/, 3];
                return [4 /*yield*/, Product.delete(productId)];
            case 2:
                _a.sent();
                return [2 /*return*/, res.json((0, response_module_1.handelResponse)(productDetails, 'Product deleted successfuly', 200))];
            case 3: return [2 /*return*/, res.status(400).json((0, response_module_1.handelResponse)([], 'Product not found', 400))];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
