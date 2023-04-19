import React, { FC } from 'react';
import { PrimaryButton, SecondaryButton, GhostButton } from './styles';

type Props = {
  name: string;
  onPress?(): void;
  iconName?: string;
  isFullWidth?: boolean;
  variant?: string;
};

const Button: FC<Props> = ({
  name,
  onPress,
  iconName,
  isFullWidth = false,
  variant,
  ...rest
}) => {
  const selectButton = () => {
    switch (variant) {
      case 'primary':
        return (
          <PrimaryButton
            icon={iconName}
            mode="contained"
            onPress={onPress}
            isFullWidth={isFullWidth}
            {...rest}>
            {name}
          </PrimaryButton>
        );
      case 'secondary':
        return (
          <SecondaryButton
            icon={iconName}
            mode="contained"
            onPress={onPress}
            isFullWidth={isFullWidth}
            {...rest}>
            {name}
          </SecondaryButton>
        );
      case 'tertiary':
        return (
          <GhostButton
            icon={iconName}
            mode="contained"
            onPress={onPress}
            isFullWidth={isFullWidth}
            {...rest}>
            {name}
          </GhostButton>
        );
      default:
        return (
          <PrimaryButton
            icon={iconName}
            mode="contained"
            onPress={onPress}
            isFullWidth={isFullWidth}
            {...rest}>
            {name}
          </PrimaryButton>
        );
    }
  };

  return selectButton();
};

export default Button;
