"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var service_1 = require("./service");
var readLineSync = require('readline-sync');
var Presentation = /** @class */ (function () {
    function Presentation() {
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
                return this.createUser(choiseId, choiceName, choiceFirstName);
            }
            else if (readUser == "3") {
                var choiseId = void 0;
                choiseId = readLineSync.question("Entrez son id : \n");
                var choiceName = void 0;
                choiceName = readLineSync.question("Entrez son nom : \n");
                var choiceFirstName = void 0;
                choiceFirstName = readLineSync.question("Entrez son prenom : \n");
                return this.updateUser(choiseId, choiceName, choiceFirstName);
            }
        }
    };
    Presentation.prototype.createUser = function (id, nom, premon) {
        var service = new service_1.Service();
        service.createUser(id, nom, premon);
    };
    Presentation.prototype.getAllUser = function () {
        var service = new service_1.Service();
        return service.findAllUser().then(function (data) {
            data.forEach(function (model) { return console.log("Id : " + model.id + "\n" +
                "Prenom : " + model.prenom +
                "\n" +
                "Nom : " + model.nom +
                "\n" +
                "------------------------------------------------------------------------"); });
        });
    };
    Presentation.prototype.updateUser = function (id, nom, prenom) {
        var service = new service_1.Service();
        return service.updateUser(id, nom, prenom);
    };
    return Presentation;
}());
exports.Presentation = Presentation;
