import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { SchemaService } from '../../MyServices/schema.service';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Input() formData: any={fields: [] };
  @Input() form: FormGroup = new FormGroup({});
  
  isFlipped: any;
  shake = false;
  // formData!: any;
  // form!: FormGroup;

  constructor(private formBuilder: FormBuilder,private schema:SchemaService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.initializeForm();
  }

    // if (this.formData && this.formData.length > 0 && this.formData[0].fields) {
      

    //   this.formData[0].fields.forEach((field: any) => {
    //     const validators = field.required
    //       ? field.validation
    //         ? [Validators.required, Validators.pattern(field.validation)]
    //         : [Validators.required]
    //       : [];

    //     this.form.addControl(
    //       field.name,
    //       this.formBuilder.control(field.value, validators)
    //     );
    //   });
    // }
  //   if (this.formData && this.formData.length > 0) {
  //     this.formData[0].fields.forEach((field: any) => {
  //       const validators = field.required
  //         ? field.validation
  //           ? [Validators.required, Validators.pattern(field.validation)]
  //           : [Validators.required]
  //         : [];

  //       this.form.addControl(
  //         field.name,
  //         this.formBuilder.control(field.value, validators)
  //       );
  //     });
  //   }
  // }
  initializeForm() {
    if (this.formData && this.formData.fields) {
      this.formData.fields.forEach((field: any) => {
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
  }

  
  getFormData():any {

    console.log(this.form.value)

    if (this.form.valid) {
      this.isFlipped = !this.isFlipped; // Flip the wrapper
      return this.form;
    }
    if (this.form.invalid) {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;
      }, 1000);
      return;
    }
  }

  // public submit1():void{

  //   this.submit.emit(this.onSubmit);

  // }
}
// this.formSubmitted.emit(this.form);