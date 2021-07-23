"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var service_1 = require("./service");
var readLineSync = require('readline-sync');
var Presentation = /** @class */ (function () {
    function Presentation() {
        this.service = new service_1.Service();
    }
    Presentation.prototype.demarrer = function () {
        var readUser;
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
                var choiseId = void 0;
                choiseId = readLineSync.question("Entrez son id : \n");
                var choiceName = void 0;
                choiceName = readLineSync.question("Entrez son nom : \n");
                var choiceFirstName = void 0;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                this.user = {
                    nom: choiceName,
                    prenom: choiceFirstName,
                    id: choiseId
                };
                return this.createUser(this.user);
            }
            else if (readUser == "3") {
                var choiseId = void 0;
                choiseId = readLineSync.question("Entrez son id : \n");
                var choiceName = void 0;
                choiceName = readLineSync.question("Entrez son nom : \n");
                var choiceFirstName = void 0;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                this.user = {
                    nom: choiceName,
                    prenom: choiceFirstName,
                    id: choiseId
                };
                return this.updateUser(this.user);
            }
        }
    };
    /**
     * create user
     * @param id
     * @param nom
     * @param premon
     */
    Presentation.prototype.createUser = function (user) {
        this.service.createUser(user);
        console.log("User cree");
        this.demarrer();
    };
    /**
     * get all user
     */
    Presentation.prototype.getAllUser = function () {
        this.service.findAllUser().then(function (data) {
            data.forEach(function (model) { return console.log("Id : " + model.id + "\n" +
                "Prenom : " + model.prenom +
                "\n" +
                "Nom : " + model.nom +
                "\n" +
                "------------------------------------------------------------------------"); });
        });
        this.demarrer();
    };
    /**
     * update user by id
     * @param id
     * @param nom
     * @param prenom
     */
    Presentation.prototype.updateUser = function (user) {
        this.service.updateUser(user);
        console.log("User update");
        this.demarrer();
    };
    return Presentation;
}());
exports.Presentation = Presentation;
