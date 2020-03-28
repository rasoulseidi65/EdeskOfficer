import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
    numbersubscription:Subscription;


  constructor() {


  }

  ngOnInit() {

  }
ngOnDestroy(): void {
    if (this.numbersubscription){
        this.numbersubscription.unsubscribe();
}
}
}
