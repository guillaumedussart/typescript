import {Service} from "./service";

const readLineSync = require('readline-sync');

export class Presentation {
    constructor() {
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
                return this.createUser(choiseId, choiceName, choiceFirstName);
            } else if(readUser == "3"){
                let choiseId;
                choiseId = readLineSync.question("Entrez son id : \n");
                let choiceName;
                choiceName = readLineSync.question("Entrez son nom : \n");
                let choiceFirstName;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");

                return this.updateUser(choiseId,choiceName,choiceFirstName);
            }
        }
    }


    createUser(id: number, nom: string, premon: string) {
        const service = new Service();
        service.createUser(id, nom, premon);
    }



    getAllUser() {
        const service = new Service();
        return service.findAllUser().then((data) => {
            data.forEach((model) => console.log("Id : " + model.id + "\n" +
                "Prenom : " + model.prenom +
                "\n" +
                "Nom : " + model.nom +
                "\n" +
                "------------------------------------------------------------------------"))
        });
    }
    updateUser(id:number,nom:string,prenom:string){
        const service = new Service();
        return service.updateUser(id,nom,prenom);
    }

}