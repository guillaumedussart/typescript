"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
const service_1 = require("../common/service/service");
const readLineSync = require('readline-sync');
class Presentation {
    constructor() {
        this.service = new service_1.Service();
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
            }
            else if (readUser == "2") {
                let choiseId;
                choiseId = readLineSync.question("Entrez son id : \n");
                let choiceName;
                choiceName = readLineSync.question("Entrez son nom : \n");
                let choiceFirstName;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                let choiceEmail;
                choiceEmail = readLineSync.question("Entrez son prenom : \n");
                this.user = {
                    nom: choiceName,
                    prenom: choiceFirstName,
                    id: choiseId,
                    email: choiceEmail
                };
                return this.createUser(this.user);
            }
            else if (readUser == "3") {
                let choiseId;
                choiseId = readLineSync.question("Entrez son id : \n");
                let choiceName;
                choiceName = readLineSync.question("Entrez son nom : \n");
                let choiceFirstName;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                let choiceEmail;
                choiceEmail = readLineSync.question("Entrez son prenom : \n");
                this.user = {
                    nom: choiceName,
                    prenom: choiceFirstName,
                    id: choiseId,
                    email: choiceEmail
                };
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
    createUser(user) {
        this.service.createUser(user);
        console.log("User cree");
        this.demarrer();
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
                "------------------------------------------------------------------------"));
        });
        this.demarrer();
    }
    /**
     * update user by id
     * @param id
     * @param nom
     * @param prenom
     */
    updateUser(user) {
        this.service.updateUser(user);
        console.log("User update");
        this.demarrer();
    }
}
exports.Presentation = Presentation;
//# sourceMappingURL=presentation.js.map