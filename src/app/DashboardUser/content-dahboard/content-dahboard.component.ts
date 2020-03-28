import { Component, OnInit, ViewChild } from '@angular/core';
import {EdeskService} from '../../service/edesk.service';

@Component({
  selector: 'app-content-dahboard',
  templateUrl: './content-dahboard.component.html',
  styleUrls: ['./content-dahboard.component.scss']
})
export class ContentDahboardComponent implements OnInit {
  listUser:any=[];
  constructor(private  edeskservice:EdeskService) { }
  ngOnInit() {
    this.edeskservice.readuser().subscribe((res)=>{
      this.listUser=res['data'];
    })
  }

}
