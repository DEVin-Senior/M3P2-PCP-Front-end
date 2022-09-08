import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
 
  constructor(
    private router: Router, 
    private authService: AuthService
  ) { }

  loginError!: boolean;
  registering!: boolean;
  successMessage!: string;

  entryUser: string = '';

  entryMail: string = '';

  entryPassword1: string = '';

  entryPassword2: string = '';

  user: User = new User();

  ngOnInit(): void {
  }

  registerUser(){
    if(this.entryPassword1==this.entryPassword2){
      this.user.name = this.entryUser;
      this.user.email = this.entryMail;
      this.user.password = this.entryPassword1;
      this.authService.saveUser(this.user).subscribe(response => {
        this.successMessage = "Cadastro realizado com sucesso! Faça o login!";
        this.router.navigate([''])
        this.loginError = false;
      }, error => {
        this.loginError = true;
      });
    }
    
  }

}
