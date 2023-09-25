
import { Article } from './Article';
import { Client } from './Client';

export class BE {
    bEId!: String;
    bLId!: String;
    numBE!: number;
    dateBE!:Date;
    chauffeurId!:string;
    matriculeVehicule!: String;
    status!:boolean;
    numPlombage!:string;
    typeBE!:string;
    dateLivraison!:Date;
    clientId!:string;
    client!:Client;
    article!:Article;

}