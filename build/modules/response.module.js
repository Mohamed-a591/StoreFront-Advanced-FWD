"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelResponse = void 0;
var handelResponse = function (data, massage, status) {
    if (massage === void 0) { massage = 'Ok'; }
    if (status === void 0) { status = 200; }
    var response = {
        massage: massage,
        status: status,
        data: data
    };
    return response;
};
exports.handelResponse = handelResponse;
