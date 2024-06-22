import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-protected-route2',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './protected-route2.component.html',
  styleUrl: './protected-route2.component.scss'
})
export class ProtectedRoute2Component {

}
