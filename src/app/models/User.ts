
import {Roles} from "./Roles";
export class User {
    id!: number;
    username!: string;
    email!: string;
    password!:string;
    firstName!:string;
    lastName!:string;
    phone!:number;
    rate!:number;
    state!:boolean;
 
    roles!:Roles[];
    reputationLevel!:string
    savedPosts!:number[];
}
