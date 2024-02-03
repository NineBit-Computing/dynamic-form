import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './MyComponents/form-field/form-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormFieldComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  // isFlipped = false;

  formData = {
    fields: [
      {
        type: 'text',
        name: 'fName',
        label: 'First Name',
        value: '',
        required: true,
        validation: /^[a-zA-Z ]+$/,
        pattern: 'alphabetic',
      },
      {
        type: 'text',
        name: 'middleName',
        label: 'Middle Name',
        value: '',
        required: false,
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'last Name',
        value: '',
        required: true,
        validation: /^[a-zA-Z ]+$/,
      },
      {
        type: 'text',
        name: 'pinCode',
        label: 'Pin Code',
        value: '',
        required: true,
        validation: /^[0-9]/,
        pattern: 'numeric',
      }
    ],
  };
  isFlipped: any;
  shake = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({});

    // this.formData.fields.forEach(field => {
    //   const validators = field.required ? [Validators.required] : [];
    //   this.form.addControl(field.name, this.formBuilder.control(field.value, validators));
    // });

    this.formData.fields.forEach((field) => {
      const validators = field.required
        ? field.validation
          ? [Validators.required, Validators.pattern(field.validation)]
          : [Validators.required]
        : [];

      this.form.addControl(
        field.name,
        this.formBuilder.control(field.value, validators)
      );
    });
  }
  onChildSubmit() {
    if (this.form.valid) {
      this.isFlipped = !this.isFlipped; // Flip the wrapper
    }
    if (this.form.invalid) {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;
      }, 1000);
      return;
    }
  }
}
