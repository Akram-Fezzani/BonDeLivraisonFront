
import { Article } from './Article';
import { Client } from './Client';

export class BE {
    BEId!: String;
    BLId!: String;
    NumBE!: number;
    DateBE!:Date;
    Chauffeur!:string;
    MatriculeVehicule!: String;
    Status!:boolean;
    NumPlombage!:string;
    TypeBE!:string;
    DateLivraison!:Date;
    ClientId!:string;
    Client!:Client;
    Article!:Article;

}