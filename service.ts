import fetch from 'node-fetch';
import {User,UserJSON} from "./user";

export class Service {
    constructor() {
    }

    /**
     * create user
     * @param user
     */
    async createUser(user:UserJSON) {
        const model = new User();
        model.setId(user.id);
        model.setNom(user.nom);
        model.setPrenom(user.prenom);
        const response = await fetch("https://c1.cleverapps.io/collegues", {
                method: "post",
                body: JSON.stringify(model),
                headers: {"Content-Type": "application/json"}
            }
        );
        return response;
    }

    /**
     * find all user
     */
    async findAllUser() {
        const response = await fetch("https://c1.cleverapps.io/collegues" );
        const data:UserJSON[] = await response.json();
        return data;
    }

    /**
     * find user by id
     * @param id
     */
    async findUserById(id:string) {
        const response = await fetch("https://c1.cleverapps.io/collegues/"+id );
        const data:User = await response.json();
        return data;

    }


    async updateUser(user:UserJSON){
        const userM = this.findUserById(user.id).then(async (userFind) => {
            const model =new User();
            model.setNom(user.nom);
            model.setPrenom(user.prenom);
            const response = await fetch("https://c1.cleverapps.io/collegues/"+user.id, {
                    method: "put",
                    body: JSON.stringify(model),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            return response;
        })
    }

}