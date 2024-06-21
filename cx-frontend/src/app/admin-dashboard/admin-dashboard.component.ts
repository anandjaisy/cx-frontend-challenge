import { Component } from '@angular/core';
import {UserComponent} from "./user/user.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
