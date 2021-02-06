import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class UsersApiService {
redirectUrl: string = '';
baseUrl:string = "http://localhost/php/angular-admin/";
@Output() getLoggedInEmail: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }


public userlogin(email:any, password:any) {
alert(email)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
.pipe(map(Users => {
this.setToken(Users[0].email);
this.getLoggedInEmail.emit(true);
return Users;
}));
}

public userregistration(firstName: string, lastName:string, email:string ,password:string) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { firstName, lastName, email, password })
.pipe(map(Users => {
return Users;
}));
}

public sendComplaint (country: string, complaintType: string, complaint: string) {
 return this.httpClient.post<any>(this.baseUrl + '/complaints.php', { country, complaintType, complaint})
.pipe(map(Complaints => {
return Complaints;
}));
}

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}