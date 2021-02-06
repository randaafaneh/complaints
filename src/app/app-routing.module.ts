import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { CustomerComplaintsComponent } from './customer-complaints/customer-complaints.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'customer', component: CustomerComplaintsComponent},
  {path: 'admin', component: AdminComplaintsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
