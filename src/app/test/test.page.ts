import { Component, OnInit ,Self,Optional} from '@angular/core';
import{
  FormBuilder,FormGroup,Validators,AbstractControl,NgControl}from '@angular/forms'
  ;

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
formgroup:FormGroup;
firstname:AbstractControl;
lastname:AbstractControl;
  constructor(public formbuilder:FormBuilder) {
  
    this.formgroup=formbuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required]
    });
    this.firstname=this.formgroup.controls['firstname'];
    this.lastname=this.formgroup.controls['lastname'];
   }

  ngOnInit() {
  }

}
