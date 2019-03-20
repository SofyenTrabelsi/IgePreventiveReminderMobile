import { Injectable } from '@angular/core';

interface user{
  userKey:string
  userType:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:user
  constructor() { }

  setUser(user:user){
    this.user=user
  }
  getKey(){
    return this.user.userKey
  }
  getType(){
    return this.user.userType
  }
}
