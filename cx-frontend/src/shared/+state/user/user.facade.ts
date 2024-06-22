import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {UserActions} from "./user.actions";
import {Store} from "@ngrx/store";
import {selectAllUsers, selectUser} from "./user.selectors";
import {State} from "./user.reducer";
import {Permissions, Role} from "../../model/enum";

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  users$: Observable<User[]> = this.store.select(selectAllUsers);
  constructor(private store: Store<State>) {}

  loadUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }
  loadUser(id: number) {
     return this.store.select(selectUser(id));
  }
  saveRolePermission(userId: number, role: Role, permissions: Permissions[] | undefined): void{
    this.store.dispatch(UserActions.saveUsersRolePermission({userId: userId, role: role, permissions: permissions}));
  }
  deleteUser(userId: number) {
    this.store.dispatch(UserActions.deleteUsers({userId: userId}));
  }
}
