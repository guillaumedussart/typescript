import {Voyage} from "./voyage";

class VoyageService {
    private _voyage: Voyage[];

    constructor() {
        this._voyage = [{_nom: 'test1', _prix: 125}, {_nom: 'test2', _prix: 126}]
    }

    findVoyageByName(name: string): Promise<Voyage> {
        return new Promise((resolve, reject) => {
            this._voyage.forEach((value, index) => {
                if (name == value._nom) {
                    // @ts-ignore
                    resolve(`${value._nom} Prix :${value._prix} ${index}`) ;
                }else{
                    reject("Aucun voyage trouve")
                }
            })

        })
    }
}

const voyageService = new VoyageService();
voyageService.findVoyageByName("test2")
    .then((voyage) => console.log('Voyage ' + voyage),
        (err)=>console.log(err))
    .catch((err) => console.log(err));