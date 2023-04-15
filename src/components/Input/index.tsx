import React, { FC } from 'react';
import { Wrapper, InputBase, InputLabel } from './styles';

type Props = {
  label?: string;
  isPassword?: boolean;
  placeholder?: string;
};

const Input: FC<Props> = ({
  label,
  isPassword = false,
  placeholder,
  ...rest
}) => {
  return (
    <Wrapper>
      <InputLabel>{label}</InputLabel>
      <InputBase
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        secureTextEntry={isPassword}
        {...rest}
      />
    </Wrapper>
  );
};

export default Input;
