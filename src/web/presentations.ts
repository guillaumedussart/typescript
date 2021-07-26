import {Service} from "../common/service/service";


const tableCollegue = document.getElementById("tbody-collegue");
const form = document.getElementById("form-coll");

export class Presentations {
    private service: Service;

    constructor() {
        this.service = new Service();
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
            })
        });
    }
    showOne(id:string){

        console.log(id);
        // @ts-ignore
        let formData: FormData = new FormData(form);
        formData.append("id",id);
    }

}
