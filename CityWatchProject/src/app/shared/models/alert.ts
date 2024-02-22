import { User } from "./user";

export class Alert {
  id:number;
  content:string;
  created_at:string;
  user?:User;



  constructor(alert:any){
    this.id=alert.id || 0;
    this.content=alert.content || "";
    this.created_at=alert.created_at || "";
    this.user=alert.user || new User({});

  }

}


