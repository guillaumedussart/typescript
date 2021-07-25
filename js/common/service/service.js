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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const unfetch_1 = __importDefault(require("unfetch"));
const user_1 = require("../model/user");
const config_1 = require("../config/config");
class Service {
    /**
     * create user
     * @param user
     */
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new user_1.User();
            model.setId(user.id);
            model.setNom(user.nom);
            model.setPrenom(user.prenom);
            const response = yield unfetch_1.default(config_1.config.baseUrlApiCollegue, {
                method: "post",
                body: JSON.stringify(model),
                headers: { "Content-Type": "application/json" }
            });
            return response.json();
        });
    }
    /**
     * find all user
     */
    findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield unfetch_1.default(config_1.config.baseUrlApiCollegue);
            const data = yield response.json();
            return data.filter(col => col.nom);
        });
    }
    /**
     * find user by id
     * @param id
     */
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield unfetch_1.default(config_1.config.baseUrlApiCollegue + id);
            const data = yield response.json();
            return data;
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userM = this.findUserById(user.id).then((userFind) => __awaiter(this, void 0, void 0, function* () {
                const model = new user_1.User();
                model.setNom(user.nom);
                model.setPrenom(user.prenom);
                const response = yield unfetch_1.default(config_1.config.baseUrlApiCollegue + user.id, {
                    method: "put",
                    body: JSON.stringify(model),
                    headers: { 'Content-Type': 'application/json' }
                });
                return response.json();
            }));
        });
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map