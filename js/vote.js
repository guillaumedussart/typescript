"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
var Vote = /** @class */ (function () {
    function Vote() {
    }
    Vote.prototype.getCollegueId = function () {
        return this.collegue_id;
    };
    Vote.prototype.setCollegueId = function (collegue_id) {
        this.collegue_id = collegue_id;
    };
    Vote.prototype.getLike = function () {
        return this.like;
    };
    Vote.prototype.setLike = function (like) {
        this.like = like;
    };
    return Vote;
}());
exports.Vote = Vote;
