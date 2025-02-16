import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { UserLogin } from '../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css' 
})
export class UserLoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  constructor(private userService:UserService,
    route: ActivatedRoute=inject(ActivatedRoute),
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userLogin);
  }
}