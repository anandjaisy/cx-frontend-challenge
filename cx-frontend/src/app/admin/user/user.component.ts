import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {UserFacade} from "../../../shared/+state/user/user.facade";
import {AsyncPipe} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Role} from "../../../shared/model/enum";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'cx-user',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users$ = this.userFacade.users$;
  role=  Role;
  constructor(private userFacade: UserFacade,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.userFacade.loadUsers();
  }
  deleteUser(id: number): void {
    this.userFacade.deleteUser(id);
    this._snackBar.open(`User with id ${id} deleted successfully.}`,'',{
      duration: 3000
    });
  }
}
