import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./component/home-page/home-page.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./component/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {SignupComponent} from "./component/signup/signup.component";


export const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'dash', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  { path: '**', redirectTo: '' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes{ }

