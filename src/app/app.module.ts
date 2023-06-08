import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { BackofficeFooterComponent } from './backoffice/backoffice-footer/backoffice-footer.component';
import { BackofficeSidebarComponent } from './backoffice/backoffice-sidebar/backoffice-sidebar.component';
import { AdminindexComponent } from './backoffice/adminindex/adminindex.component';
import { BackofficeNavComponent } from './backoffice/backoffice-nav/backoffice-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterpageComponent,
    BackofficeSidebarComponent,
    AdminindexComponent,
    BackofficeNavComponent,
    BackofficeFooterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule ,
    HttpClientModule
  ],
  providers: [],
  exports: [   
    NavbarComponent,
    LoginComponent,
    RegisterpageComponent,
    BackofficeFooterComponent,
    BackofficeSidebarComponent,
    AdminindexComponent,
    BackofficeNavComponent,
    BackofficeFooterComponent,
    FooterComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
