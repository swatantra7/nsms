import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(private http: HttpClient,
  private elem: ElementRef) { }

  ngOnInit() {
  }
  uploadImage=function(){
    alert('hello');
    let files = this.elem.nativeElement.querySelector('#upload_document').files
    let formData = new FormData();
    let file = files[0];
    formData.append('upload_document[documents]', file, file.name);
    alert(formData);
    this.http.post('https://sms-ws.herokuapp.com/upload_documents', formData).subscribe(res=>{
    });
  }

}
