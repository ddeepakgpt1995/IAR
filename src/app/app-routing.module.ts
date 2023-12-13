import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  // {path:'' , redirectTo: '/login', pathMatch: 'full'},
  {path:'' ,component:DashboardComponent},//http://localhost:4200
  {path:'dashboard', component:DashboardComponent},//http://localhost:4200/dashboard
  {path:'login', component:LoginPageComponent},////http://localhost:4200/login
  {path:'cart', children:[
    {path:'',component:CartComponent },
    {path:':id',component:CartComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
