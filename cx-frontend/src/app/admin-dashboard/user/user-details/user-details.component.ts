import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {Permissions, Role} from "../../../../shared/model/enum";
import {UserFacade} from "../../../../shared/+state/user/user.facade";
import {ActivatedRoute} from "@angular/router";
import {async, Observable, tap} from "rxjs";
import {User} from "../../../../shared/model/user";
import {AsyncPipe, CommonModule} from "@angular/common";
import {State} from "../../../../shared/+state/user/user.reducer";
import {Store} from "@ngrx/store";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatTabsModule, MatCard, MatCardContent, AsyncPipe, ReactiveFormsModule, MatButton],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  role = Role;
  permissions = Permissions;
  private id: number = 0;
  user$: Observable<User | undefined> | undefined = undefined;
  user: User = {} as User;
  selectedRole = new FormControl();
  selectedPermission = new FormControl();
  constructor(private userFacade: UserFacade,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar
              ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.loadUser();
    });
  }

  private loadUser(): void {
    this.user$ = this.userFacade.loadUser(this.id);
    this.user$.pipe(tap((item) => {
      this.user = (item as User);
      this.selectedRole.setValue(this.user?.role);
      this.selectedPermission.setValue(this.user.permissions);
    })).subscribe();
  }

  isStaffRole(): boolean{
    return this.selectedRole.value == Role.Staff;
  }
  onSavePermission(): void{
    this.userFacade.saveRolePermission(this.id, this.selectedRole.value, this.selectedPermission.value);
    const role = this.selectedRole.value === Role.Admin ? 'Admin' : 'Staff';
    this._snackBar.open(`${role} has assumed the role of ${this.user.name}`,'',{
      duration: 3000
    });
  }

}
