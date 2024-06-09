import { Routes } from '@angular/router';
import { IndexContainerComponent } from './public/index-container/index-container.component';
import { AuthDashboardComponent } from './auth/auth-dashboard/auth-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexContainerComponent
    },
    {
        path: 'portal',
        component: AuthDashboardComponent
    }
];
