"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentations = void 0;
const service_1 = require("../common/service/service");
const tableCollegue = document.getElementById("tbody-collegue");
const form = document.getElementById("form-coll");
class Presentations {
    constructor() {
        this.service = new service_1.Service();
        // @ts-ignore
        //button.addEventListener("click", (e: Event) => this.demarrer());
        // tableCollegue.addEventListener("load",(e: Event) => this.getAllUser());
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
                tableCollegue.innerHTML += `<tr>
                                                  <td>${model.id}</td>
                                                  <td>${model.nom}</td>
                                                  <td>${model.prenom}</td>
                                                  <td>${model.email}</td>
                                                  <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.showOne(${model.id})}>Modifier</button></td>
                                            </tr>`;
            });
        });
    }
    showOne(id) {
        console.log(id);
        // @ts-ignore
        let formData = new FormData(form);
        formData.append("id", id);
    }
}
exports.Presentations = Presentations;
//# sourceMappingURL=presentations.js.map