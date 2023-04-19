import React, { FC } from 'react';
import { Wrapper, Button, Title, Input } from './styles';
import { FormikProps, useFormikContext } from 'formik';
import { FormValues } from './form';
import { isEmpty } from 'lodash';

const Login: FC = () => {
  const {
    values,
    errors,
    // touched,
    submitForm,
    // resetForm,
    setFieldError,
    setFieldTouched,
    handleBlur,
    handleChange,
  }: FormikProps<FormValues> = useFormikContext();

  return (
    <Wrapper>
      <Title>Login</Title>
      <Input
        label="E-mail"
        value={values.email}
        error={!isEmpty(errors.email)}
        onBlur={handleBlur('email')}
        onFocus={() => {
          setFieldError('email', undefined);
          setFieldTouched('email', true);
        }}
        onChangeText={handleChange('email')}
        onEndEditing={() => setFieldTouched('email', false)}
      />
      <Input
        isPassword
        label="Password"
        value={values.password}
        error={!isEmpty(errors.password)}
        onBlur={handleBlur('password')}
        onFocus={() => {
          setFieldError('password', undefined);
          setFieldTouched('password', true);
        }}
        onChangeText={handleChange('password')}
        onEndEditing={() => setFieldTouched('password', false)}
      />
      <Button name="Login" isFullWidth onPress={submitForm} />
    </Wrapper>
  );
};

export default Login;
