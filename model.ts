export class Model {
    constructor(params: ModelInterface = {} as ModelInterface) {
    }
}

interface ModelInterface {
    id?: number,
    nom?: string,
    prenom?: string,
    societe?: string,
    email?: string,
    dateNaissance?: string,
    sexe?: string,
    adresse?: string,
    password?: string,
    photo?: string,
    departement?: string
}