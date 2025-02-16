import { Component,inject,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../../services/user.service';

 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css', 
})
export class UserRegisterComponent implements OnInit {
  user:User=new User();
  constructor(private userService:UserService,
     route: ActivatedRoute=inject(ActivatedRoute),
     private router:Router) { 

  }

  ngOnInit():void { 
    }

  onSubmit(){
    console.log(this.user); 
  }

}