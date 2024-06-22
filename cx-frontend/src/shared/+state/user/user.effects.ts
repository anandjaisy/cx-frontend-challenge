import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {environment} from "../../../environments/environment";
import {UserActions} from "./user.actions";
import {GenericHttpClient} from "../../http.service";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserEffects {
  constructor(private actions$: Actions, private genericHttpClient: GenericHttpClient<User[]> ) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    exhaustMap(() =>{
      console.log("Test")
     return this.genericHttpClient.get(environment.userUrl).pipe(
       map(users => UserActions.loadUsersSuccess({ data: users })),
       catchError(error => of(UserActions.loadUsersFailure()))
     )
    }
    )
  ));
}
