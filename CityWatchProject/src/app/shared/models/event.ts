import { User } from "./user";

export class Event {


id:number;
content:string;
start_date_time:string;
end_date_time:string;
created_at:string;
user:User;
title:string;
cover_image_url: string;

constructor(event:any){
  this.id=event.id || 0;
  this.content=event.content || "";
  this.start_date_time=event.start_date_time;
  this.end_date_time=event.end_date_time;
  this.created_at=event.created_at;
  this.user=event.user || new User({});
  this.title=event.title || "";
  this.cover_image_url=event.cover_image_url
}
}
