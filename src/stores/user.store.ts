import { create } from 'zustand';

const useLogin = create<LoginIntent>()(setState => ({
  isAuthorized: false,
  login: () =>
    setState({
      isAuthorized: true,
    }),
}));

export default useLogin;
