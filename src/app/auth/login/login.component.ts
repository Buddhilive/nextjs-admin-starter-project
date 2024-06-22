import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';

@Component({
  selector: 'solias-login',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.GoogleAuth();
  }
}
