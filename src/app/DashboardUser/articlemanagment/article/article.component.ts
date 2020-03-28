
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
  successResult:boolean=false;
  uplodefile: string;
  fileName:string;
  myForm: FormGroup;
  constructor(

    private  fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      abstract:['', Validators.required],
      detail:['', Validators.required],
      keyword: ['', Validators.required],
      key_title: ['', Validators.required],
      active: ['', Validators.required],
      author: ['', Validators.required],
      alt_img: ['', Validators.required],
      date:['', Validators.required],
      time:['', Validators.required],

    });
  }
  get date() {
    return this.myForm.get("date");
  }
  get title() {
    return this.myForm.get("title");
  }
  get abstract() {
    return this.myForm.get("abstract");
  }
  get detail() {
    return this.myForm.get("detail");
  }
  get keyword() {
    return this.myForm.get("keyword");
  }
  get key_title() {
    return this.myForm.get("key_title");
  }
  get active() {
    return this.myForm.get("active");
  }
  get author() {
    return this.myForm.get("author");
  }
  get alt_img() {
    return this.myForm.get("alt_img");
  }
  get time() {
    return this.myForm.get("time");
  }


}
