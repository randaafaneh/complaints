import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;


  constructor(
    private formBuilder: FormBuilder,
    private usersApi: UsersApiService,
    private router:Router
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
      });
  }
  
  ngOnInit(): void {
  }
  postdata(userForm:any)
{
this.usersApi.userlogin(userForm.value.email,userForm.value.password)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['/customer']);
},

error => {
});
}

get email() { return this.userForm.get('email'); }
get password() { return this.userForm.get('password'); }

changePath():void {
  this.router.navigate(['/customer']);
}
}


