import { BE } from "./BE";

export class Client {
    ClientId!: String;
    Nom!: String;
    Prenom!:String;
    Telephone!:string;
    CommandNbr!:Number
    BE!:BE[];
}