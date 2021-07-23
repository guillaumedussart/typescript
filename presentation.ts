import {Service} from "./service";
import {UserJSON,User} from "./user";

const readLineSync = require('readline-sync');

export class Presentation {
    private service:Service;
    // @ts-ignore
    private user:UserJSON;
    constructor() {
        this.service = new Service();
    }

    demarrer() {
        let readUser;
        while (readUser != "99") {
            console.log("1. Lister les collegues");
            console.log("2. Créer un collègue");
            console.log("3. Modifier la photo d'un collègue");
            console.log("4. Voter");
            console.log("5. Classement");
            console.log("99. Sortir");
            readUser = readLineSync.question("Faites votre choix : \n");
            if (readUser == "1") {

                return this.getAllUser();
            } else if (readUser == "2") {
                let choiseId;
                choiseId = readLineSync.question("Entrez son id : \n");
                let choiceName;
                choiceName = readLineSync.question("Entrez son nom : \n");
                let choiceFirstName;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                this.user = {
                    nom:choiceName,
                    prenom:choiceFirstName,
                    id:choiseId
                }
                return this.createUser(this.user);
            } else if(readUser == "3"){
                let choiseId;
                choiseId = readLineSync.question("Entrez son id : \n");
                let choiceName;
                choiceName = readLineSync.question("Entrez son nom : \n");
                let choiceFirstName;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                this.user = {
                    nom:choiceName,
                    prenom:choiceFirstName,
                    id:choiseId
                }
                return this.updateUser(this.user);
            }
        }
    }

    /**
     * create user
     * @param id
     * @param nom
     * @param premon
     */
    createUser(user:UserJSON) {
        this.service.createUser(user);
        console.log("User cree");
    }


    /**
     * get all user
     */
    getAllUser() {
        this.service.findAllUser().then((data) => {
            data.forEach((model) => console.log("Id : " + model.id + "\n" +
                "Prenom : " + model.prenom +
                "\n" +
                "Nom : " + model.nom +
                "\n" +
                "------------------------------------------------------------------------"))
        });
    }

    /**
     * update user by id
     * @param id
     * @param nom
     * @param prenom
     */
    updateUser(user:UserJSON){
        this.service.updateUser(user);
        console.log("User update");
    }

}