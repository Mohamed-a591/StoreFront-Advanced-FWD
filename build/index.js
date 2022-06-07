"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv = __importStar(require("dotenv"));
var user_route_1 = __importDefault(require("./routes/user.route"));
var product_route_1 = __importDefault(require("./routes/product.route"));
var order_route_1 = __importDefault(require("./routes/order.route"));
var index_route_1 = __importDefault(require("./routes/index.route"));
var auth_route_1 = __importDefault(require("./routes/auth.route"));
var auth_middleware_1 = require("./middlewares/auth.middleware");
dotenv.config();
var PORT = process.env.PORT || 3000;
// create an instance server
var app = (0, express_1.default)();
// HTTP request logger middleware
app.use((0, morgan_1.default)('dev'));
// app.use(morgan('short'))
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Use routes
app.use('/', index_route_1.default);
app.use('/api', auth_route_1.default);
app.use(auth_middleware_1.permission);
app.use('/api/users', user_route_1.default);
app.use('/api/products', product_route_1.default);
app.use('/api/orders', order_route_1.default);
// start express server
app.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
exports.default = app;
