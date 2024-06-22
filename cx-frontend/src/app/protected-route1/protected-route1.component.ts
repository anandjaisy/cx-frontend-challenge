import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-protected-route1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './protected-route1.component.html',
  styleUrl: './protected-route1.component.scss'
})
export class ProtectedRoute1Component {

}
