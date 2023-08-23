import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

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
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { AntennaStatsComponent } from './components/antenna-stats/antenna-stats.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AddRoleComponent } from './components/dialogs/add-role/add-role.component';
import { RolesTableComponent } from './components/tables/roles-table/roles-table.component';
import { SocieteTableComponent } from './components/tables/societe-table/societe-table.component';
import { AddSocieteComponent } from './components/dialogs/add-societe/add-societe.component';
import { TabsModule } from "ngx-bootstrap/tabs";

import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddSpeculationComponent } from './components/dialogs/add-speculation/add-speculation.component';
import { SpeculationTableComponent } from './components/tables/speculation-table/speculation-table.component';
import { DomainTableComponent } from './components/tables/domain-table/domain-table.component';
import { TypeTableComponent } from './components/tables/type-table/type-table.component';
import { AddTypeComponent } from './components/dialogs/add-type/add-type.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {CollapseModule} from "ngx-bootstrap/collapse";
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AddAntennaComponent } from './components/dialogs/add-antenna/add-antenna.component';
import { AddCenterComponent } from './components/dialogs/add-center/add-center.component';
import { AddChefcenterComponent } from './components/dialogs/add-chefcenter/add-chefcenter.component';
import { AddCollectorComponent } from './components/dialogs/add-collector/add-collector.component';
import { AddDomainComponent } from './components/dialogs/add-domain/add-domain.component';
import { AntennalistTableComponent } from './components/tables/antennalist-table/antennalist-table.component';
import { BuildingsTableComponent } from './components/tables/buildings-table/buildings-table.component';
import { CentresTableComponent } from './components/tables/centres-table/centres-table.component';
import { ChefcentreTableComponent } from './components/tables/chefcentre-table/chefcentre-table.component';
import { CollectorsTableComponent } from './components/tables/collectors-table/collectors-table.component';
import { AddCommandComponent } from './components/dialogs/add-command/add-command.component';
import { BlTableComponent } from './components/tables/bl-table/bl-table.component';
import { AddBlComponent } from './components/dialogs/add-bl/add-bl.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { BeTableComponent } from './components/tables/be-table/be-table.component';
import { AddBeComponent } from './components/dialogs/add-be/add-be.component';
import { CountsComponent } from './components/counts/counts.component';
import { ProductTableComponent } from './components/tables/product-table/product-table.component';
import { AddProductComponent } from './components/dialogs/add-product/add-product.component';
import { AddChauffeurComponent } from './components/dialogs/add-chauffeur/add-chauffeur.component';
import { ChauffeurTableComponent } from './components/tables/chauffeur-table/chauffeur-table.component';
import { VehiculeTableComponent } from './components/tables/vehicule-table/vehicule-table.component';
import { AddVehiculeComponent } from './components/dialogs/add-vehicule/add-vehicule.component';
import { AddBuildingComponent } from './components/dialogs/add-building/add-building.component';
import { DemandevetoTableComponent } from './components/tables/demandeveto-table/demandeveto-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DemandevetobycenterTableComponent } from './components/tables/demandevetobycenter-table/demandevetobycenter-table.component';
import { CentersbyantennaTableComponent } from './components/tables/centersbyantenna-table/centersbyantenna-table.component';
import { BuildingByAntennaTableComponent } from './components/tables/building-by-antenna-table/building-by-antenna-table.component';
import { VetoByAntennaTableComponent } from './components/tables/veto-by-antenna-table/veto-by-antenna-table.component';
import { CollectorsByAntennaTableComponent } from './components/tables/collectors-by-antenna-table/collectors-by-antenna-table.component';


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
         AddCommandComponent,
         BlTableComponent,
         AddBlComponent,
         BeTableComponent,
         AddBeComponent,
         CountsComponent,
         ProductTableComponent,
         AddProductComponent,
         ChauffeurTableComponent,
         AddChauffeurComponent,
         VehiculeTableComponent,
         AddVehiculeComponent,
         AddBuildingComponent,
         DemandevetoTableComponent,
         DemandevetobycenterTableComponent,
         CentersbyantennaTableComponent,
         BuildingByAntennaTableComponent,
         VetoByAntennaTableComponent,
         CollectorsByAntennaTableComponent,

  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,

    AppRoutingModule,
    CollapseModule,
    MatBadgeModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTableModule,
    TabsModule,
    MatPaginatorModule,
    BsDatepickerModule,
    BsDropdownModule,
    MatIconModule,
    PaginationModule,
    MatInputModule,
    BsDatepickerModule.forRoot(),
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTreeModule,
    BrowserAnimationsModule,
    JwBootstrapSwitchNg2Module,
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
    ToastrModule,
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
    AddProductComponent,
    AddSocieteComponent
  ]

})
export class AppModule { }