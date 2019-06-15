import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AuthenticationService } from './authentication.service';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'/welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthenticationService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
