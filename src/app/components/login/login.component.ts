import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

declare let loginForm: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    new loginForm();
  }
}
