"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUuid = void 0;
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
            throw new Error("MockUUID: Version " + uuidVersion + " is not supported");
        }
        if (variant < 0 || variant > 3) {
            throw new Error("MockUUID: Variant " + variant + " is not supported");
        }
        return this.getHexNumber(i * 5, 8, seed) + "-" + this.getHexNumber(i * 5 + 1, 4, seed) + "-" + uuidVersion + this.getHexNumber(i * 5 + 2, 3, seed) + "-" + ["8", "9", "a", "b"][variant] + this.getHexNumber(i * 5 + 3, 3, seed) + "-" + this.getHexNumber(i * 5 + 4, 12, seed);
    };
    mockUuid.getHexNumber = function (index, length, seed) {
        return Math.round(Math.abs(Math.sin(10 * (seed + index)) * (Math.pow(2, (length * 4)) - 1)))
            .toString(16)
            .padStart(length, "0");
    };
    return mockUuid;
}());
exports.mockUuid = mockUuid;
