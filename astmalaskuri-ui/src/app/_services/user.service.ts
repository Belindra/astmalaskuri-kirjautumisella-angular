import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../_models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + "/users";
  users: IUser[];
  userExists: boolean;

constructor(private http: HttpClient) { }

 getUsers() {
   return this.http.get<IUser[]>(this.baseUrl);
 }

}









