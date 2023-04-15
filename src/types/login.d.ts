declare interface LoginIntent {
  users: User[];
  isAuthorized: boolean;
  login(): void;
}

declare type User = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};
