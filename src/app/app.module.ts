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
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { AddAntennaComponent } from './components/add-antenna/add-antenna.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { ChefcentreTableComponent } from './components/chefcentre-table/chefcentre-table.component';
import { CentresTableComponent } from './components/centres-table/centres-table.component';
import { AntennalistTableComponent } from './components/antennalist-table/antennalist-table.component';
import { AddChefcenterComponent } from './components/add-chefcenter/add-chefcenter.component';
import { AntennaStatsComponent } from './components/antenna-stats/antenna-stats.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { RolesTableComponent } from './components/roles-table/roles-table.component';
import { SocieteTableComponent } from './components/societe-table/societe-table.component';
import { AddSocieteComponent } from './components/add-societe/add-societe.component';



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
    
    AddCollectorComponent,
         AddAntennaComponent,
         AddCenterComponent,
         ChefcentreTableComponent,
         CentresTableComponent,
         AntennalistTableComponent,
         AddChefcenterComponent,
         AntennaStatsComponent,
         PaginationComponent,
         RolesTableComponent,
         AddRoleComponent,
         SocieteTableComponent,
         AddSocieteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule ,
    MatTabsModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  exports: [   
    NavbarComponent,
    LoginComponent,
    RegisterpageComponent,
    BackofficeFooterComponent,
    BackofficeSidebarComponent,
    MatPaginatorModule,
    AdminindexComponent,
    BackofficeNavComponent,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,

    BackofficeFooterComponent,
    MatTabsModule,
    MatSortModule,
    MatDialogModule,
    FooterComponent
  ],

  bootstrap: [AppComponent],
  entryComponents: [
    AddCollectorComponent,
    AddChefcenterComponent,
    AddCenterComponent,
    AddAntennaComponent,
    AddRoleComponent,
    AddSocieteComponent
  ]

})
export class AppModule { }
