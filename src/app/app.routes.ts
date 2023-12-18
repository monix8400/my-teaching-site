import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {TeachingComponent} from "./teaching/teaching.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'about-me', component: AboutMeComponent},
  { path:'teaching', component: TeachingComponent},
  { path:'contact', component: ContactComponent},

  {path:'**', redirectTo:''}
];
