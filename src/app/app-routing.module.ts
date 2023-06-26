import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminindexComponent } from './backoffice/adminindex/adminindex.component';
import { AntennaStatsComponent } from './components/antenna-stats/antenna-stats.component';
import { CenterStatsComponent } from './components/center-stats/center-stats.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';

const routes: Routes = [
  { path: "register", component: RegisterpageComponent},
  { path: "login", component: LoginComponent },
  { path: "userstats", component: UserStatsComponent },
  { path: "centerstats", component: CenterStatsComponent },
  { path: "antennastats", component: AntennaStatsComponent },
  { path: "profile/:id", component: ProfilepageComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "updateprofile", component: UpdateprofileComponent },
  { path: "Changepassword", component: ChangepasswordComponent },

  { path: 'admin', component: AdminindexComponent ,

    children: [
     // { path: "users", component: UserStatsComponent,outlet:"adminCon"},
     // { path: "posts", component: PostStatsComponent,outlet:"adminCon"},
    //  { path: "comments", component: CommentsBackOfficeComponent,outlet:"adminCon"}
    


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
