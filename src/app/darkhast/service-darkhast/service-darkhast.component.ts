import {Component, EventEmitter, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {NgxSpinnerService} from 'ngx-spinner';
import {MethodsService} from '../../SharedMethods/methods.service';
import {Subscription} from 'rxjs/Subscription';
import {FileUploader} from 'ng2-file-upload';
import {Observable} from 'rxjs';
import {MatStepper} from '@angular/material/stepper';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {MobilePhoneNumberService} from 'ngx-persian';
import {EdeskService} from '../../service/edesk.service';


@Component({
  selector: 'app-service-darkhast',
  templateUrl: './service-darkhast.component.html',
  styleUrls: ['./service-darkhast.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServiceDarkhastComponent implements OnInit, OnDestroy {

  time: string[] = ['8:15 ق.ظ', '8:30 ق.ظ', '8:45 ق.ظ', '9:00 ق.ظ'];
  provinceList: string[] = ['آذربایجان شرقی', 'آذربایجان غربی', 'اردبیل', 'اصفهان', 'البرز',
    'ایلام',
    'بوشهر',
    'تهران',
    'خراسان جنوبی',
    'خراسان رضوی',
    'خراسان شمالی',
    'خوزستان',
    'زنجان',
    'سمنان', 'سیستان و بلوچستان',
    'فارس',
    'قزوین', 'قم',
    'لرستان',
    'مازندران', 'مرکزی',
    'هرمزگان',
    'همدان',
    'کردستان',
    'کرمان', 'کرمانشاه',
    'گلستان',
    'گیلان',
    'یزد',


  ];
  cityList: string[] = ['تهران', 'شمیرانات', 'شهریار', 'جنت آباد', 'خراسان'];
  regionList: string[] = ['منطقه 1', 'منطقه 2', 'منطقه 3', 'منطقه 4', 'منطقه 5'
    , 'منطقه 6',
    'منطقه 7',
    'منطقه 8',
    'منطقه 9',
    'منطقه 10',
    'منطقه 11',
    'منطقه 12',
    'منطقه 13',
    'منطقه 14',
  ];
  branchList: string[] = ['۹۳۳۰۱۰۴۹',
    '۹۲۳۰۱۰۰۱'
    , '۹۴۳۰۱۰۵۳',
    '۹۶۳۰۱۰۹۶',
    '۹۶۳۰۱۰۹۳',
    '۹۶۳۰۱۰۹۴',
    '۹۶۳۰۱۰۶۶',
    '۹۵۳۰۱۰۶۱',
    '۹۳۳۰۱۰۵۰'
  ];
  Address: string[] = ['بلوار معلم – نرسیده به اداره گذرنامه – نبش سه راه زندیه – ساختمان بنفشه- پ ۱۰۶ – ط اول-واحد ۲', 'میدان تجریش -خیابان فنا خسرو-روبروی درب پارکینگ تندیس پلاک ۲۱',
    'بلوار شهید باهنر- خیابان روبروی سیلو- جنب اداره نفت- پلاک ۲۴۴', 'بلوار امام خمینی- بعد از اتحاد- جنب کوچه مسجد- پلاک ۱۰۳۰',
    'نسیم شهر- خیابان سی متری بوستان- بعد از چهارراه- پلاک ۱۶۱',
    'داوودیه- جنب بانک ملی شعبه شهدا- پلاک ۳۹۴ طبقه دوم',
    'خیابان جنت آباد جنوبی- ساختمان بانک سپه پلاک ۶۶-طبقه چهارم-واحد ۱۹',
    'خیابان شهید بهشتی-نبش خیابان میرعماد-ساختمان گلدیس-واحد ۱۰۳',
    'بلوار بهشتی- جنب کوچه حافظ- جنب املاک میرداماد- پلاک ۴۰'
  ];
  main2dArray: string[][] = [];
  head = [['ID', 'Country', 'Rank', 'Capital']];

  data = [
    [1, 'Finland', 7.632, 'Helsinki'],
    [2, 'Norway', 7.594, 'Oslo'],
    [3, 'Denmark', 7.555, 'Copenhagen'],
    [4, 'Iceland', 7.495, 'Reykjavík'],
    [5, 'Switzerland', 7.487, 'Bern'],
    [9, 'Sweden', 7.314, 'Stockholm'],
    [73, 'Belarus', 5.483, 'Minsk'],
  ];
  numbersubscription: Subscription;

  user = {
    province: '',
    city: '',
    Region: '',
    Branch: '',
    mobile: '09',
    processUUID: '',
    Service: '',
    Day: 'شنبه',
    Time: '',
    name: '',
    national_code: '',
    email: '',
    office_code: '321312312',
    tracking_code: ''
  };
  code_rahgiri: any;
  otd: any;
  otdCode;
  invalidotdCode: boolean = false;
  timeLeft: number = 60;
  interval;
  resendSMS: boolean = true;
  validstep2: boolean = false;
  showModal: boolean = false;
  addressOffice: any = null;
  subscribeTimer: any;

  validMobile;
  index;
  isEditable = false;
  codeRahgiri;
  resultOnvan;
  result: boolean = false;
  submitted = false;
  x;
  formGroup: FormGroup;
  NAP_SUCCEED: boolean = false;
  NAP_SUCCEED1: boolean = false;

  formOTD: FormGroup;

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private mobilePhoneNumberService: MobilePhoneNumberService, private _formBuilder: FormBuilder, private http: HttpClient, public dialog: MatDialog, private router: Router
    , private spinner: NgxSpinnerService, public ProcessUUID: MethodsService, private  edeskService: EdeskService) {
    this.main2dArray[0] = ['8:00 ق.ظ', '8:15 ق.ظ', '8:30 ق.ظ', '8:45 ق.ظ', '9:00 ق.ظ', '9:15 ق.ظ'];
    this.main2dArray[1] = ['9:30 ق.ظ', '9:45 ق.ظ', '10:00 ق.ظ', '10:15 ق.ظ', '10:30 ق.ظ', '10:45 ق.ظ'];
    this.main2dArray[2] = ['11:00 ق.ظ', '11:15 ق.ظ', '11:30 ق.ظ', '11:45 ق.ظ', '12:00 ب.ظ', '12:15 ب.ظ'];

  }


  ngOnInit() {
    this.spinner.hide();
    setTimeout(() => {
      // this.fetche_ProcessUUID();
    }, 50);
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          province: new FormControl(['', Validators.required]),
          city: new FormControl(['', Validators.required]),
          Region: new FormControl(['', Validators.required]),
          Branch: new FormControl(['', Validators.required]),
          Service: new FormControl(['', Validators.required]),
        }),
        this._formBuilder.group({
          Day: new FormControl(['', Validators.required]),
          Time: new FormControl(['', Validators.required]),
        }),
        this._formBuilder.group({
          name: [''],
          national_code: ['', [Validators.required, this.ProcessUUID.validateNationalCode, this.ProcessUUID.isNumberValidate]],
          mobile: ['', [Validators.required, this.ProcessUUID.isNumberValidate, Validators.maxLength(11), Validators.minLength(11)]],
          email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        }),
        this._formBuilder.group({
          uploadFile: ['']
        }),
      ])
    });
    this.formOTD = this._formBuilder.group({
      otdCode: new FormControl(['', Validators.required])
    });
  }

  get employees(): FormArray {
    return this.formGroup.get('formArray') as FormArray;
  }

  f(i: any) {
    return (this.formGroup.get('formArray.0') as FormArray).controls[i];
  }

  f1(i: any) {
    return (this.formGroup.get('formArray.1') as FormArray).controls[i];
  }

  f2(i: any) {
    return (this.formGroup.get('formArray.2') as FormArray).controls[i];
  }

  changeWeek(day) {
    this.user.Day = day;
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    console.log('end');
    // if (this.NAP_SUCCEED1 === true) {
    stepper.next();

    // }
  }

  download() {
    var doc = new jsPDF();
    // doc.addFont('IRANSansWeb', 'Comic Sans', 'normal');
    doc.setFont('arial');
    doc.setFontSize(18);
    doc.text('سلام', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index);
      }
    });

    // Open PDF document in new tab
    doc.output('dataurlnewwindow');

    // Download PDF document
    doc.save('table.pdf');
  }

  onSubmit(stepper:MatStepper) {
    this.NAP_SUCCEED1 = false;
    this.invalidotdCode = false;

    if (this.otd.toString() === this.otdCode.toString()) {
stepper.next();
      this.showModal = false;
      this.edeskService.registerUser(this.user).subscribe((res) => {
          if (res['success']) {
            this.code_rahgiri = res['tracking_code'];
            this.NAP_SUCCEED1 = true;
            this.showModal = false;
            this.invalidotdCode = false;

            let data = {
              mobile: this.user.mobile,
              otd: this.code_rahgiri
            };
            this.edeskService.sendSMSCodeRahgiri(data).subscribe((responsed) => {
              console.log(responsed);
            });

          } else {
            console.log(res);
          }
        },
        (error => console.log(error))
      );

    } else {
      console.log('رمز اشتباه وارد کردی');
      this.showModal = true;
      this.otdCode = '';
      this.invalidotdCode = true;
    }

  }

  get_otd(): any {
    this.timeLeft = 60;
    let x;
    this.edeskService.get_OTD().subscribe((res) => {
      console.log(res['data']);
      x = res['data'];

    });
    return x;
  }

  sendSMS() {
    this.timeLeft = 60;
    this.otdCode = '';
    this.resendSMS = true;
    this.startTimer();
    this.edeskService.get_OTD().subscribe((res) => {
      // console.log(res)
      if (res['success'] === true) {
        let x = res['data'];
        this.otd = x;
        let data = {
          mobile: this.user.mobile,
          otd: x
        };
        this.edeskService.sendSMS(data).subscribe((response) => {
          console.log(response);
          // this.otd = res['tracking_code'];
          // console.log( this.otd);
        });
      }
    });

  }


  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.resendSMS = false;
        this.timeLeft = 0;
      }
    }, 4000);
  }

  setIndexAddress(i: any) {
    this.addressOffice = this.branchList.indexOf(i);
    this.addressOffice = this.Address[this.addressOffice];
    console.log(this.addressOffice);
  }

  prefixPhone(e: any) {
    if (this.user.mobile.length < 2) {
      this.user.mobile = '09';
    } else if (this.user.mobile.indexOf('09') !== 0) {
      this.user.mobile = '09' + String.fromCharCode(e.valueOf());
    }
  }

  ngOnDestroy(): void {
    if (this.numbersubscription) {
      this.numbersubscription.unsubscribe();
    }
  }

}
