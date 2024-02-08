import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  constructor() { }

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
        pattern: 'alphabetic',
      },
      {
        type: 'text',
        name: 'pinCode',
        label: 'My Pin Codey',
        value: '',
        required: true,
        validation: /^[0-9]/,
        pattern: 'numeric',
      } 
    ],
  };

  getFormData() {
    return this.formData;
  }
 
}
