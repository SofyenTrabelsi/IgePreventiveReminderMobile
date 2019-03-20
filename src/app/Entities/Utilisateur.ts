import { UniteMedical } from './UniteMedical'

export class Utilisateur {

    public key: string
    public title: string
    public email: string
    public pwd: string
    public poste: string
    public type: string
    public uniteMedical: UniteMedical

    constructor() {
    }
}