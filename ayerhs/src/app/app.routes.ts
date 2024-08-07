import { Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { RegistrationComponent } from './component/account/registration/registration.component';
import { LayoutComponent } from './component/layout/shared/layout/layout.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { OtpVerificationComponent } from './component/account/otp-verification/otp-verification.component';
import { ActivateAccountComponent } from './component/account/activate-account/activate-account.component';
import { ForgotPasswordComponent } from './component/account/forgot-password/forgot-password.component';
import { PasswordResetComponent } from './component/account/password-reset/password-reset.component';
import { PartitionsComponent } from './component/user/partitions/partitions.component';
import { GroupsComponent } from './component/user/groups/groups.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'otp-verification',
    component: OtpVerificationComponent,
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'user/partitions',
        component: PartitionsComponent,
      },
      {
        path: 'user/groups',
        component: GroupsComponent
      },
    ],
  },
];
