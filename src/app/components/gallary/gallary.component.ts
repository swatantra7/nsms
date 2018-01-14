import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
  providers: [ ImagesService ]
})
export class GallaryComponent implements OnInit {
    
  images: any [];

  constructor( private imagesService: ImagesService ) {  }

  ngOnInit() {
    this.imagesService.getImages().subscribe((result) =>{
    this.images = result
    });
  }
}
