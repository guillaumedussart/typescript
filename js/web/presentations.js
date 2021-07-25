"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentations = void 0;
const service_1 = require("../common/service/service");
const outputElement = document.getElementById('output');
const button = document.getElementById("coolbutton");
class Presentations {
    constructor() {
        this.service = new service_1.Service();
        // @ts-ignore
        //button.addEventListener("click", (e: Event) => this.demarrer());
    }
    myMethod(event) {
        alert(JSON.stringify(event));
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
                // @ts-ignore
                outputElement.innerHTML += `<li>${model.id} - ${model.nom} - ${model.prenom}</li>`;
            });
        });
    }
}
exports.Presentations = Presentations;
//# sourceMappingURL=presentations.js.map