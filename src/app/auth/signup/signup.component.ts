import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'solias-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private _authService = inject(AuthService);

  signUpForm = new FormGroup(
    {
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6)
        ]),
      confirmPassword: new FormControl('', Validators.required)
    },
    {
      validators: this.passwordMatchValidator
    }
  );

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { mismatch: true };
    }

    return null;
  }

  onSubmit() {
    // Submit form data to your backend service here
    console.log(this.signUpForm?.value);
  }


}
