import { Routes } from '@angular/router';
import { IndexContainerComponent } from './public/index-container/index-container.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './public/error-page/error-page.component';
import { authGuard } from './auth/auth-guard.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AccountDetailsComponent } from './admin/account-details/account-details.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexContainerComponent
    },
    {
        path: 'portal',
        component: AdminDashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'sign-in',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignupComponent
    },
    {
        path: 'reset-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'verify-email-address',
        component: VerifyEmailComponent
    },
    {
        path: 'profile',
        component: AccountDetailsComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];
