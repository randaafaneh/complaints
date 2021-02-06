import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-customer-complaints',
  templateUrl: './customer-complaints.component.html',
  styleUrls: ['./customer-complaints.component.css']
})
export class CustomerComplaintsComponent implements OnInit {
  complaintForm:any;
  sent: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersApi: UsersApiService,
    private router:Router
  ) {
    this.complaintForm = this.formBuilder.group({
      complaintType: ['', [Validators.required]],
      country: ['', Validators.required],
      complaint: ['', Validators.required]
      });
   }

  ngOnInit(): void {
  }
  postdata(complaintForm:any)
  {
  this.usersApi.sendComplaint(complaintForm.value.country,complaintForm.value.complaintType, complaintForm.value.complaint)
  .pipe(first())
  .subscribe(
  data => {
  window.alert(this.sent ='Your complaint has been sent')
  },
  
  error => {
  });
  }


}
