"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v5 = exports.v4 = exports.v3 = exports.v2 = exports.mockUuid = void 0;
var mockUuid = /** @class */ (function () {
    function mockUuid() {
    }
    mockUuid.getIncrementalGenerator = function (seed, uuidVersion, variant) {
        var _this = this;
        if (seed === void 0) { seed = Math.E; }
        if (uuidVersion === void 0) { uuidVersion = 4; }
        if (variant === void 0) { variant = 1; }
        var i = 0;
        return function () { return _this.get(i++, seed, uuidVersion, variant); };
    };
    mockUuid.getGenerator = function (seed, uuidVersion, variant) {
        var _this = this;
        if (seed === void 0) { seed = Math.E; }
        if (uuidVersion === void 0) { uuidVersion = 4; }
        if (variant === void 0) { variant = 1; }
        return function (i) { return _this.get(i, seed, uuidVersion, variant); };
    };
    mockUuid.get = function (i, seed, uuidVersion, variant) {
        if (seed === void 0) { seed = Math.E; }
        if (uuidVersion === void 0) { uuidVersion = 4; }
        if (variant === void 0) { variant = 1; }
        if (uuidVersion < 2 || uuidVersion > 5) {
            throw new Error("Mock UUID: Version ".concat(uuidVersion, " is not supported"));
        }
        if (variant < 0 || variant > 3) {
            throw new Error("Mock UUID: Variant ".concat(variant, " is not supported"));
        }
        return "".concat(this.getHexNumber(i * 5, 8, seed), "-").concat(this.getHexNumber(i * 5 + 1, 4, seed), "-").concat(uuidVersion).concat(this.getHexNumber(i * 5 + 2, 3, seed), "-").concat(["8", "9", "a", "b"][variant]).concat(this.getHexNumber(i * 5 + 3, 3, seed), "-").concat(this.getHexNumber(i * 5 + 4, 12, seed));
    };
    mockUuid.getHexNumber = function (index, length, seed) {
        return Math.round(Math.abs(Math.sin(10 * (seed + index)) * (Math.pow(2, (length * 4)) - 1)))
            .toString(16)
            .padStart(length, "0");
    };
    return mockUuid;
}());
exports.mockUuid = mockUuid;
var v2Index = 0;
var v3Index = 0;
var v4Index = 0;
var v5Index = 0;
var v2 = function () { return mockUuid.get(v2Index++, Math.E, 2); };
exports.v2 = v2;
var v3 = function () { return mockUuid.get(v3Index++, Math.E, 3); };
exports.v3 = v3;
var v4 = function () { return mockUuid.get(v4Index++, Math.E, 4); };
exports.v4 = v4;
var v5 = function () { return mockUuid.get(v5Index++, Math.E, 5); };
exports.v5 = v5;
