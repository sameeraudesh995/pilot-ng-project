import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./component/home-page/home-page.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes{ }

