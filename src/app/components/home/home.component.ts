import { Component, OnInit } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items: Array<any> =[];
  constructor() {
    this.items = [
      { name: 'assets/img/image1.JPG'},
      { name: 'assets/img/image2.JPG'},
      { name: 'assets/img/image3.JPG'},
    ];
  }
  ngOnInit() {
  }
}
