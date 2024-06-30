import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'solias-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private _authService = inject(AuthService);

  resetPassForm = new FormGroup(
    {
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ])
    }
  );

  onSubmit() {
    console.log(this.resetPassForm);
    if (this.resetPassForm?.valid) {
      const email = this.resetPassForm?.value?.email ? this.resetPassForm?.value?.email : '';

      if (email !== '') {
        this._authService.forgotPassword(email);
      }
    }
  }
}
