import { Component, ViewChild,Input } from '@angular/core';
import { FormFieldComponent } from '../auto-form-generator/form-field.component';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormFieldComponent],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  @ViewChild(FormFieldComponent)
  formFieldComponent!: FormFieldComponent;

  onSubmit(){
    const form = this.formFieldComponent.getFormData()
  }

}
