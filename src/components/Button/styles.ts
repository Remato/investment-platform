import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

type ButtonProps = {
  isFullWidth: boolean;
};

export const Wrapper = styled.View``;

export const ButtonBase = styled(Button).attrs({
  mode: 'contained',
  labelStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
})<ButtonProps>`
  align-self: ${({ isFullWidth }) => (isFullWidth ? 'auto' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
