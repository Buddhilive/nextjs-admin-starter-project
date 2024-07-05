import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'solias-account-details',
  standalone: true,
  imports: [],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent implements OnInit {

  private _authService = inject(AuthService);

  userInfo!: User | null;

  ngOnInit(): void {
      this.loadUserInfo();
  }

  async loadUserInfo() {
    this.userInfo = await this._authService.getUserInfo();
    // console.log(this.userInfo)
  }
}
