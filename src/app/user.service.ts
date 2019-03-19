import { Injectable } from '@angular/core';

interface user {
  userUid:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: user
  constructor() { }

  setArticle(user:user){
    this.user=user
  }
  getUID(){
    return this.user.userUid ;
  }
}
