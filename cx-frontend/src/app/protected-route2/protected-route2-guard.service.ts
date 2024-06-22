import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {UserFacade} from "../../shared/+state/user/user.facade";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Permissions} from "../../shared/model/enum";

@Injectable({
  providedIn: 'root'
})
export class ProtectedRoute2GuardService implements CanActivate {
  constructor(private userFacade: UserFacade) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userFacade.users$.pipe(
      map(users => {
        const hasPermission = users.some(user =>
          user.permissions?.includes(Permissions.CanViewProtectedRoute2)
        );
        if (!hasPermission) {
          // Redirect to an access-denied page if needed
        }
        return hasPermission;
      })
    );
  }
}
