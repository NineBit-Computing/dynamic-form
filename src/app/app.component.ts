import { Component, OnInit, inject} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './MyComponents/form-field/form-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule,FormFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  
  formData = {
    "fields": [
      {
        "type": "text",
        "name": "fName",
        "label": "First Name",
        "value": "",
        "required": true,
        "validation": "/^[a-zA-Z ]*$/"
      },
      {
        "type": "text",
        "name": "middleName",
        "label": "Middle Name",
        "value": "",
        "required": false
      },
      {
        "type": "text",
        "name": "lastName",
        "label": "last Name",
        "value": "",
        "required": true
      },
      {
        "type":"password",
        "name": "pass",
        "label": "Password",
        "value": "",
        "required": true,
        "button": "LogIn"
      }
      
  ]};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.form = this.formBuilder.group({});

    this.formData.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      this.form.addControl(field.name, this.formBuilder.control(field.value, validators));
    });

  //   this.formData.fields.forEach(field => {
  //     const validators = [];

  //     if (field.required) {
  //       validators.push(Validators.required);
  //     }

  //     if (field.validation) {
  //       validators.push(Validators.pattern(field.validation));
  //     }

  //     const control = this.formBuilder.control(field.value, validators);

  //     control.valueChanges.subscribe(value => {
  //       if (field.required && !value.trim()) {
  //         control.setErrors({ required: true });
  //       } else if (field.validation && !new RegExp(field.validation).test(value)) {
  //         control.setErrors({ pattern: true });
  //       } else {
  //         control.setErrors(null);
  //       }
  //     });

  //     this.form.addControl(field.name, control);
  //   });
  // }
  // }
  // this.form = this.formBuilder.group({
  //   name: ['', [Validators.required, Validators.pattern('(/^[a-zA-Z ]*$/')]]
  // })
 
 
  } 

}