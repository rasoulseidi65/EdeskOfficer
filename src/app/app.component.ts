import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Event, Router,NavigationStart,NavigationEnd} from '@angular/router';
import {EdeskService} from './service/edesk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edesk';

  showMenu: boolean = true;
  constructor(private spinner: NgxSpinnerService, private router: Router,private edeeskService:EdeskService) {
    // if (this.router.url === 'error') {
    //   this.showMenu = false;
    // }
    // this.router.events.subscribe((routerEvent:Event)=>{
    //   if(routerEvent instanceof NavigationStart){
    //     this.showLoadingIndicator=true;
    //     spinner.show();
    //   }
    //   if(routerEvent instanceof NavigationEnd){
    //     this.showLoadingIndicator=false;
    //     spinner.hide();
    //   }
    // });

}


ngOnInit(){
    this.spinner.show();
     this.edeeskService.get_OTD().subscribe((res)=>{
      if(res['success']){
        this.spinner.hide();
      }
     })
}
}
