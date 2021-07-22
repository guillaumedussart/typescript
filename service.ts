import fetch from 'node-fetch';
import {Model} from "./model";

export class Service {
    constructor() {
    }

    async findAllUser() {

        const response = await fetch("https://c1.cleverapps.io/collegues" );

        const data:Model[] = await response.json();
        return data;

    }
    async findUserById(id:number) {

        const response = await fetch("https://c1.cleverapps.io/collegues/"+id );

        const data:Model = await response.json();
        return data;

    }

    async createUser(id: number, nom: string, prenom: string) {
        const model = new Model({id:id,nom:nom,prenom:prenom});

        const response = await fetch("https://c1.cleverapps.io/collegues", {
                method: "post",
                body: JSON.stringify(model),
                headers: {'Content-Type': 'application/json'}
            }
        );
        const data = await response.json();

        console.log("User cree");
    }

    async updateUser(id:number,nom:string,prenom:string){
        const userM = this.findUserById(id).then(async (user) => {
            const model = {
                nom:nom
            }
            const response = await fetch("https://c1.cleverapps.io/collegues/"+id, {
                    method: "post",
                    body: JSON.stringify(user),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            const data = await response.json();

            console.log("User mis a jour");
        })
    }

}