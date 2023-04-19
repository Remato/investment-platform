declare interface LoginIntent {
  users: User[];
  isAuthorized: boolean;
  login(credentials: Credentials): boolean;
  logoff(): void;
  createUser(user: User): void;
}

declare type Credentials = {
  email: string;
  password: string;
};

declare type User = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};
