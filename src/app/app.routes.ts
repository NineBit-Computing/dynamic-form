import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './MyComponents/form-field/form-field.component';
import { NewUserComponent } from './MyComponents/new-user/new-user.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'new-user', component: NewUserComponent },
];
