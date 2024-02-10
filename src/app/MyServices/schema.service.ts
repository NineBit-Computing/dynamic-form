import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {

  constructor(private http:HttpClient) {}
  // apiData:any;

  // fetchData(){
  //   return this.http.get('http://192.168.1.5:9000/user').subscribe((data)=>{
  //     this.apiData=data;
  //     console.log(this.apiData);
  //   })
  // }

  private apiLink = 'http://192.168.1.6:9000/user';

  // formData = {
  //   fields: [
  //     {
  //       type: 'email',
  //       name: 'eName',
  //       label: 'Email',
  //       value: '',
  //       required: true,
  //       validation: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  //     },
  //     {
  //       type: 'text',
  //       name: 'fName',
  //       label: 'First Name',
  //       value: '',
  //       required: true,
  //       validation: /^[a-zA-Z ]+$/,
  //       pattern: 'alphabetic',
  //     },
  //     {
  //       type: 'text',
  //       name: 'MmiddleName',
  //       label: 'Middle Name',
  //       value: '',
  //       required: false,
  //       validation: /^[a-zA-Z ]+$/,
  //       pattern: 'alphabetic',
  //     },
  //     {
  //       type: 'text',
  //       name: 'lastName',
  //       label: 'last Name',
  //       value: '',
  //       required: true,
  //       validation: /^[a-zA-Z ]+$/,
  //       pattern: 'alphabetic',
  //     },
  //     {
  //       type: 'text',
  //       name: 'PpinCode',
  //       label: 'Pin Code',
  //       value: '',
  //       required: true,
  //       validation: /^[0-9]/,
  //       // pattern: 'numeric',
  //     },
  //   ],
  // };

  getFormData():Observable<any>{
    return this.http.get<any>(this.apiLink);
    // return this.formData;
  }
}
