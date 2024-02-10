import { Component, OnInit } from '@angular/core';
import { FormFieldComponent } from '../auto-form-generator/form-field.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { SchemaService } from '../../MyServices/schema.service';
import {
  ActivatedRoute,
  Router,
  Event,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormFieldComponent, FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent implements OnInit {
  formData: any = {
    fields: [],
  };
  // router: any;
  form: FormGroup = new FormGroup({});

  constructor(
    private schema: SchemaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.setRouterEvent();
  }

  ngOnInit(): void {
    console.log(this.form.value);
    this.fetch();
  }

  // this.router.events.subscribe((event:any)=>console.log(event))

  // setRouterEvent(){
  //   this.router.events.pipe(
  //     filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
  //   ).subscribe((e: RouterEvent) => {

  //     if (e instanceof NavigationStart) {
  //       this.fetch();

  //     }
  //   });
  // }

  setRouterEvent() {
    this.router.events
      .pipe(
        filter(
          (e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent
        )
      )
      .subscribe((e: RouterEvent) => {
        if (e instanceof NavigationEnd) {
          // setTimeout(() => {
          this.fetch();
          // }, 2000);
        }
      });
  }

  fetch() {
    // this.schema.getFormData().subscribe((data) => {
    // this.formData = data;
    // });
    this.schema.getFormData().subscribe
    // this.formData = {
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
    //       pattern: 'numeric',
    //     },
    //   ],
    // };
    console.log(this.formData);
    // });
  }

  onSubmit() {
    // const form = this.formFieldComponent.getFormData()
    // this.sharedFormDataService.updateFormData(form.value);
    console.log(this.form.value);
  }
}
