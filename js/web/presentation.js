"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../common/service/service");
const template_1 = __importDefault(require("lodash/template"));
const outputElement = document.getElementById('output');
class Presentation {
    constructor() {
        this.service = new service_1.Service();
    }
    demarrer() {
        return this.getAllUser();
    }
    /**
     * get all user
     */
    getAllUser() {
        this.service.findAllUser().then((data) => {
            data.forEach((model) => {
                if (outputElement) {
                    var compiled = template_1.default(`
                            <h1><%- heading %></h1>
                                    Current date and time: <%- dateTimeString %>
                        `.trim());
                    outputElement.innerHTML = compiled({
                        heading: model.id,
                        dateTimeString: model.nom,
                    });
                }
            });
        });
    }
}
//# sourceMappingURL=presentation.js.map