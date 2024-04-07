import { User } from "./user";


export class Comment {
id!:number;
content: string = '';
created_at: string = '';
user?:User;
}
