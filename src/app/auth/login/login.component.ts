import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'solias-login',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _authService = inject(AuthService);

  loginForm = new FormGroup(
    {
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      )
    }
  );

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm?.value?.email ? this.loginForm?.value?.email : '';
      const password = this.loginForm?.value?.password ? this.loginForm?.value?.password : '';
      if (email !== '' && password !== '') {
        this._authService.SignIn(email, password);
      }
    }
  }
}
