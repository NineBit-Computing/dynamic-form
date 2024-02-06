import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './MyComponents/auto-form-generator/form-field.component';
// import { NewUserComponent } from './MyComponents/new-user/new-user.component';
import { RouterOutlet } from '@angular/router';
import { SchemaService } from './MyServices/schema.service';
import { EditUserComponent } from './MyComponents/edit-user/edit-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormFieldComponent,
    EditUserComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [SchemaService],
})
export class AppComponent {
  //   form!: FormGroup;
  //   formData: any;
  //  constructor(private formBuilder: FormBuilder,private schema:SchemaService) {}
  buttonLabel:string='submit'
}
