import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private isLoading : Subject<boolean> = new Subject<boolean>();
  private message: Subject<string> = new Subject<string>();
  private token = "";
  constructor() { }

  setIsLoading(isLoad:boolean){
    this.isLoading.next(isLoad);
  }

  getIsLoading():Observable<boolean>{
    return this.isLoading.asObservable();
  }

  setMessage(msg:string){
    this.message.next(msg);
  }
  getNessage():Observable<string>{
    return this.message.asObservable();
  }
  setToken(tkn:string){
    this.token=tkn;
    sessionStorage.setItem('token',tkn);
  }
  getToken():string{
    return sessionStorage.getItem('token');
  }
}
