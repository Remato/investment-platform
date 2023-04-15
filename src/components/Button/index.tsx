import React, { FC } from 'react';
import { ButtonBase } from './styles';

type Props = {
  name: string;
  onPress?(): void;
  iconName?: string;
  isFullWidth?: boolean;
};

const Button: FC<Props> = ({
  name,
  onPress,
  iconName,
  isFullWidth = false,
  ...rest
}) => {
  return (
    <ButtonBase
      icon={iconName}
      mode="contained"
      onPress={onPress}
      isFullWidth={isFullWidth}
      {...rest}>
      {name}
    </ButtonBase>
  );
};

export default Button;
