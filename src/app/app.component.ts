import { Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './MyComponents/form-field/form-field.component';
import { NewUserComponent } from './MyComponents/new-user/new-user.component';
import { RouterOutlet } from '@angular/router';
import { SchemaService } from './MyServices/schema.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormFieldComponent,
    NewUserComponent,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[SchemaService]
})
export class AppComponent  {

//   form!: FormGroup;
//   formData: any;
  
 
//  constructor(private formBuilder: FormBuilder,private schema:SchemaService) {}
 
  
}
