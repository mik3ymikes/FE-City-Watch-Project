export class User {
  id:number;
  username:string;
  email:string;
  zipcode:number



  constructor(user:any){
    this.id=user.id || 0;
    this.username=user.username || "";
    this.email=user.email || "";
    this.zipcode=user.zipcode || 0;

  }

}
