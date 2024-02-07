import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedFormDataService {

  constructor() { }

  private formDataSubject = new BehaviorSubject<any>({
    fName: '',
    middleName: '',
    lastName: '',
    pinCode: '',
  });

  formData$ = this.formDataSubject.asObservable();

  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }
}
