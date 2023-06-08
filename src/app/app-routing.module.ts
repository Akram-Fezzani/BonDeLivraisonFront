import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminindexComponent } from './backoffice/adminindex/adminindex.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

const routes: Routes = [
  { path: "register", component: RegisterpageComponent},
  { path: "login", component: LoginComponent },
  { path: "userstats", component: UserStatsComponent },

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
