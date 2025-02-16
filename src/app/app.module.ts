import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component'; 
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, UserRegisterComponent, UserLoginComponent, UserSettingsComponent],
  imports: [BrowserModule,CommonModule, AppRoutingModule, HttpClient,FormsModule],
  bootstrap: [AppComponent]  
})

export class AppModule { }
