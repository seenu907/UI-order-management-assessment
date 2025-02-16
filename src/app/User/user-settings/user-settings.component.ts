import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-settings',
  imports: [],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent implements OnInit {
user:User=new User();
  constructor(private userService:UserService,
    private route: ActivatedRoute,
     private router:Router) { 

  }

  ngOnInit():void { 
    }

  onSubmit(){
    console.log(this.user); 
  }
}
