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
import { BuildingsTableComponent } from './components/buildings-table/buildings-table.component';
import { CollectorsTableComponent } from './components/collectors-table/collectors-table.component';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddSpeculationComponent } from './components/add-speculation/add-speculation.component';
import { SpeculationTableComponent } from './components/speculation-table/speculation-table.component';
import { DomainTableComponent } from './components/domain-table/domain-table.component';
import { TypeTableComponent } from './components/type-table/type-table.component';
import { AddDomainComponent } from './components/add-domain/add-domain.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {CollapseModule} from "ngx-bootstrap/collapse";
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PaginationModule } from "ngx-bootstrap/pagination";


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
    UpdateprofileComponent,
    CenterStatsComponent,
    AddCollectorComponent,
    ChangepasswordComponent,
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
         BuildingsTableComponent,
         CollectorsTableComponent,
         SpeculationTableComponent,
         AddSpeculationComponent,
         DomainTableComponent,
         TypeTableComponent,
         AddDomainComponent,
         AddTypeComponent,
         ProfilepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule,
    MatBadgeModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    PaginationModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTreeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule ,
    MatTabsModule,
    MatSortModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
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
    UpdateprofileComponent,
    BackofficeFooterComponent,
    MatTabsModule,
    ChangepasswordComponent,
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
    AddSpeculationComponent,
    AddSocieteComponent
  ]

})
export class AppModule { }