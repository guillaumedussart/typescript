import {Service} from "../common/service/service";
import {UserJSON, User} from "../common/model/user";
import template from "lodash/template";


const outputElement = document.getElementById('output');

const button = document.getElementById("coolbutton");

export class Presentations {
    private service: Service;
    // @ts-ignore
    private user: UserJSON;

    constructor() {
        this.service = new Service();
        // @ts-ignore
        //button.addEventListener("click", (e: Event) => this.demarrer());

    }
    private myMethod(event:any):void
    {
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
            })
        });
    }
}