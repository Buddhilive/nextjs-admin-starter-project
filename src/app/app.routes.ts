import { Routes } from '@angular/router';
import { IndexContainerComponent } from './public/index-container/index-container.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexContainerComponent
    },
    {
        path: 'portal',
        component: AdminDashboardComponent
    }
];
