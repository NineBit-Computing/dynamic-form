import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormFieldComponent } from '../auto-form-generator/form-field.component';
import { FormsModule, FormGroup } from '@angular/forms';
// import { SharedFormDataService } from '../../MyServices/shared-form-data.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormFieldComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements AfterViewInit {
  // form: any;
  // formData: any = {};

  @ViewChild(FormFieldComponent)
  formFieldComponent!: FormFieldComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  // formData: any = {
  //   fName: 'james',
  //   middleName: 'vfvfs',
  //   lastName: 'bond',
  //   pinCode: '333333',
  // };

  ngAfterViewInit() {
    // this.formFieldComponent.form.patchValue({
    //   fName: this.formData.fName,
    //   middleName: this.formData.middleName,
    //   lastName: this.formData.lastName,
    //   pinCode: this.formData.pinCode,
    // });
    // this.cdr.detectChanges();
    // console.log(this.formData);
  }
  // }
  // ngOnInit() {
  //   this.sharedFormDataService.formData$.subscribe((formData) => {
  //     this.formData = formData;
  //     console.log('Form Data in EditUserComponent:', this.formData);

  //   });
  // }

  onSubmit() {
    const form = this.formFieldComponent.getFormData();
  }
}
