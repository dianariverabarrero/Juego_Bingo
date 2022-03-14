import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { RegistroComponent } from '../pages/registro/registro.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'login', component:LoginComponent},
  {path:'edit/:id', component:RegistroComponent}
];


@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
  })
  export class AppRoutingModule { }
