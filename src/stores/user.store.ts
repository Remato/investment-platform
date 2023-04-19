import { create } from 'zustand';

const useLogin = create<LoginIntent>((set, get) => ({
  users: [],
  isAuthorized: false,

  login: ({ email, password }: Credentials): boolean => {
    const userExists = get().users.map(
      ({ email: currentMail, password: currentPass }) => {
        currentMail === email && password === currentPass;
      },
    );
    if (userExists) {
      set(() => ({ isAuthorized: true }));
      return true;
    }
    return false;
  },

  logoff: () => set(() => ({ isAuthorized: false })),

  createUser: (newUser: User) =>
    set(prevState => ({
      users: [newUser, ...prevState.users],
    })),
}));

export default useLogin;
