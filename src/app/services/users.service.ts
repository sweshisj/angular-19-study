import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../interfaces/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.url+"/"+id);
  }
  getSelectedUser(id:number):Observable<User>{
    return this.http.get<User>(this.url+"/"+id);
  }
}
