export default interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UsersLogin {
  email: string;
  password: string;
}
