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
var db_config_1 = __importDefault(require("../../config/db.config"));
var user_model_1 = __importDefault(require("../../models/user.model"));
var User = new user_model_1.default();
describe('User Model', function () {
    describe('Test method define', function () {
        it('Expect methods [index, insertUser, selectOne, deleteUser] to be defined', function () {
            expect(User.index).toBeDefined();
            expect(User.insertUser).toBeDefined();
            expect(User.selectOne).toBeDefined();
            expect(User.deleteUser).toBeDefined();
        });
    });
    describe('Auth functionalty', function () {
        var userInfo = {
            first_name: 'Mohamed',
            last_name: 'Abdel-Samie',
            email: 'mohamed.abdelsamie3009@gmail.com',
            phone: '01111346560',
            password: 'mo123'
        };
        beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.insertUser(userInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Expect return the same user data by email', function () { return __awaiter(void 0, void 0, void 0, function () {
            var selectUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.selectOne(undefined, String(userInfo.email))];
                    case 1:
                        selectUser = _a.sent();
                        expect(selectUser[0].first_name).toEqual(userInfo.first_name);
                        expect(selectUser[0].last_name).toEqual(userInfo.last_name);
                        expect(selectUser[0].email).toEqual(userInfo.email);
                        expect(selectUser[0].phone).toEqual(userInfo.phone);
                        userInfo.id = selectUser[0].id;
                        return [2 /*return*/];
                }
            });
        }); });
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var conn, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_config_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = "DELETE FROM orders WHERE user_id=".concat(userInfo.id);
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        _a.sent();
                        sql = "DELETE FROM users WHERE id=".concat(userInfo.id);
                        return [4 /*yield*/, conn.query(sql)];
                    case 3:
                        _a.sent();
                        conn.release();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
