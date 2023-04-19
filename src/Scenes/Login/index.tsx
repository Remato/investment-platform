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
      await login({ email, password });
      await fetchFunds();
      navigate(STACKS.PRIVATE, { screen: Routes.DASHBOARD });
    } catch (error) {
      //show Error, modal maybe.
    }
  };

  return (
    <FormContainer
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      <Login />
    </FormContainer>
  );
};

export default LoginContainer;
