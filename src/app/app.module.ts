import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { BackofficeFooterComponent } from './backoffice/backoffice-footer/backoffice-footer.component';
import { BackofficeSidebarComponent } from './backoffice/backoffice-sidebar/backoffice-sidebar.component';
import { AdminindexComponent } from './backoffice/adminindex/adminindex.component';
import { BackofficeNavComponent } from './backoffice/backoffice-nav/backoffice-nav.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { CenterStatsComponent } from './components/center-stats/center-stats.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddCollectorComponent } from './components/add-collector/add-collector.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterpageComponent,
    BackofficeSidebarComponent,
    AdminindexComponent,
    BackofficeNavComponent,
    UserStatsComponent,
    BackofficeFooterComponent,
    LoginComponent,
    CenterStatsComponent,
    
    AddCollectorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    MatDialogModule,
    FooterComponent
  ],

  bootstrap: [AppComponent],
  entryComponents: [AddCollectorComponent]

})
export class AppModule { }
