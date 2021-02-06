import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  invalidForm: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private usersApi: UsersApiService,
    private router:Router
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
      });
  }
  
  ngOnInit(): void {
  }
  postdata(userForm:any)
{
this.usersApi.userregistration(userForm.value.firstName,userForm.value.lastName,userForm.value.email,userForm.value.password)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['/login']);
},

error => {
});
}

get email() { return this.userForm.get('email'); }
get password() { return this.userForm.get('password'); }
get firstName() { return this.userForm.get('firstName'); }
get lastName() { return this.userForm.get('lastName'); }

changePath():void {
  this.router.navigate(['/login']);
}
}


