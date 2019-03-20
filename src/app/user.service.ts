import { Injectable } from '@angular/core';

interface user{
  userKey:string
  userType:string
  uniteMedicalKey:string
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
  getUMKey(){
    return this.user.uniteMedicalKey
  }
  getType(){
    return this.user.userType
  }
}
