import { User } from "./user";
import { Comment } from "./comment";

export class Event {


id!:number;
content: string = '';
start_date_time: string = '';
end_date_time: string = '';
created_at: string = '';
has_joined: boolean=false;
participants: User[]=[]
title: string = '';
cover_image_url: string = '';
user?:User;
comments:Comment []=[]


}
