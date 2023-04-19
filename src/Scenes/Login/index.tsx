import React from 'react';
import Login from './Login';
import { FormValues, initialValues, validationSchema } from './form';
import { useNavigation } from '@react-navigation/native';
import { useLogin, useFund } from '~/stores';
import { FormContainer } from '~/components';
import { Routes, STACKS } from '../../utils/enums';

const LoginContainer = () => {
  const { login } = useLogin();
  const { fetchFunds } = useFund();
  const { navigate } = useNavigation();

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      const isAuthorized = login({ email, password });
      if (isAuthorized) {
        await fetchFunds();
        navigate(STACKS.PRIVATE, { screen: Routes.DASHBOARD });
      }
    } catch (error) {
      //show Error, modal maybe.
    }
  };

  const goToSignup = () => navigate(Routes.SIGNUP);

  return (
    <FormContainer
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      <Login onPressSignup={goToSignup} />
    </FormContainer>
  );
};

export default LoginContainer;
