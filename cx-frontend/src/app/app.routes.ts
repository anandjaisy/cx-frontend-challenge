import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {UserDetailsComponent} from "./admin-dashboard/user/user-details/user-details.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/:id', component: UserDetailsComponent },
];
