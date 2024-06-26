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
    console.log(this.signUpForm);

    if(this.signUpForm?.valid) {
      const email = this.signUpForm?.value?.email ? this.signUpForm?.value?.email : '';
      const password = this.signUpForm?.value?.password ? this.signUpForm?.value?.password : '';
      if (email !== '' && password !== '') {
        this._authService.SignUp(email, password);
      }
    }
  }


}
