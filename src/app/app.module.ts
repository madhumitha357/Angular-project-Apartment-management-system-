import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResidentloginComponent } from './residentlogin/residentlogin.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ShowresidentsComponent } from './showresidents/showresidents.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { ResidenthomeComponent } from './residenthome/residenthome.component';
import { MaintainanceComponent } from './maintainance/maintainance.component';
import { ViewcontainmentstatusComponent } from './viewcontainmentstatus/viewcontainmentstatus.component'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth'

const appRoot: Routes = [{path: '', component: HomeComponent},
                         {path: 'login', component: LoginComponent},
                        {path: 'aboutus', component: AboutusComponent},
                        {path: 'register', component: RegistrationComponent},
                        {path: 'residentlogin', component: ResidentloginComponent},
                        {path: 'contactus', component: ContactusComponent},
                        {path: 'view', component: ViewcontainmentstatusComponent},
                        {path: 'con', component: ContactComponent}
                       // {path: 'admin', component: AdminComponent },
                        //{path : 'admin/showresidents' , component:ShowresidentsComponent},
                       // {path : 'residenthome' , component:ResidenthomeComponent},
                       // {path : 'admin/maintenance' , component:MaintainanceComponent},
                       // { path: 'admin/maintenance', redirectTo: '/admin/maintenance', pathMatch: 'full' },

                       // { path: '**', redirectTo: '/admin/showresidents', pathMatch: 'full' }
                          
                        




                        
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutusComponent,
    ContactusComponent,
    ResidentloginComponent,
    ContactComponent,
    AdminComponent,
    ResidenthomeComponent,
    MaintainanceComponent,
    ViewcontainmentstatusComponent
  ],
  imports: [
    
 BrowserAnimationsModule , 
 ToastrModule.forRoot(), 
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot),

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
