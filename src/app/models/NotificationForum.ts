import {User} from "./User";

export class NotificationForum {
  notifId!:number;
  content!:string;
  senderId!: User;
  sender!:User
  viewed!:boolean;
  hovored!:boolean;
  notifDate!:Date;
}
