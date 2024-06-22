import { createFeatureSelector, createSelector } from '@ngrx/store';
import {State} from "./user.reducer";
import {User} from "../../model/user";

export const selectUserState = createFeatureSelector<State>('user');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: State) => state.users
);
// Selector to get a user by ID
export const selectUser = (userId: number) => createSelector(
  selectAllUsers,
  (users: User[]) => users.find(user => user.id === userId)
);
