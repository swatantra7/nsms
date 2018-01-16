import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ImagesService{

  public urls: any = false;

  constructor(private httpclient: HttpClient) { }
  getImages(): Observable<any>{
    return this.httpclient.get('https://sms-ws.herokuapp.com/upload_documents').map(res => res['urls']);
  }
}

const IMAGES = [

]