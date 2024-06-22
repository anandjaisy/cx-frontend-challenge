import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {User} from "../../model/user";
import {Permissions, Role} from "../../model/enum";

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: User[] }>(),
    'Load Users Failure': emptyProps(),
    'Save Users Role Permission': props<{userId: number, role: Role, permissions: Permissions[] | undefined}>()
  }
});
