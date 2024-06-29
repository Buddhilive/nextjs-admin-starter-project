import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'solias-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
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
  }
}
