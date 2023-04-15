import React from 'react';
import { Wrapper, Button, Title, Input } from './styles';

const Login = () => {
  return (
    <Wrapper>
      <Title>Login</Title>
      <Input label="E-mail" />
      <Input label="Password" isPassword />
      <Button name="Login" isFullWidth />
    </Wrapper>
  );
};

export default Login;
