export class UniteMedical {

    public key: string
    public title: string
    public type: string
    public nom: string
    public gouv: string
    public ville: string
    public codePostal: string

    constructor() {
    }
    constructorS(type: string, nom: string, gouv: string, ville: string, codePostal: string) {
        this.type = type;
        this.nom = nom;
        this.gouv = gouv;
        this.ville = ville;
        this.codePostal = codePostal
    }
}