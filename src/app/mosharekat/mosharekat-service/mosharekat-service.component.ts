import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-mosharekat-service',
  templateUrl: './mosharekat-service.component.html',
  styleUrls: ['./mosharekat-service.component.css']
})
export class MosharekatServiceComponent implements OnInit {
  hide = true;
  username;
  password;
  formGroup: FormGroup;
  submitted = false;

  constructor(private  _formBuilder:FormBuilder) {


  }
ngOnInit(): void {
  this.formGroup = this._formBuilder.group({
    username:['', Validators.required],
    password: ['', Validators.required]
  });
}
  get f() { return this.formGroup.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value))
  }

}
