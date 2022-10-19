import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

declare let loginForm: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLogged!: boolean;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.getToken() ? true : false;
    new loginForm();
    if (this.tokenService.getToken()) {
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    document.getElementById('loading')!.style.visibility = 'visible';
    this.loginService
      .login({
        email: this.loginForm.get('email')?.value!,
        password: this.loginForm.get('password')?.value!,
      })
      .subscribe(
        (data) => {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/home']);
          window.location.reload();
          localStorage.setItem('menu', JSON.stringify([]));
        },
        (err) => {
          console.log(err);
          document.getElementById('loading')!.style.visibility = 'hidden';
          this.loginFail();
        }
      );
  }

  loginFail() {
    Swal.fire({
      title: 'Usuario o contraseña incorrectos',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
