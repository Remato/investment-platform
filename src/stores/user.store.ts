import { create } from 'zustand';

const useLogin = create<LoginIntent>((set, get) => ({
  users: [],
  isAuthorized: false,

  login: ({ email, password }: Credentials) => {
    //access users and verify
    //faz map e acha o index do user para comparar a senha depois
    // const userExists = get().users.map(({ email: currentMail }, index) => {
    //   currentMail === email;
    // });
    // if(userExists){

    // }
    set(() => ({ isAuthorized: true }));
  },

  logoff: () => set(() => ({ isAuthorized: false })),

  createUser: (newUser: User) =>
    set(prevState => ({
      users: [newUser, ...prevState.users],
    })),
}));

export default useLogin;
