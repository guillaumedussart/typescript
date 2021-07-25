import fetch from 'unfetch';

import {User,UserJSON} from "../model/user";
import {config} from "../config/config";

export class Service {


    /**
     * create user
     * @param user
     */
    async createUser(user:UserJSON):Promise<User> {
        const model = new User();
        model.setId(user.id);
        model.setNom(user.nom);
        model.setPrenom(user.prenom);
        const response = await fetch(config.baseUrlApiCollegue, {
                method: "post",
                body: JSON.stringify(model),
                headers: {"Content-Type": "application/json"}
            }
        );
        return response.json();
    }

    /**
     * find all user
     */
    async findAllUser():Promise<UserJSON[]> {
        const response = await fetch(config.baseUrlApiCollegue );
        const data:UserJSON[] = await response.json();
        return data.filter(col=>col.nom);
    }

    /**
     * find user by id
     * @param id
     */
    async findUserById(id:string):Promise<User> {
        const response = await fetch(config.baseUrlApiCollegue+id );
        const data:User = await response.json();
        return data;
    }


    async updateUser(user:UserJSON){
        const userM = this.findUserById(user.id).then(async (userFind) => {
            const model =new User();
            model.setNom(user.nom);
            model.setPrenom(user.prenom);
            const response = await fetch(config.baseUrlApiCollegue+user.id, {
                    method: "put",
                    body: JSON.stringify(model),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            return response.json();
        })
    }

}