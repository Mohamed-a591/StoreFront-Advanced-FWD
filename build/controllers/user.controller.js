"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.deleteUser = exports.getUser = exports.getUsers = void 0;
var user_model_1 = __importDefault(require("../models/user.model"));
var response_module_1 = require("../modules/response.module");
var getUsers = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var User, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                User = new user_model_1.default();
                return [4 /*yield*/, User.index()];
            case 1:
                users = _a.sent();
                res.json((0, response_module_1.handelResponse)(users.length ? users : 'not found 🤷‍♂️'));
                return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var User, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                User = new user_model_1.default();
                return [4 /*yield*/, User.selectOne(req.body.user_id)];
            case 1:
                user = _a.sent();
                res.json((0, response_module_1.handelResponse)(user.length ? user : 'not found 🤷‍♂️', 'User not exist'));
                return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var User, user_id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                User = new user_model_1.default();
                user_id = req.body.user_id;
                return [4 /*yield*/, User.selectOne(user_id)];
            case 1:
                user = _a.sent();
                if (!user.length) return [3 /*break*/, 3];
                return [4 /*yield*/, User.deleteUser(user_id)];
            case 2:
                _a.sent();
                res.json((0, response_module_1.handelResponse)(__assign({}, user[0]), 'User deleted successfuly 👌'));
                return [3 /*break*/, 4];
            case 3:
                res.json((0, response_module_1.handelResponse)('not found 🤷‍♂️', 'User not found'));
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
