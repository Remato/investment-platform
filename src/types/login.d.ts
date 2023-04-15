declare interface LoginIntent {
  isAuthorized: boolean;
  login(): void;
}
