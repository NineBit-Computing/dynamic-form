import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input ,Output} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule,AppComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {

  @Input()
  formData!: any;
  
  @Input()
  form!: FormGroup;

  @Output() submitClicked = new EventEmitter<void>();

  // form!: FormGroup;
  onSubmit() {
    console.log(this.form.value);
    this.submitClicked.emit();
  }
}