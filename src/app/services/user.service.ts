import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private httpClient:HttpClient) { 

  // }
  // createUser(user:User):Observable<User>{
  //   return this.httpClient.post<User>('http://localhost:8080/user/register', user);
  // }

  // updateUser(user:User):Observable<User>{

  //   return this.httpClient.put<User>('http://localhost:8080/user/update', user);
  // }

}
