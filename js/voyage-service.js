"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VoyageService = /** @class */ (function () {
    function VoyageService() {
        this._voyage = [{ _nom: 'test1', _prix: 125 }, { _nom: 'test2', _prix: 126 }];
    }
    VoyageService.prototype.findVoyageByName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._voyage.forEach(function (value, index) {
                if (name == value._nom) {
                    // @ts-ignore
                    resolve(value._nom + " Prix :" + value._prix + " " + index);
                }
                else {
                    reject("Aucun voyage trouve");
                }
            });
        });
    };
    return VoyageService;
}());
var voyageService = new VoyageService();
voyageService.findVoyageByName("test2")
    .then(function (voyage) { return console.log('Voyage ' + voyage); }, function (err) { return console.log(err); })
    .catch(function (err) { return console.log(err); });
