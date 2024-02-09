import { Component, ViewChild,Input, OnInit } from '@angular/core';
import { FormFieldComponent } from '../auto-form-generator/form-field.component';
import { FormsModule } from '@angular/forms';
import { SchemaService } from '../../MyServices/schema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormFieldComponent,FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit{

  formData: any = {
    fields: []
  };
  router: any;

  constructor(private schema:SchemaService,private route:ActivatedRoute) {
   
  }

  @ViewChild(FormFieldComponent, { static: true })
  formFieldComponent!: FormFieldComponent;

  

ngOnInit(): void {
  // this.fetch()
  this.route.data.subscribe(data=>{
    this.fetch();
    console.log(data);
  })
  this.router.events.subscribe((event:any)=>console.log(event))
}
  
  fetch(){
    this.formData=this.schema.fetchData();
    console.log(this.formData)
  }
  

  onSubmit(){

    const form = this.formFieldComponent.getFormData()
    // this.sharedFormDataService.updateFormData(form.value);
    
  }

  

}
