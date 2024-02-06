import { Component, ViewChild } from '@angular/core';
import { FormFieldComponent } from '../auto-form-generator/form-field.component';
import { FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormFieldComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
  // form: any;

  @ViewChild(FormFieldComponent)
  formFieldComponent!: FormFieldComponent;


  onSubmit() {
    const form = this.formFieldComponent.getFormData();
    // console.log('Form data received in EditUserComponent:', form);
  }
}


