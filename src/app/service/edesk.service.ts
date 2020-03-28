import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdeskService {
  // public
  headers={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    })
  }
  constructor(private http: HttpClient) {

  }
  registerUser(data:any){

    return this.http.post<any>('http://194.5.175.25:3000/api/v1/register',data);
  }
  readuser(){
    return this.http.get('http://194.5.175.25:3000/api/v1/admin/users');
  }
  sendSMS(data:any){
    return this.http.post<any>('http://194.5.175.25:3000/api/v1/sendsms',data);

  }
  sendSMSCodeRahgiri(data:any){
    return this.http.post<any>('http://194.5.175.25:3000/api/v1/sendsmsCodeRahgiri',data);

  }
  get_OTD(){
    return this.http.get('http://194.5.175.25:3000/api/v1/OTD');

  }
}
