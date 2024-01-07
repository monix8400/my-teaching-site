import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {TeachingComponent} from "./teaching/teaching.component";
import {ContactComponent} from "./contact/contact.component";
import {AwdClassComponent} from "./awd-class/awd-class.component";
import {WpClassComponent} from "./wp-class/wp-class.component";
import {AllClassesComponent} from "./all-classes/all-classes.component";

export const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'about-me', component: AboutMeComponent},
  { path:'teaching', component: TeachingComponent, children:[
      { path:'', component: AllClassesComponent},
      { path:'awd', component: AwdClassComponent},
      { path:'wp', component: WpClassComponent}]},
  { path:'contact', component: ContactComponent},
  {path:'**', redirectTo:'home'}
];

