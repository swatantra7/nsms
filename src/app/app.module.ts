import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { OurachievementComponent } from './components/ourachievement/ourachievement.component';
import { PrincipalmessageComponent } from './components/principalmessage/principalmessage.component';
import { ResponseComponent } from './components/response.component'
import { KmmsgComponent } from './components/kmmsg/kmmsg.component'
import { FooterComponent } from './components/footer/footer.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    GallaryComponent,
    ContactUsComponent,
    AdmissionsComponent,
    OurachievementComponent,
    PrincipalmessageComponent,
    ResponseComponent,
    KmmsgComponent,
    FooterComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
