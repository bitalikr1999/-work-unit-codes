"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception = /** @class */ (function () {
    function Exception(data) {
        this.data = data;
    }
    return Exception;
}());
exports.Exception = Exception;
/*
*
* Standart server response
*
*/
var SuccessResponse = /** @class */ (function () {
    function SuccessResponse(data) {
        this.data = data;
        this.success = true;
        this.code = 0;
    }
    return SuccessResponse;
}());
exports.SuccessResponse = SuccessResponse;
/*
* Validation error
*/
var ValidationException = /** @class */ (function (_super) {
    __extends(ValidationException, _super);
    function ValidationException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.success = false;
        _this.code = 1000;
        return _this;
    }
    return ValidationException;
}(Exception));
exports.ValidationException = ValidationException;
