import React, { FC } from 'react';
import { Text } from '~/components';
import { FormikProps, useFormikContext } from 'formik';
import { FormValues } from './form';
import { isEmpty } from 'lodash';
import {
  Wrapper,
  Input,
  TextWrapper,
  Button,
  SignupTextWrapper,
  SignupWrapper,
} from './styles';

type Props = {
  onPressLogin(): void;
};

const Signup: FC<Props> = ({ onPressLogin }) => {
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
      <TextWrapper>
        <Text contrast bold text="Create your account" variant="xxlg" />
      </TextWrapper>
      <Input
        label="First Name"
        value={values.firstName}
        error={!isEmpty(errors.firstName)}
        onBlur={handleBlur('firstName')}
        onFocus={() => {
          setFieldError('firstName', undefined);
          setFieldTouched('firstName', true);
        }}
        onChangeText={handleChange('firstName')}
        onEndEditing={() => setFieldTouched('firstName', false)}
      />
      <Input
        label="Last Name"
        value={values.lastName}
        error={!isEmpty(errors.lastName)}
        onBlur={handleBlur('lastName')}
        onFocus={() => {
          setFieldError('lastName', undefined);
          setFieldTouched('lastName', true);
        }}
        onChangeText={handleChange('lastName')}
        onEndEditing={() => setFieldTouched('lastName', false)}
      />
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
        placeholder="Minimun 8 characters"
        onFocus={() => {
          setFieldError('password', undefined);
          setFieldTouched('password', true);
        }}
        onChangeText={handleChange('password')}
        onEndEditing={() => setFieldTouched('password', false)}
      />

      <Button name="Create account" isFullWidth onPress={submitForm} />

      <SignupTextWrapper>
        <Text text="Already have an account?" variant="sm" />
        <SignupWrapper onPress={onPressLogin}>
          <Text contrast text=" Log in Here" variant="sm" underline />
        </SignupWrapper>
      </SignupTextWrapper>
    </Wrapper>
  );
};

export default Signup;
