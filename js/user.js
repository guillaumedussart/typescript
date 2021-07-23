"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getNom = function () {
        return this.nom;
    };
    User.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    User.prototype.getPrenom = function () {
        return this.prenom;
    };
    User.prototype.setPrenom = function (prenom) {
        this.prenom = prenom;
    };
    return User;
}());
exports.User = User;
