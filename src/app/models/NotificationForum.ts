import {User} from "./User";

export class NotificationForum {
  notificationId!:String;
  content!:string;
  senderId!: User;
  sender!:User
  viewed!:boolean;
  hovored!:boolean;
  notifDate!:Date;
}
