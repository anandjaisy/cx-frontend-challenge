import {Company} from "./Company";
import {Address} from "./Address";
import {Permissions, Role} from "./enum";

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company,
  role: Role,
  permissions?: Permissions[]
}
