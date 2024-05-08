export class UserSession {
  UserName: string = '';
  Email: string = '';
  DisplayName: String = '';
  jwt: string = '';
}

export interface RequestLoginUser {
  username: string;
  password: string;
  method: string;
}

export interface ResponseLoginUser {
  jwt: Jwt;
  user: User;
  permissions: Permission[];
}

export interface Jwt {
  token: string;
  refreshToken: string;
}

export interface User {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Permission {
  id: number;
  displayName: string;
  code: string;
  path: string;
  icon: string;
  visible: boolean;
  type: number;
  parent: number;
  subPermissions?: Permission[];
}
