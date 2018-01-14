import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  
  constructor(private http: HttpClient, private router: Router) {
  }
  ngOnInit(){
  }
  public data: any = {};
  public success: any = false;

  onSubmit = function(user){
    this.http.post('http://localhost:3000/contact_us_contact', user).subscribe(res => {
      console.log(res.sucess)
      if (res.sucess)
      {
        this.data = res;
        this.success = true;
      }
    });
  }

}
