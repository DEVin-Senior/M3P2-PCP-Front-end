import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  value1: string = '';

  value2: string = '';

  onClickCadastrar() {
    this.router.navigate(['/login/register']);
  }

  cancelMessages: boolean = true;
  loginError!: boolean;
  registering!: boolean;
  successMessage!: string;

  apiURL: string = environment.apiBaseURL;

  user: User = new User();

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        if (response) {
          this.loginError = false;
          this.successMessage = 'Bem vindo!';
        }
        this.router.navigate(['layout/home']);
      },
      (errorResponse) => {
        this.loginError = true;
      }
    );
  }
}
