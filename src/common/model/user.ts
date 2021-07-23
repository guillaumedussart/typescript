
export class User {
    // @ts-ignore
    private id: string;
    // @ts-ignore
    private nom: string;
    // @ts-ignore
    private prenom: string;

    constructor() {
    }

    public getId(): string {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }

    getNom(): string {
        return this.nom;
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    getPrenom(): string {
        return this.prenom;
    }

    setPrenom(prenom: string) {
        this.prenom = prenom;
    }

}

export interface UserJSON{
    id: string;
    nom: string;
    prenom: string;
}