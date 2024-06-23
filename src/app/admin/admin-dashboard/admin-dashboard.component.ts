import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../components/admin-layout/admin-layout.component';

@Component({
  selector: 'solias-admin-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
