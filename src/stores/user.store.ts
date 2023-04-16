import { create } from 'zustand';

const useLogin = create<LoginIntent>(set => ({
  users: [],
  isAuthorized: false,

  login: (_credentials: Credentials) => {
    //access users and verify
    set(() => ({ isAuthorized: true }));
  },

  logoff: () => set(() => ({ isAuthorized: false })),

  createUser: (newUser: User) =>
    set(prevState => ({
      users: [newUser, ...prevState.users],
    })),
}));

export default useLogin;
