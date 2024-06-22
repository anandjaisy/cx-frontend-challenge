import {Permissions, Role} from "./model/enum";
import {User} from "./model/user";

export const rolePermission: Record<Role, Permissions[]> = {
  [Role.Admin]: [],
  [Role.Staff]: [Permissions.CanCreateUser,
    Permissions.CanReadUser,
    Permissions.CanUpdateUser,
    Permissions.CanDeleteUser,
    Permissions.CanViewProtectedRoute1,
    Permissions.CanViewProtectedRoute2,],
};

export function getUserPermission(user: User): Permissions[]{
  const permissionSet = new Set<Permissions>();
  user.roles.forEach(role => {
    rolePermission[role].forEach(permission => {
      permissionSet.add(permission);
    });
  });
  return Array.from(permissionSet);
}
