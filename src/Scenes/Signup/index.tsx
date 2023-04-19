import React from 'react';
import { FormContainer } from '~/components';
import { useLogin } from '~/stores';
import { useNavigation } from '@react-navigation/native';
import { FormValues, initialValues, validationSchema } from './form';
import { Routes, STACKS } from '../../utils/enums';
import Signup from './Signup';

const SignupContainer = () => {
  const { createUser } = useLogin();
  const { navigate, goBack } = useNavigation();

  const onSubmit = async (form: FormValues) => {
    try {
      createUser(form);
      navigate(STACKS.PUBLIC, { screen: Routes.SUCCESS });
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
      <Signup onPressLogin={goBack} />
    </FormContainer>
  );
};

export default SignupContainer;
