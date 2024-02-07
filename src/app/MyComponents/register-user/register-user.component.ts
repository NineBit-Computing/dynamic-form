import { Component, ViewChild,Input } from '@angular/core';
import { FormFieldComponent } from '../auto-form-generator/form-field.component';
import { FormsModule } from '@angular/forms';
import { SharedFormDataService } from '../../MyServices/shared-form-data.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormFieldComponent,FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  constructor(private sharedFormDataService:SharedFormDataService) {}
  @ViewChild(FormFieldComponent)
  formFieldComponent!: FormFieldComponent;

  

  onSubmit(){

    const form = this.formFieldComponent.getFormData()
    this.sharedFormDataService.updateFormData(form.value);
    
  }

  

}
