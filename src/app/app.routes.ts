import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './MyComponents/auto-form-generator/form-field.component';
// import { NewUserComponent } from './MyComponents/new-user/new-user.component';
import { EditUserComponent } from './MyComponents/edit-user/edit-user.component';
import { RegisterUserComponent } from './MyComponents/register-user/register-user.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'edit-user', component: EditUserComponent },
];
