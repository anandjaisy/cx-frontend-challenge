import {createReducer, on} from '@ngrx/store';
import {User} from "../../model/user";
import {UserActions} from "./user.actions";

export interface State {
  users: User[];
}

export const initialState: State = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, {data}) => {
    const existingIds = state.users.map(user => user.id);
    const newUsers = data.filter(newUser => !existingIds.includes(newUser.id));
    return {
      ...state,
      users: [...state.users, ...newUsers]
    };
  }),
  on(UserActions.saveUsersRolePermission, (state, {userId, role, permissions}) => {
    const userIndex = state.users.findIndex(user => user.id === userId);
    if (userIndex === -1)
      return state;
    const updatedUser = {
      ...state.users[userIndex],
      role,
      permissions
    };
    const updatedUsers = [...state.users];
    updatedUsers[userIndex] = updatedUser;

    return {
      ...state,
      users: updatedUsers
    };
  }),
  on(UserActions.deleteUsers, (state, {userId}) => {
    const filteredUsers = state.users.filter(user => user.id !== userId);
    return {
      ...state,
      users: filteredUsers
    };
  }),
  on(UserActions.loadUsersFailure, (state) => ({
    ...state,
    users: []
  })),
);

