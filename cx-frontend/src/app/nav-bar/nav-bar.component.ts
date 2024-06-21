import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'cx-nav-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatDivider
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
