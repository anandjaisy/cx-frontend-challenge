import { Routes } from '@angular/router';
import {UserDetailsComponent} from "./admin/user/user-details/user-details.component";
import {ProtectedRoute1Component} from "./protected-route1/protected-route1.component";
import {ProtectedRoute2Component} from "./protected-route2/protected-route2.component";
import {UserComponent} from "./admin/user/user.component";
import {ProtectedRoute2GuardService} from "./protected-route2/protected-route2-guard.service";
import {ProtectedRoute1GuardService} from "./protected-route1/protected-route1-guard.service";

export const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'protectedRoute1', component: ProtectedRoute1Component, canActivate: [ProtectedRoute1GuardService] },
  { path: 'protectedRoute2', component: ProtectedRoute2Component, canActivate: [ProtectedRoute2GuardService] },
  { path: ':id', component: UserDetailsComponent },
];
