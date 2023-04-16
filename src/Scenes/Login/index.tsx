import React from 'react';
import Login from './Login';
import { Formik } from 'formik';
import { FormValues, initialValues, validationSchema } from './form';

const LoginContainer = () => {
  // const { createUser } = useLogin();

  const onSubmit = ({ email, password }: FormValues) => {
    //verify
  };

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      <Login />
    </Formik>
  );
};

export default LoginContainer;
