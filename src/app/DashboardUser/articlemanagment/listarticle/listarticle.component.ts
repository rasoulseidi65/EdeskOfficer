
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.scss']
})
export class ListarticleComponent implements OnInit {
  data:string[]=[];
  id;
  constructor() {

  }

  ngOnInit() {

  }

}
