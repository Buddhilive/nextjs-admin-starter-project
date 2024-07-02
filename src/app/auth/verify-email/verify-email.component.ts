import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { interval, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'solias-verify-email',
  standalone: true,
  imports: [],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
  private _authService = inject(AuthService);

  isDisbled = true;
  countdown: number = 10;
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(
        takeWhile(() => this.countdown > 0)
      )
      .subscribe(() => {
        this.countdown--;
        if (this.countdown === 0) {
          this.isDisbled = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  resendVerification() {
    this._authService.sendVerificationMail();
    this.countdown = 10;
    this.isDisbled = true;
  }
}
