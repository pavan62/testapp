import { Injectable } from '@angular/core';
export interface Item{
  id:number;
  name:string;
  phone:number;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
 pavan=[];
  private _name: string;
  private _phone: number;
  private _email:string;
   private imageUrl:any;
   private address:string;
   private latitude: number;
 private longitude: number;
  get name() {
    return this._name;
    
  }

  set name(name: string) {
    this._name = name;
    
  }
  setaddr(data){
    this.address=data;
  }
getaddr(){
  return this.address;
}
  setimage(data){
    this.imageUrl=data;
  }
getimage(){
  return this.imageUrl;
}


  get phone() {
    return this._phone;
  }

  set phone(phone: number) {
    this._phone= phone;
    
  }

get mail() {
  return this._email;
  
}

set mail(mail: string) {
  this._email = mail;
  
}


  
}