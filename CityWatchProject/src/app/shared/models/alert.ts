import { User } from "./user";

export class Alert {
  id:number;
  content:string;
  createdAt:string;
  user:User;



  constructor(alert:any){
    this.id=alert.id || 0;
    this.content=alert.content || "";
    this.createdAt=alert.createdAt || "";
    this.user=alert.user || "";

  }

}


