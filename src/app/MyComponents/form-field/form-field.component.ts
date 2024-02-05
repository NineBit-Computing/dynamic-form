import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { SchemaService } from '../../MyServices/schema.service';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  isFlipped: any;
  shake = false;

  formData!: any;
  
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,private schema:SchemaService) {}

  ngOnInit(): void {

      this.form = this.formBuilder.group({});
      this.formData = this.schema.getFormData();

     
      this.formData.fields.forEach((field: { required: any; validation: string | RegExp; name: any; value: any; }) => {
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
    };
    
  

  onSubmit() {

    console.log(this.form.value)

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
