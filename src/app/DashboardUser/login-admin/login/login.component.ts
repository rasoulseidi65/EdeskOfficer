import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  body = {
    email: "",
    password: ""
  };
  myForm: FormGroup;
  constructor(

    private fb: FormBuilder,
    private router: Router,
  ) {}
  resolved(captchaResponse: string) {
    this.myForm.value.recaptcha = captchaResponse;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      recaptcha: ["", Validators.required]
    });
  }
  get email() {
    return this.myForm.get("email");
  }
  get password() {
    return this.myForm.get("password");
  }
  get recaptcha() {
    return this.myForm.get("recaptcha");
  }

}
