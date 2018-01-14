import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public imagesSources: string[] = [
    'assets/img/image1.JPG'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  }; 

  constructor() { }

  ngOnInit() {
  }

}
