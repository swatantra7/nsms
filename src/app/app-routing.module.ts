import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { GallaryComponent } from './components/gallary/gallary.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component'
import { AdmissionsComponent } from './components/admissions/admissions.component'
import { OurachievementComponent } from './components/ourachievement/ourachievement.component'
import { PrincipalmessageComponent } from './components/principalmessage/principalmessage.component'
import { KmmsgComponent } from './components/kmmsg/kmmsg.component'
import { ResponseComponent } from './components/response.component'
import { UploadImageComponent } from './components/upload-image/upload-image.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'ourachievement', component: OurachievementComponent },
  { path: 'principalmessage', component: PrincipalmessageComponent },
  { path : 'kmmsg', component: KmmsgComponent },
  { path: 'response', component: ResponseComponent },
  { path: 'upload-image', component: UploadImageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule ({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ] 
})

export class AppRoutingModule{}