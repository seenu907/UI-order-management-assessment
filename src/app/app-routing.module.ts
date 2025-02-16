import {Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component'; 
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '',  component: UserRegisterComponent },
    { path: 'user-register', component: UserRegisterComponent },
    { path: 'user-login', component: UserLoginComponent },
    { path: 'user-settings', component: UserSettingsComponent },  
];

@NgModule({  
    imports: [RouterModule.forRoot(routes),CommonModule] ,
    exports: [RouterModule] 
})
export class AppRoutingModule { }