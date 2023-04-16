import React, { FC } from 'react';
import { Wrapper, InputBase, InputLabel } from './styles';

type Props = {
  label?: string;
  isPassword?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
  error?: boolean;
  onFocus?(e?: any): void;
  onEndEditing?(): void;
  onBlur?(e?: any): void;
  onChangeText?(text: string): void;
};

const Input: FC<Props> = ({
  label,
  autoFocus,
  placeholder,
  isPassword = false,
  value,
  error,
  onBlur,
  onFocus,
  onEndEditing,
  onChangeText,
  ...rest
}) => {
  return (
    <Wrapper>
      <InputLabel>{label}</InputLabel>
      <InputBase
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus={autoFocus}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        error={error}
        {...rest}
      />
    </Wrapper>
  );
};

export default Input;
